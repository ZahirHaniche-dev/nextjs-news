"use client";

import { useContext } from 'react';
import { MyContext } from '../../../../../context/MyContext.js';

export default function loadingImageNewsItem() {
  const context = useContext(MyContext);
  if (!context) {
    return <div>Loading...</div>;
  }
  return <div>{context.value}</div>;
}
