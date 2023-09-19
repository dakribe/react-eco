package category

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/render"
)

type CategoryHandler struct {
	svc CategoryService
}

func NewCategoryHandler(svc CategoryService) *CategoryHandler {
	return &CategoryHandler{
		svc: svc,
	}
}

func (c *CategoryHandler) Register(r *chi.Mux) {
	r.Route("/api/categories", func(r chi.Router) {
		r.Get("/", c.getAll)
	})
}

func (c *CategoryHandler) getAll(w http.ResponseWriter, r *http.Request) {
	categories, err := c.svc.AllCategories()
	if err != nil {
		render.Status(r, 401)
		render.JSON(w, r, "resource not found")
		return
	}

	render.Status(r, 201)
	render.JSON(w, r, categories)
}
