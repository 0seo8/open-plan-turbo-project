import { Button } from '@repo/ui/components/button';
import Link from 'next/link';
import Image from 'next/image';

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
    <div className="min-h-screen relative">
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
      <div className="relative z-1 flex flex-col items-center justify-center px-4 w-full min-h-screen md:flex-row md:px-8 lg:px-16">
        <div className="w-full max-w-xl mx-auto mb-6 md:w-1/2 md:mr-8 md:mb-0 md:self-center">
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

        <div className="w-full md:w-1/2 md:self-center">
          <div className="space-y-4 w-full max-w-xl mx-auto">
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="md:flex md:justify-between">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-sm font-medium text-gray-500">id</h3>
                  <p>{imageData.id}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">author</h3>
                  <p>{imageData.author}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="md:flex md:justify-between">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-sm font-medium text-gray-500">width</h3>
                  <p>{imageData.width}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">height</h3>
                  <p>{imageData.height}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md">
              <div>
                <h3 className="text-sm font-medium text-gray-500">url</h3>
                <a
                  href={imageData.url}
                  className="text-blue-500 break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {imageData.url}
                </a>
              </div>
              <div className="mt-3">
                <h3 className="text-sm font-medium text-gray-500">download_url</h3>
                <a
                  href={imageData.download_url}
                  className="text-blue-500 break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {imageData.download_url}
                </a>
              </div>
            </div>

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
  );
}
