CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- LANGUAGES
CREATE TABLE IF NOT EXISTS languages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code VARCHAR(10) NOT NULL UNIQUE,    -- e.g., 'en', 'fr', 'es'
  name VARCHAR(100) NOT NULL           -- e.g., 'English', 'French', 'Spanish'
);

-- TAG CATEGORIES
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL UNIQUE,
  description TEXT
);


CREATE TABLE IF NOT EXISTS tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL UNIQUE,
  parent_id UUID,
  category_id UUID,
  description TEXT, 
  CONSTRAINT fk_parent FOREIGN KEY (parent_id) REFERENCES tags(id) ON DELETE SET NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS tag_structure (
  child_tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,    -- Child tag (e.g., Paris, Eiffel Tower)
  parent_tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,   -- Parent tag (e.g., France, Cities)
  PRIMARY KEY (child_tag_id, parent_tag_id)                   -- Composite key
);

-- MEDIA TYPES (book, play, etc.)
CREATE TABLE IF NOT EXISTS entities_types (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(50) NOT NULL UNIQUE
  );

CREATE TABLE IF NOT EXISTS entities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  entities_type_id UUID NOT NULL,
  creation_date DATE,
  original_language_id UUID,
  translation_language_id UUID,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (entities_type_id) REFERENCES entities_types(id),


CREATE TABLE IF NOT EXISTS entities_tags (
  entities_id UUID REFERENCES entities(id),
  tag_id UUID REFERENCES tags(id),
  PRIMARY KEY (entities_id, tag_id)
);


-- COVER IMAGES (optional)
CREATE TABLE IF NOT EXISTS covers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  path VARCHAR(500) NOT NULL UNIQUE
);

-- LOCATIONS (shelf N1, L3, etc.)
CREATE TABLE IF NOT EXISTS locations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL UNIQUE
);

-- RATINGS
CREATE TABLE IF NOT EXISTS ratings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  value INT CHECK (value BETWEEN 1 AND 5)
);

-- NOTES (each entity can have a personal note)
CREATE TABLE IF NOT EXISTS notes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  entities_id UUID NOT NULL REFERENCES entities(id) ON DELETE CASCADE,
  content TEXT
);

CREATE TABLE IF NOT EXISTS book_details (
  entities_id UUID PRIMARY KEY,
  author VARCHAR(255),
  publisher VARCHAR(255),
  publication_date DATE,
  edition VARCHAR(255),
  language_id UUID REFERENCES languages(id),
  FOREIGN KEY (entities_id) REFERENCES entities(id)
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_entities_title ON entities(title);
CREATE INDEX IF NOT EXISTS idx_tags_name ON tags(name);
CREATE INDEX IF NOT EXISTS idx_entities_tags ON entities_tags(entities_id, tag_id);


-- BASE DATA
INSERT INTO languages (code, name) VALUES
('en', 'English'),
('fr', 'French'),
('ru', 'Russian'),
('ja', 'Japanese'),
('es', 'Spanish'),
('it', 'Italian')
ON CONFLICT (code) DO NOTHING;

-- SAMPLE ENTITY TYPES
INSERT INTO entities_types (name) VALUES 
  ('book'),
  ('play')
ON CONFLICT (name) DO NOTHING;

-- SAMPLE TAGS
 INSERT INTO tags (name) VALUES
('detective'),
('noir'),
('USA'),
('Philip Marlowe'),
('urban decay'),
('homage'),
('Japan'),
('Kogoro Akechi'),
('psychological'),
('mystery'),
('horror'),
('criminal mastermind'),
('poetry'),
('gothic'),
('Dupin'),
('France'),
('amateur detective'),
('unreliable narrator'),
('metafiction'),
('labyrinth'),
('architecture'),
('madness'),
('philosophy'),
('short stories'),
('Argentina'),
('dreamlike'),
('space'),
('intimacy'),
('mindscape'),
('isolation'),
('fantasy'),
('library'),
('scholarly'),
('historical'),
('Tragedy'),
('Shakespeare'),
('Julius Caesar'),
('Brutus')
ON CONFLICT (name) DO NOTHING;


-- SAMPLE ENTITIES
INSERT INTO entities (title, entities_type_id, creation_date, original_language_id)
SELECT
  'Julius Caesar',
  (SELECT id FROM entities_types WHERE name='book' LIMIT 1),
  NULL,
  (SELECT id FROM languages WHERE code='en' LIMIT 1)
WHERE NOT EXISTS (
  SELECT 1 FROM entities WHERE title='Julius Caesar'
);


INSERT INTO entities (title, entities_type_id, creation_date, original_language_id)
SELECT
  'The Hunchback of Notre-Dame',
  (SELECT id FROM entities_types WHERE name='book' LIMIT 1),
  NULL,
  (SELECT id FROM languages WHERE code='fr' LIMIT 1)
WHERE NOT EXISTS (
  SELECT 1 FROM entities WHERE title='The Hunchback of Notre-Dame'
);


INSERT INTO entities (title, entities_type_id, creation_date, original_language_id)
SELECT
  'The Big Sleep',
  (SELECT id FROM entities_types WHERE name='book' LIMIT 1),
  '1939-01-01',
  (SELECT id FROM languages WHERE code='en' LIMIT 1)
WHERE NOT EXISTS (
  SELECT 1 FROM entities WHERE title='The Big Sleep'
);


-- SAMPLE BOOK DETAILS
INSERT INTO book_details (entities_id, author, publication_date, language_id)
SELECT
  e.id,
  'William Shakespeare',
  '1599-01-01',
  (SELECT id FROM languages WHERE code='en' LIMIT 1)
FROM entities e
WHERE e.title='Julius Caesar'
AND NOT EXISTS (
  SELECT 1 FROM book_details bd WHERE bd.entities_id = e.id
);


INSERT INTO book_details (entities_id, author, publication_date, language_id)
SELECT
  e.id,
  'Victor Hugo',
  '1831-01-01',
  (SELECT id FROM languages WHERE code='fr' LIMIT 1)
FROM entities e
WHERE e.title='The Hunchback of Notre-Dame'
AND NOT EXISTS (
  SELECT 1 FROM book_details bd WHERE bd.entities_id = e.id
);


INSERT INTO book_details (entities_id, author, language_id)
SELECT
  e.id,
  'Raymond Chandler',
  (SELECT id FROM languages WHERE code='en' LIMIT 1)
FROM entities e
WHERE e.title='The Big Sleep'
AND NOT EXISTS (
  SELECT 1 FROM book_details bd WHERE bd.entities_id = e.id
);


-- SAMPLE ENTITY-TAG RELATIONSHIPS
INSERT INTO entities_tags (entities_id, tag_id)
SELECT
  e.id,
  t.id
FROM entities e
JOIN tags t ON t.name IN ('detective','noir','USA','Philip Marlowe','urban decay')
WHERE e.title='The Big Sleep'
ON CONFLICT DO NOTHING;


       
