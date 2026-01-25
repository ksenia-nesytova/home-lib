CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- LANGUAGES
CREATE TABLE IF NOT EXISTS languages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code VARCHAR(10) NOT NULL UNIQUE,    -- e.g., 'en', 'fr', 'es'
  name VARCHAR(100) NOT NULL           -- e.g., 'English', 'French', 'Spanish'
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

-- MEDIA TYPES (book, video_game, etc.)
CREATE TABLE IF NOT EXISTS media_types (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(50) NOT NULL UNIQUE
  );

-- TAG CATEGORIES
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL UNIQUE,
  description TEXT
);

-- TAGS
CREATE TABLE IF NOT EXISTS tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL UNIQUE,
  category_id UUID,
  description TEXT, 
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- TAG HIERARCHY
CREATE TABLE IF NOT EXISTS tag_structure (
  child_tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,    -- Child tag (e.g., Paris, Eiffel Tower)
  parent_tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,   -- Parent tag (e.g., France, Cities)
  PRIMARY KEY (child_tag_id, parent_tag_id)                   -- Composite key
);

-- ENTITIES (abstract, agnotsitc)
CREATE TABLE IF NOT EXISTS media_entities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255), -- main author/creator(Victor Hugo, Electronic Arts, Creedence Clearwater Revival, etc.)
  media_type_id UUID REFERENCES media_types(id) ON DELETE SET NULL,
  language_id UUID REFERENCES languages(id) ON DELETE SET NULL, -- language of this entity (original language) 
  description TEXT,
  notes TEXT,
  creation_date DATE, --when the work was created/published
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- INSTANCE OF AN ENTITY (i.e. copy of a book in a specific language)
CREATE TABLE IF NOT EXISTS media_instances (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  media_entity_id UUID NOT NULL REFERENCES media_entities(id) ON DELETE CASCADE,
  format TEXT, -- physical, ebook, vinyl, etc. CRETAE TABLE FOR FORMATS LATER?
  acquisition_date DATE,
  notes TEXT,
  location_id UUID REFERENCES locations(id),
  cover_id UUID REFERENCES covers(id)
);

CREATE TABLE IF NOT EXISTS book_details (
  media_entity_id UUID PRIMARY KEY REFERENCES media_entities(id) ON DELETE CASCADE,
  author VARCHAR(255),
  translation_language_id UUID REFERENCES languages(id)
);


CREATE TABLE IF NOT EXISTS media_entities_tags (
  media_entity_id UUID REFERENCES media_entities(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id),
  PRIMARY KEY (media_entity_id, tag_id)
);


-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_entities_title ON media_entities(title);
CREATE INDEX IF NOT EXISTS idx_tags_name ON tags(name);
CREATE INDEX IF NOT EXISTS idx_entities_tags ON media_entities_tags(media_entity_id, tag_id);



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
INSERT INTO media_types (name) VALUES 
  ('book'),
  ('video_game'),
  ('movie'),
  ('music')
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
INSERT INTO media_entities (title, author, media_type_id, creation_date, language_id)
SELECT
  'Julius Caesar',
  'William Shakespeare',
  (SELECT id FROM media_types WHERE name='book' LIMIT 1),
  NULL,
  (SELECT id FROM languages WHERE code='en' LIMIT 1)
WHERE NOT EXISTS (
  SELECT 1 FROM media_entities WHERE title='Julius Caesar'
);


INSERT INTO media_entities (title,author,media_type_id, creation_date, language_id)
SELECT
  'The Hunchback of Notre-Dame',
  'Victor Hugo',
  (SELECT id FROM media_types WHERE name='book' LIMIT 1),
  NULL,
  (SELECT id FROM languages WHERE code='fr' LIMIT 1)
WHERE NOT EXISTS (
  SELECT 1 FROM media_entities WHERE title='The Hunchback of Notre-Dame'
);


INSERT INTO media_entities (title, author, media_type_id, creation_date, language_id)
SELECT
  'The Big Sleep',
  'Raymond Chandler',
  (SELECT id FROM media_types WHERE name='book' LIMIT 1),
  '1939-01-01',
  (SELECT id FROM languages WHERE code='en' LIMIT 1)
WHERE NOT EXISTS (
  SELECT 1 FROM media_entities WHERE title='The Big Sleep'
);


-- SAMPLE BOOK DETAILS
INSERT INTO book_details (media_entity_id, translation_language_id)
SELECT
  e.id,
  (SELECT id FROM languages WHERE code='en' LIMIT 1)
FROM media_entities e
WHERE e.title='Julius Caesar'
AND NOT EXISTS (
  SELECT 1 FROM book_details bd WHERE bd.media_entity_id = e.id
);

INSERT INTO book_details (media_entity_id,translation_language_id)
SELECT
  e.id,
  (SELECT id FROM languages WHERE code='fr' LIMIT 1)
FROM media_entities e
WHERE e.title='The Hunchback of Notre-Dame'
AND NOT EXISTS (
  SELECT 1 FROM book_details bd WHERE bd.media_entity_id = e.id
);

INSERT INTO book_details (media_entity_id, translation_language_id)
SELECT
  e.id,
  (SELECT id FROM languages WHERE code='en' LIMIT 1)
FROM media_entities e
WHERE e.title='The Big Sleep'
AND NOT EXISTS (
  SELECT 1 FROM book_details bd WHERE bd.media_entity_id = e.id
);

-- SAMPLE ENTITY-TAG RELATIONSHIPS
INSERT INTO media_entities_tags (media_entity_id, tag_id)
SELECT
  e.id,
  t.id
FROM media_entities e
JOIN tags t ON t.name IN ('detective','noir','USA','Philip Marlowe','urban decay')
WHERE e.title='The Big Sleep'
ON CONFLICT DO NOTHING;


       
