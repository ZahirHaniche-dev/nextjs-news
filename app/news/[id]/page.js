import React from 'react'

export default function pageDetail({params}) {
    const newsId = params.id;
  return (
    <>
        <h1>Page Detail</h1>
        <p>News ID : {newsId}</p>
    </>
  )
}
