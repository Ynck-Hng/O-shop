-- Figurine

DROP TABLE IF EXISTS "review";
DROP TABLE IF EXISTS "figurine";

CREATE TABLE IF NOT EXISTS "figurine" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "description" TEXT,
  "size" REAL,
  "price" REAL NOT NULL,
  "category" TEXT
);

INSERT INTO "figurine"("id","name", "description", "size", "price", "category") VALUES
(1,'Aerith', 'Aerith Gainsborough est la dernière descendante des Cetras (ou Anciens), fille du professeur Gast et d''Ifalna',35,24.99,'Gentil'),
(2,'Barret', 'Barret Wallaceest le chef d''AVALANCHE, groupe écologiste de résistance à l''épuisement des ressources planétaires (l''énergie Mako) par la Shinra.',30,24.99,'Gentil'),
(3,'Cloud', 'Cloud Strife est le principal héros de Final Fantasy VII. Convaincu d''être un ancien SOLDAT, il est au début du jeu un mercenaire employé par AVALANCHE.',37,34.99,'Gentil'),
(4,'Nanaki', 'Rouge XIII, de son vrai nom Nanaki, est l''un des derniers survivants de sa tribu, composée de personnages proches des félidés (lion, tigre, jaguar, ...) par leur aspect physique, vivant à Cosmo Canyon.',25,24.99,'Animal'),
(5,'Sephiroth', 'Sephiroth est présenté au cours du jeu comme le fils de Hojo, un savant fou, et de Lucrécia, son assistante.',35,34.99,'Méchant'),
(6,'Tifa', 'Tifa Lockheart est une jeune femme originaire de Nibelheim, amie d''enfance de Cloud et membre du groupe AVALANCHE',35,24.99,'Gentil');


-- Review

CREATE TABLE IF NOT EXISTS "review" (
  "id" SERIAL PRIMARY KEY,
  "author" TEXT NOT NULL,
  "note" REAL NOT NULL,
  "title" TEXT,
  "message" TEXT,
  "figurine_id" INT,
  FOREIGN KEY("figurine_id") REFERENCES "figurine"("id")
);

INSERT INTO "review" ("id", "author", "note", "title", "message", "figurine_id") VALUES
(1,'Jean Claude Dus',4, 'Une belle figurine', 'La finition est bien, le rose est vraiment rose. Seul bémol, le livreur a abimé la main droite.' ,1),
(2,'Thérèse de Monsou',2, 'Bof Bof...', 'La figurine ne tient pas debout seule. Certains détails sont mal finis, comme les bracelets.' ,1),
(3,'Monsieur Preskovitch',5, 'Juste parfait', 'C''est tellement parfait, on dirait que c''est roulé à la main sous les aisselles.' ,1),

(4,'Barbapapix',5, 'Parfait', 'Un niveau de détail bluffant. A se procurer absolument si vous êtes collectionneurs.' ,2),
(5,'Fabrice',4, 'Très bien', 'Le rapport qualité prix est plus que bien, le prix est vraiment bas pour cette figurine de qualité.' ,2),
(6,'Thomas',1, 'Déçu', 'Trop de défaut de peintures... A éviter' ,2),

(7,'Lydie',5, 'Parfaite', 'Magnifique statuette de qualité du plus bel effet dans ma vitrine. Le rendu des couleurs est vraiment magnifique.' ,3),
(8,'Aurore',3, 'Belle mais...', 'La figurine n''est pas stable, la faute à un socle trop cheap.' ,3),
(9,'Maman Gato',4, 'Contente de mon achat', 'Belles finitions, beau mouvement. La figurine est stable. Mon fils est ravi.' ,3),

(10,'Victor',4, 'Satisfait', 'Bien protégé par du papier bulle et arrivé dans son carton d''origine. Figurine superbe et bien grande.' ,4),
(11,'Jean-André',5,'Superbe','Bonne figurine je recommande' ,4),

(12,'Céline',5, 'Magnifique', 'Je trouve cette figurine magnifique. Le sens du détail est là, j''ai beau cherché des endroits ou la finition aurai été bâclés, je n''en trouve pas.' ,5),
(13,'Florian',2, 'A revoir...', 'Problème de livraison, la figurine est arrivée abimée !' ,5),
(14,'Marie-Pierre',5, 'Très belle figurine', 'Très contente de mon achat. Bonne qualité et taille convenable.' ,5),

(15,'Magalie',1, 'Un ratâge !', 'Les proportions ne correspondent pas à la photo. Très déçue.' ,6),
(16,'Antoinette',0, 'A éviter !', 'La figurine est arrivée cassée ! Malgré les réparations, elle reste moche.' ,6),
(17,'Vincent',2, 'Assez décu', 'Malheureusement, la figurine ne représente pas fidèlement le personnage.' ,6);
