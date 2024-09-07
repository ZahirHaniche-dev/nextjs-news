import Link from "next/link";

export default function NewsList({ news }) {
    return (
        <ul className="news-list">
            { news.map((newsItems) => (
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
    );
}