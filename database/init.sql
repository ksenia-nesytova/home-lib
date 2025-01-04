CREATE TABLE entities (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  entities_type_id INT NOT NULL,
  creation_date DATE,
  language_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (entities_type_id) REFERENCES entities_types(id),
  FOREIGN KEY (language_id) REFERENCES languages(id) 
);


CREATE TABLE entities_types (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE
  );


CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  parent_id INT,
  category_id INT,
  description TEXT, 
  CONSTRAINT fk_parent FOREIGN KEY (parent_id) REFERENCES tags(id) ON DELETE SET NULL
);

CREATE TABLE tag_structure (
  child_tag_id INT REFERENCES tags(id) ON DELETE CASCADE,    -- Child tag (e.g., Paris, Eiffel Tower)
  parent_tag_id INT REFERENCES tags(id) ON DELETE CASCADE,   -- Parent tag (e.g., France, Cities)
  PRIMARY KEY (child_tag_id, parent_tag_id)                   -- Composite key
);


CREATE TABLE entities_tags (
  entities_id INT REFERENCES entities(id),
  tag_id INT REFERENCES tags(id),
  PRIMARY KEY (entities_id, tag_id)
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  description TEXT
);

CREATE TABLE languages (
  id SERIAL PRIMARY KEY,
  code VARCHAR(10) NOT NULL UNIQUE,    -- e.g., 'en', 'fr', 'es'
  name VARCHAR(100) NOT NULL           -- e.g., 'English', 'French', 'Spanish'
);


CREATE TABLE book_details (
  entities_id INT PRIMARY KEY,
  author VARCHAR(255),
  publisher VARCHAR(255),
  publication_year INT,
  edition VARCHAR(255),
  FOREIGN KEY (entities_id) REFERENCES entities(id)
);



-- Indexes for better performance
CREATE INDEX idx_entities_title ON entities(title);
CREATE INDEX idx_tags_name ON tags(name);
CREATE INDEX idx_entities_tags ON entities_tags(entities_id, tag_id);

INSERT INTO entities_types (name) VALUES 
  ('book');

INSERT INTO entities (title, entities_type_id) VALUES 
('Julius Caesar', 1),    -- Julius Caesar (Play)
('The Hunchback of Notre-Dame', 1);  -- Hunchback of Notre-Dame (Book)

INSERT INTO book_details (entities_id, author, language, publication_date) VALUES
((SELECT id FROM entities WHERE title = 'Julius Caesar'), 'William Shakespeare', 'English', '1599-01-01'),    -- Julius Caesar (Play)
((SELECT id FROM entities WHERE title = 'The Hunchback of Notre-Dame'), 'Victor Hugo', 'French', '1831-01-01');  -- Hunchback of Notre-Dame (Book)
