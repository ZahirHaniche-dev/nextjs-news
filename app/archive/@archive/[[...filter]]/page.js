import React from 'react'
import { getAvailableNewsYears, getNewsForYear } from '../../../../lib/news';
import NewsList from '../../../../components/news-list';
import Link from 'next/link';

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map(link => 
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  
  )

  // const news = getNewsForYear(newsYear);
  // return <NewsList news={news} />;
}
