import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@repo/ui/components/button';
import { Card } from '@repo/ui/components/card';
import { CardRow } from '@repo/ui/components/card';
import { CardItem } from '@repo/ui/components/card';

export default function ResultPage() {
  const imageData = {
    id: 0,
    author: 'Alejandro Escamilla',
    width: 5000,
    height: 3333,
    url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
    download_url: 'https://picsum.photos/id/0/5000/3333',
  };

  return (
    <div className="min-h-screen relative pt-16">
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
                <CardItem
                  label="url"
                  value={imageData.url}
                  isLink
                  href={imageData.url}
                  mb={false}
                />
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
                <Link href="/">
                  <Button size="sm" className="w-40">
                    이전
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
