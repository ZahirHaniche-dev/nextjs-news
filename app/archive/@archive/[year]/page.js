import React from 'react'
import { getNewsForYear } from '../../../../lib/news';
import NewsList from '../../../../components/news-list';

export default function FilteredNewsPage({ params }) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);
  
  return <NewsList news={news} />;
}
