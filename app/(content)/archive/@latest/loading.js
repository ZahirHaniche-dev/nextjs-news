"use client";

import { useContext } from 'react';
import { MyContext } from '../../../context/MyContext';

export default function loadingArchive() {
  const context = useContext(MyContext);
  if (!context) {
    return <div>Loading...</div>;
  }
  return <div>{context.value}</div>;
}
