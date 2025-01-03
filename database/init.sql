CREATE TABLE media (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  media_type_id INT NOT NULL,
  creation_date DATE,
  language_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   FOREIGN KEY (media_type_id) REFERENCES media_types(id),
  FOREIGN KEY (language_id) REFERENCES languages(id) 
);


CREATE TABLE media_types (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE,
  description TEXT
);


CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  parent_id INT,
    CONSTRAINT fk_parent FOREIGN KEY (parent_id) REFERENCES tags(id) ON DELETE SET NULL
);

CREATE TABLE tag_structure (
  child_tag_id INT REFERENCES tags(id) ON DELETE CASCADE,    -- Child tag (e.g., Paris, Eiffel Tower)
  parent_tag_id INT REFERENCES tags(id) ON DELETE CASCADE,   -- Parent tag (e.g., France, Cities)
  PRIMARY KEY (child_tag_id, parent_tag_id)                   -- Composite key
);


CREATE TABLE media_tags (
  media_id INT REFERENCES media(id),
  tag_id INT REFERENCES tags(id),
  PRIMARY KEY (media_id, tag_id)
);

CREATE TABLE languages (
  id SERIAL PRIMARY KEY,
  code VARCHAR(10) NOT NULL UNIQUE,    -- e.g., 'en', 'fr', 'es'
  name VARCHAR(100) NOT NULL           -- e.g., 'English', 'French', 'Spanish'
);

-- Indexes for better performance
CREATE INDEX idx_media_title ON media(title);
CREATE INDEX idx_tags_name ON tags(name);
CREATE INDEX idx_media_tags ON media_tags(media_id, tag_id);