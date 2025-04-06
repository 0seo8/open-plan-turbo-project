import { ImageDisplay } from '@components/image-display';
import { headers } from 'next/headers';

type ImageData = {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

async function getImageData(): Promise<ImageData> {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

  const response = await fetch(`${protocol}://${host}/api/photo`, {
    next: { revalidate: 60 * 60 }, // 1시간마다 재검증
  });

  if (!response.ok) {
    throw new Error('Failed to fetch image data');
  }

  return response.json();
}

export default async function ResultPage() {
  const imageData = await getImageData();

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
        <ImageDisplay imageData={imageData} />
      </div>
    </div>
  );
}
