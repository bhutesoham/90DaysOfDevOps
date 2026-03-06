package main

import (
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello from Go Docker App 🚀")
}

func main() {
	http.HandleFunc("/", handler)

	fmt.Println("Server running on port 8080")

	// IMPORTANT: Listen on 0.0.0.0, not localhost
	http.ListenAndServe(":8080", nil)
}