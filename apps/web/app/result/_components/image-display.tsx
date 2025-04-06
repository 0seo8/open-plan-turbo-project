'use client';

import Image from 'next/image';
import { Button } from '@repo/ui/components/button';
import { Card, CardRow, CardItem } from '@repo/ui/components/card';
import { useRouter } from 'next/navigation';

export type ImageData = {
  id: number | string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

interface ImageDisplayProps {
  imageData: ImageData;
}

export function ImageDisplay({ imageData }: ImageDisplayProps) {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center md:gap-12 lg:gap-16">
      <div className="w-full max-w-xl mx-auto mb-6 md:w-5/12 md:mb-0">
        <div className="rounded-2xl overflow-hidden shadow-lg relative aspect-[5000/3333]">
          <Image
            src={imageData.download_url}
            alt={`Photo by ${imageData.author}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
            quality={90}
          />
        </div>
      </div>

      <div className="w-full md:w-5/12">
        <div className="space-y-4 w-full">
          <Card>
            <CardRow className="flex-col md:flex-row gap-2">
              <div className="flex-1">
                <CardItem label="id" value={imageData.id} />
              </div>
              <div className="flex-1">
                <CardItem label="author" value={imageData.author} />
              </div>
            </CardRow>
          </Card>

          <Card>
            <CardRow className="flex-col md:flex-row gap-2">
              <div className="flex-1">
                <CardItem
                  label="width"
                  value={imageData.width.toLocaleString()}
                  className="text-xl"
                />
              </div>
              <div className="flex-1">
                <CardItem
                  label="height"
                  value={imageData.height.toLocaleString()}
                  className="text-xl"
                />
              </div>
            </CardRow>
          </Card>

          <Card>
            <CardItem label="url" value={imageData.url} isLink href={imageData.url} mb={false} />
            <div className="mt-3">
              <CardItem
                label="download_url"
                value={imageData.download_url}
                isLink
                href={imageData.download_url}
                mb={false}
              />
            </div>
          </Card>

          <div className="mt-6 flex justify-center">
            <Button
              size="sm"
              className="w-40"
              onClick={() => {
                router.push('/');
              }}
            >
              이전
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
