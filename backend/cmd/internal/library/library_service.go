package library

type LibraryService struct {
	repo LibraryRepository
}

func NewLibrarySvc(r LibraryRepository) LibraryService {
	return LibraryService{
		repo: r,
	}
}

func (s *LibraryService) librariesById(id int) ([]Library, error) {
	libraries, err := s.repo.getLibrariesByID(id)
	if err != nil {
		return nil, err
	}

	return libraries, nil
}
