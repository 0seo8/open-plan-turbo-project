'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@repo/ui/components/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">이미지를 불러오는데 실패했습니다</h2>
        <p className="text-gray-600 mb-8">{error.message}</p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} size="sm">
            다시 시도
          </Button>
          <Link href="/">
            <Button size="sm">홈으로</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
