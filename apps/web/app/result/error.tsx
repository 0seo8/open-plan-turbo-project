'use client';

import Link from 'next/link';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ResultError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('결과 페이지 오류 발생:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">사진 결과를 불러올 수 없습니다</h1>
      <p className="mb-6 text-gray-600">
        {error.message || '사진 데이터를 로드하는 중 문제가 발생했습니다.'}
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-4 py-2 bg-black text-white rounded-md hover:opacity-90"
        >
          다시 시도
        </button>
        <Link href="/">홈으로 돌아가기</Link>
      </div>
    </div>
  );
}
