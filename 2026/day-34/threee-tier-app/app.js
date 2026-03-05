// app.js
const http = require('http');
const mysql = require('mysql2/promise'); // Promise-based client
const redis = require('redis');

const PORT = 3000;

// MySQL configuration
const dbConfig = {
  host: 'mysql',       // Use service name from docker-compose
  user: 'root',
  password: 'Test@123',
  database: 'testdb'
};

// Redis configuration
const redisClient = redis.createClient({
  url: 'redis://redis:6379'
});

// Connect to Redis with retry
async function connectRedis(retries = 10) {
  for (let i = 0; i < retries; i++) {
    try {
      await redisClient.connect();
      console.log('Connected to Redis ✅');
      return;
    } catch (err) {
      console.log('Redis not ready, retrying in 3s...');
      await new Promise(res => setTimeout(res, 3000));
    }
  }
  throw new Error('Could not connect to Redis after retries ❌');
}

// Connect to MySQL with retry
async function connectDb(retries = 10) {
  for (let i = 0; i < retries; i++) {
    try {
      const connection = await mysql.createConnection(dbConfig);
      console.log('Connected to MySQL ✅');
      return connection;
    } catch (err) {
      console.log('MySQL not ready, retrying in 3s...');
      await new Promise(res => setTimeout(res, 3000));
    }
  }
  throw new Error('Could not connect to MySQL after retries ❌');
}

// Start server
async function startServer() {
  await connectRedis();
  const dbConnection = await connectDb();

  const server = http.createServer(async (req, res) => {
    try {
      // Check Redis cache first
      const cached = await redisClient.get('db_time');
      if (cached) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`From Redis Cache ⚡\n${cached}\n`);
        return;
      }

      // Query MySQL
      const [rows] = await dbConnection.execute('SELECT NOW() AS time');
      const dbTime = String(rows[0].time); // Convert to string for Redis

      // Store in Redis for 10 seconds
      await redisClient.setEx('db_time', 10, dbTime);

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`From MySQL 🐬\n${dbTime}\n`);
    } catch (err) {
      console.error('Database or Redis error:', err.message);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`DB or Cache Error ❌\n${err.message}`);
    }
  });

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
  });
}

// Run
startServer().catch(err => {
  console.error('Fatal startup error:', err.message);
  process.exit(1);
});