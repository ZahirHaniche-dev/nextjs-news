import React from 'react'
import { getAvailableNewsYears, getAvailableNewsMonths, getNewsForYear, getNewsForYearAndMonth } from '../../../../../lib/news';
import NewsList from '../../../../../components/news-list';
import Link from 'next/link';

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  console.log(filter);
  const selectedYear = filter ?.[0];
  const selectedMonth = filter?.[1];

  let links = getAvailableNewsYears();
  let isYearSelected = false;

  let news;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
    isYearSelected = true;
  } 


  if(selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected year and month.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if(selectedYear && !getAvailableNewsYears().includes(selectedYear) || 
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
