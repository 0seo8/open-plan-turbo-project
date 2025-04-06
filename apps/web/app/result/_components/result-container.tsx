'use client';

import { useEffect } from 'react';
import { useImageStore } from '@/app/_store/image';
import { ImageDisplay } from '@/app/result/_components/image-display';
import { useRouter } from 'next/navigation';

export type ImageData = {
  id: number | string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

interface ResultContainerProps {
  imageData: ImageData;
  isNormalRoute: boolean;
}

export function ResultContainer({ imageData, isNormalRoute }: ResultContainerProps) {
  const router = useRouter();
  const { hasViewedImage, setPhotoData } = useImageStore();

  useEffect(() => {
    if (isNormalRoute || hasViewedImage) {
      setPhotoData(imageData);
      return;
    }

    const timer = setTimeout(() => {
      router.push('/');
    }, 1000);

    return () => clearTimeout(timer);
  }, [hasViewedImage, imageData, router, setPhotoData, isNormalRoute]);

  return (
    <div className="min-h-screen relative pt-16">
      {!isNormalRoute && !hasViewedImage && (
        <div className="absolute top-4 left-0 right-0 z-10 flex justify-center">
          <p className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md">
            이미지를 먼저 조회해주세요. 메인 페이지로 이동합니다...
          </p>
        </div>
      )}
      <div
        className="fixed inset-0 w-screen h-screen bg-[#FAFAFA]"
        style={{
          backgroundImage: `url(${imageData.download_url})`,
          backgroundSize: '200%',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          opacity: 0.3,
          zIndex: -2,
        }}
      />

      <div
        className="fixed inset-0 w-screen h-screen z-[-1]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(211, 211, 211, 0.1) 0%, rgba(211, 211, 211, 0.7) 50%, rgba(169, 169, 169, 0.95) 100%)',
        }}
      />

      <div className="relative z-1 flex flex-col items-center justify-center px-4 w-full min-h-screen lg:container lg:mx-auto">
        <ImageDisplay imageData={imageData} />
      </div>
    </div>
  );
}
