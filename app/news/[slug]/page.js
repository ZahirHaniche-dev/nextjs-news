import { DUMMY_NEWS } from '@/dummy-news';
import React from 'react'

export default function pageDetail({params}) {
    const newsSlug = params.slug;
    const newsItems = DUMMY_NEWS.find(newsItems => newsItems.slug === newsSlug);

    console.log(newsItems);
    
  return (
    <article className='news-article'>
      <header>
        <img src={`/images/news/${newsItems.image}`} alt={newsItems.title} />
        <h1>{newsItems.title}</h1>
        <time dateTime={newsItems.date}>{newsItems.date}</time>
      </header>
        
        <p>{newsItems.content}</p>
    </article>
  )
}
