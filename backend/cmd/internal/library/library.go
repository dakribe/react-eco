package library

type Library struct {
	ID          int
	Name        string
	Description string
	RepoUrl     string
	CategoryID  int `json:"-"`
}
