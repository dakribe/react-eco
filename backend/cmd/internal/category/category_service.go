package category

import "strconv"

type CategoryService struct {
	repo *CategoryRepo
}

func NewCategoryService(r *CategoryRepo) *CategoryService {
	return &CategoryService{
		repo: r,
	}
}

type CategoryRes struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
}

func (s *CategoryService) AllCategories() ([]CategoryRes, error) {
	categories, err := s.repo.GetAllCategories()

	categoriesWithStringIDs := make([]CategoryRes, len(categories))

	for i, v := range categories {
		categoriesWithStringIDs[i] = CategoryRes{
			ID:          strconv.Itoa(v.ID),
			Name:        v.Name,
			Description: v.Description,
		}
	}

	if err != nil {
		return []CategoryRes{}, nil
	}

	return categoriesWithStringIDs, nil
}
