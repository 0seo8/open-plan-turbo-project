'use client';

import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const isResultPage = pathname === '/result';
  return (
    <header className="fixed top-0 left-0 w-full p-4 z-10">
      <h1
        className={`text-center text-base md:text-lg font-medium ${
          isResultPage ? 'text-white' : 'text-black'
        }`}
      >
        노영서의 프론트앤드 과제
      </h1>
    </header>
  );
}
