### Task 1 - DNS- How Name Becomes IPs

1. Explain in 3–4 lines: what happens when you type google.com in a browser?

- When we type google.com in browser sequence of event unfold in the background , which can be summerized below
  1. Domain Name Resolution (DNS Lookup)
  - Before the browser connects to Google's server, it needs IP address coressponding to google.com . This process is called `DNS resolution`. It asks to address to DNS server
  2. Establishing a TCP conncetion
  - Once the IP is known, it establishes a TCP connection using three-way handshake
  3. Sending HTTP request
  - Once connected, the browser sends an HTTP request.
  4. Receiving and Processing the Response
  - Google's server responds with an HTTP response, typically a 301 redirect
  5. Rendering the webpage

2. What are different record types ?
   - A - is a fundamental type of DNS record. DNS A records map domain names to their corresponding IPv4 addresses, which are 32-bit numerical strings
   - AAAA - also known as “quad-A” records, serve a similar purpose to A records but are used for mapping domain names to IPv6 addresses rather than IPv4. IPv6 addresses are 128-bit numerical strings, allowing for a much larger pool of unique addresses compared to IPv4’s 32-bit system.
   - CNAME - are used to map an alias or subdomain to another domain name. Instead of pointing directly to an IP address
   - MX - are used to specify the mail servers responsible for receiving e-mail on behalf of a domain. Instead of directing web traffic, MX records ensure that e-mail is routed to the appropriate mail server based on the domain name in the recipient’s e-mail address
   - NS - DNS NS records (short for Name Server) specify the authoritative name servers that hold the DNS records for a particular domain. These records are used for directing queries to the appropriate DNS servers responsible for resolving domain names.

3. Run: dig google.com — identify the A record and TTL(Time to Live) from the output

- A record is `142.250.186.78`
- TTL - 139 seconds

### Task 2 - IP addressing -

1. What is an IPv4 address? How is it structured? (e.g., 192.168.1.10)
   - An IP address (Internet Protocol address) is a unique identifier assigned to each device connected to a network that uses the Internet Protocol for communication. It serves two main purposes:
     - Identification: It uniquely identifies a device on a network.
     - Location Addressing: It indicates where a device is located within a network, making data routing possible.

   - IPv4 addresses consist of three parts:
     - Network Part: The network part indicates the distinctive variety that's appointed to the network. The network part conjointly identifies the category of the network that's assigned.
     - Host Part: The host part uniquely identifies the machine on your network. This part of the IPv4 address is assigned to every host. For each host on the network, the network part is the same, however, the host half must vary.
     - Subnet Number: This is the non obligatory part of IPv4. Local networks that have massive numbers of hosts are divided into subnets and subnet numbers are appointed to that.

2. Difference between public and private IPs — give one example of each
   - A Private IP Address is used for communication within a local network (LAN). It enables devices such as computers, smartphones, and printers to exchange data internally.
   - A Public IP Address is an IP address used to communicate outside a local network over the internet. It is globally routable and allows devices or networks to send and receive data from external systems.

3. What are the private IP ranges?
   - 10.x.x.x, 172.16.x.x – 172.31.x.x, 192.168.x.x
4. Run: ip addr show — identify which of your IPs are private
   - my private IP is `127.0.0.1` and public IP is `192.168.0.63`

### Task 3: CIDR & Subnetting

1. What does `/24` mean in `192.168.1.0/24`?
   - The number after the slash defines the network prefix, indicating how many bits are fixed. Smaller numbers (e.g., /16) provide larger ranges, while larger numbers (e.g., /32) define single IPs.
2. How many usable hosts in a `/24`? A `/16`? A `/28`?
   - /24 2 8 IP address
   - /16 2 16 IP address
   - /28 2 6 IP address
3. Explain in your own words: why do we need subnet?
   - We need subnet to break large, inefficient networks into smaller,manageable and secure subnetworks. It reduces congestion and enhances network performance

4. Quick exercise — fill in:

| CIDR | Subnet Mask     | Total IPs | Usable Hosts |
| ---- | --------------- | --------- | ------------ |
| /24  | 255.255.255.0   | 256       | 254          |
| /16  | 255.255.0.0     | 65,536    | 65,534       |
| /28  | 255.255.255.240 | 16        | 14           |

---

### Task 4: Ports – The Doors to Services

1. What is a port? Why do we need them?
   - A port is a logical communication endpoint used by the transport layer (TCP/UDP) to identify a specific application or service on a device.
2. Document these common ports:

| Port  | Service |
| ----- | ------- |
| 22    | ssh     |
| 80    | Nginx   |
| 443   | HTTP    |
| 53    | DNS     |
| 3306  | MySQL   |
| 6379  | Redis   |
| 27017 | MongoDB |

3. Run `ss -tulpn` — match at least 2 listening ports to their services

---
