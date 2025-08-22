'use client';

import { useEffect } from "react";
import { redirect } from 'next/navigation';
import Intro from "./components/intro";
import '@/app/style/components/intro.scss';


export default function HomePage() {

  useEffect(() => {
    const timer = setTimeout(() => {
      redirect('/login');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main>
      <Intro />
    </main>
  );
}
