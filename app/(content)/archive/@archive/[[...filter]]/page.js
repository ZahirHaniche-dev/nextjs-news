import React from 'react'
import { 
  getAvailableNewsYears, 
  getAvailableNewsMonths, 
  getNewsForYear, 
  getNewsForYearAndMonth 
} from '../../../../../lib/news';
import NewsList from '../../../../../components/news-list';
import Link from 'next/link';

export default async function FilteredNewsPage({ params }) {
  const filter = params.filter;
  console.log(filter);
  const selectedYear = filter ?.[0];
  const selectedMonth = filter?.[1];

  
  let isYearSelected = false;

  let news;
  let links = await getAvailableNewsYears(); // Assurez-vous que c'est un tableau

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear); // Assurez-vous que links est un tableau
    isYearSelected = true;
  } 


  if(selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected year and month.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  const availableYears = await getAvailableNewsYears();

  if(selectedYear && !availableYears.includes(selectedYear) || 
  selectedMonth && !getAvailableNewsMonths(selectedYear).includes(selectedMonth)) {
    throw new Error('Invalid filter');
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = isYearSelected ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
              const displayText = isYearSelected ? link : link.toString();
              return (
                <li key={link}>
                  <Link href={href}>{displayText}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  )
}
