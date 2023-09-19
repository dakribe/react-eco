package main

import (
	"fmt"
	"net/http"
	"server/cmd/internal/category"
	"server/cmd/internal/database"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file")
	}

	pool := database.NewPostgres()
	catRepo := category.NewCategoryRepo(pool)
	catSvc := category.NewCategoryService(catRepo)

	r := chi.NewRouter()
	r.Use(middleware.Logger)

	r.Get("/healthcheck", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("OK"))
	})

	category.NewCategoryHandler(*catSvc).Register(r)

	http.ListenAndServe(":8000", r)
}
