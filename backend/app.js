// Importation des modules nécessaires
import express from 'express'; // Framework pour créer des serveurs HTTP facilement
import sqlite from 'better-sqlite3'; // Librairie pour interagir avec une base de données SQLite
import cors from 'cors'; // Middleware pour permettre les requêtes cross-origin (CORS)

// Données fictives pour initialiser la base de données
const DUMMY_NEWS = [
  // Exemple : { slug: 'news-1', title: 'Titre 1', content: 'Contenu...', date: '2025-01-01', image: 'url_image.jpg' }
];

// Initialisation de la connexion à la base de données SQLite
const db = sqlite('data.db'); // Le fichier de base de données SQLite sera nommé 'data.db'

// Fonction pour initialiser la base de données et la table des actualités
function initDb() {
  // Création de la table 'news' si elle n'existe pas déjà
  db.prepare(
    'CREATE TABLE IF NOT EXISTS news (id INTEGER PRIMARY KEY, slug TEXT UNIQUE, title TEXT, content TEXT, date TEXT, image TEXT)'
  ).run();

  // Vérification si la table 'news' contient déjà des données
  const { count } = db.prepare('SELECT COUNT(*) as count FROM news').get();

  // Si la table est vide, on insère les données fictives (DUMMY_NEWS)
  if (count === 0) {
    const insert = db.prepare(
      'INSERT INTO news (slug, title, content, date, image) VALUES (?, ?, ?, ?, ?)'
    );

    // Ajout des données fictives dans la base de données
    DUMMY_NEWS.forEach((news) => {
      insert.run(news.slug, news.title, news.content, news.date, news.image);
    });
  }
}

// Création d'une application Express
const app = express();

// Ajout du middleware CORS pour permettre les requêtes cross-origin
app.use(cors());

// Route pour récupérer toutes les actualités
app.get('/news', (req, res) => {
  // Requête SQL pour récupérer toutes les entrées de la table 'news'
  const news = db.prepare('SELECT * FROM news').all();
  res.json(news); // Retourne les données sous forme de JSON
});

// Appel de la fonction pour initialiser la base de données
initDb();

// Lancement du serveur sur le port 8080
app.listen(8080, () => {
  console.log('Serveur démarré sur http://localhost:8080');
});
