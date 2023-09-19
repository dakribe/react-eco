package category

import (
	"context"

	"github.com/jackc/pgx/v5/pgxpool"
)

type CategoryRepo struct {
	pool *pgxpool.Pool
}

func NewCategoryRepo(p *pgxpool.Pool) *CategoryRepo {
	return &CategoryRepo{
		pool: p,
	}
}

func (r *CategoryRepo) GetAllCategories() ([]Category, error) {
	rows, err := r.pool.Query(context.Background(), "SELECT * FROM categories")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	categories := []Category{}
	for rows.Next() {
		var c Category
		if err := rows.Scan(&c.ID, &c.Name, &c.Description); err != nil {
			return nil, err
		}
		categories = append(categories, c)
	}

	return categories, nil
}
