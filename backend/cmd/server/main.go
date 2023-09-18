package main

import (
	"fmt"
	"net/http"
	"server/cmd/internal/datbase"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file")
	}

	pool := datbase.NewPostgres()
	fmt.Println(pool)

	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Get("/healthcheck", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("OK"))
	})

	http.ListenAndServe(":8000", r)
}
