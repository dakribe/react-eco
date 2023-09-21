package library

import (
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/render"
)

type LibraryHandler struct {
	svc LibraryService
}

func NewLibraryHandler(s LibraryService) *LibraryHandler {
	return &LibraryHandler{
		svc: s,
	}
}

func (l *LibraryHandler) Register(r *chi.Mux) {
	r.Route("/api/libraries", func(r chi.Router) {
		r.Get("/{id}", l.librariesById)
	})
}

func (l *LibraryHandler) librariesById(w http.ResponseWriter, r *http.Request) {
	IDParam := chi.URLParam(r, "id")
	id, err := strconv.Atoi(IDParam)
	if err != nil {
		return
	}

	libraries, err := l.svc.librariesById(id)
	if err != nil {
		render.Status(r, 401)
		render.JSON(w, r, "resource not found")
		return
	}

	render.Status(r, 201)
	render.JSON(w, r, libraries)
	return
}
