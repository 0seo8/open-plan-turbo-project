'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@repo/ui/components/button';
import { useImageStore } from '@/app/_store/image';

export default function Home() {
  const router = useRouter();
  const hasViewedImage = useImageStore(state => state.hasViewedImage);

  useEffect(() => {
    if (hasViewedImage) {
      router.push('/result');
    }
  }, [hasViewedImage, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      <div className="flex flex-col gap-2 items-center text-2xl font-semibold justify-center flex-grow text-center">
        <h2>안녕하세요</h2>
        <p>노영서입니다.</p>
      </div>

      <div className="mb-10 w-full max-w-md sm:max-w-xs">
        <Button
          size="default"
          className="w-full"
          onClick={() => router.push('/result?route=normal')}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
