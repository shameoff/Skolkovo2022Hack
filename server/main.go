package main

import (
	"fmt"
)

func main() {
	r := mux.NewRouter()
	routes.registerRoutes(r)
	http.Handle("/", r)
	log.Fatal(http.ListenAndServe("localhost:9010", r))
}
