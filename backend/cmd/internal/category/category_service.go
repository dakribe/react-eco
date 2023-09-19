package category

type CategoryService struct {
	repo *CategoryRepo
}

func NewCategoryService(r *CategoryRepo) *CategoryService {
	return &CategoryService{
		repo: r,
	}
}

func (s *CategoryService) AllCategories() ([]Category, error) {
	categories, err := s.repo.GetAllCategories()
	if err != nil {
		return []Category{}, nil
	}

	return categories, nil
}
