package library

import (
	"context"

	"github.com/jackc/pgx/v5/pgxpool"
)

type LibraryRepository struct {
	pool *pgxpool.Pool
}

func NewLibraryRepo(p *pgxpool.Pool) LibraryRepository {
	return LibraryRepository{
		pool: p,
	}
}

func (r *LibraryRepository) getLibrariesByID(ID int) ([]Library, error) {
	query := `
	SELECT l.ID, l.Name, l.Description, l.repo_url
	FROM libraries l
	JOIN categories c ON category_id = c.ID
	WHERE c.ID = $1
	`
	rows, err := r.pool.Query(context.Background(), query, ID)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	libraries := []Library{}
	for rows.Next() {
		var l Library
		if err := rows.Scan(&l.ID, &l.Name, &l.Description, &l.RepoUrl); err != nil {
			return nil, err
		}
		libraries = append(libraries, l)
	}

	return libraries, nil
}
