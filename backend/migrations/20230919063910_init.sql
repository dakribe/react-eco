-- +goose Up
CREATE TABLE categories (
  id bigserial PRIMARY KEY,
  name varchar(255),
  description text
);

CREATE TABLE libraries (
  id bigserial PRIMARY KEY,
  name varchar(255),
  description text,
  repo_url text,
  category_id bigint,
  FOREIGN KEY (id) REFERENCES categories(id)
);

-- +goose Down
DROP TABLE IF EXISTS categories;

DROP TABLE IF EXISTS libraries;
