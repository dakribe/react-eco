package library

type Library struct {
	ID          int `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	RepoUrl     string 	`json:"repoUrl"`
	CategoryID  int `json:"-"`
}
