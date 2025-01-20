
import NewsList from '../../../components/news-list';
import { getAllNews } from '../../../lib/news';

export default async function NewsPage() {
  /* OPTION 1 Client Side Data Fetching */
  
 /* const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [news, setNews] = useState();
  
  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/news');

      if (!response.ok) {
        setError('Failed to fetch news.');
        setIsLoading(false);
      }

      const news = await response.json();
      setIsLoading(false);
      setNews(news);
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />
  } */

  /* OPTION 2 Server Side Data Fetching */

  // Envoi d'une requête HTTP GET à l'URL spécifiée pour récupérer les actualités
  /*const response = await fetch('http://localhost:8080/news');

  // Vérification de la réponse HTTP
  if (!response.ok) {
    // Si le statut HTTP indique une erreur (par exemple, 404 ou 500),
    // on lève une exception avec un message d'erreur
    throw new Error("Failed to fetch news.");
  }

  // Si la réponse est valide, on convertit le corps de la réponse en JSON
  const news = await response.json();*/


  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}