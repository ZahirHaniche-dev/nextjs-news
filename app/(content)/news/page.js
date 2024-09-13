
import React from 'react'
import { DUMMY_NEWS } from '../../../dummy-news'
import NewsList from '../../../components/news-list'


export default function page() {
  return (
    <>
        <h1>News</h1>
        <NewsList news={DUMMY_NEWS} />
    </>
    
  )
}
