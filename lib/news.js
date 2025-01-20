// Importation du module 'better-sqlite3' pour interagir avec une base de données SQLite
import sql from 'better-sqlite3';

// Initialisation de la connexion à la base de données 'data.db'
// Si le fichier 'data.db' n'existe pas, il sera créé automatiquement
const db = sql('data.db');

// Fonction asynchrone pour récupérer toutes les actualités depuis la base de données
export async function getAllNews() {
  // Exécution d'une requête SQL pour récupérer toutes les entrées de la table 'news'
  const news = db.prepare('SELECT * FROM news').all();

  // Simulation d'un délai de 2 secondes
  // Cela peut être utile pour imiter un délai de réponse d'une API réelle
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Retourne la liste des actualités sous forme de tableau
  return news;
}

export async function getNewsItem(slug) {
  const newsItem = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return newsItem;
}

export async function getLatestNews() {
  const latestNews = db
    .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
    .all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestNews;
}

export async function getAvailableNewsYears() {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((year) => year.year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return years;
}

export function getAvailableNewsMonths(year) {
  return db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year)
    .map((month) => month.month);
}

export async function getNewsForYear(year) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}

export async function getNewsForYearAndMonth(year, month) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}