import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
        <ul className="news-list">
          { DUMMY_NEWS.map((newsItems) => (
            <li key={newsItems.id}>
                <Link href={`/news/${newsItems.slug}`}>
                  <img 
                    src={`/images/news/${newsItems.image}`} 
                    alt={newsItems.title} />
                  <span>{newsItems.title}</span>
                </Link>
            </li>
          ))}
        </ul>
    </>
  );
}
