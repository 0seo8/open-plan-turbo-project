import { headers } from 'next/headers';
import { ResultContainer } from '@/app/result/_components/result-container';
import React from 'react';

interface PageProps {
  searchParams: Promise<{ route?: string }>;
}

async function getImageData() {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

  const response = await fetch(`${protocol}://${host}/api/photo`, {
    next: { revalidate: 60 * 60 },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch image data');
  }

  return response.json();
}

export default async function ResultPage({ searchParams }: PageProps): Promise<React.ReactElement> {
  const params = await searchParams;
  const imageData = await getImageData();
  const isNormalRoute = params.route === 'normal';

  return <ResultContainer imageData={imageData} isNormalRoute={isNormalRoute} />;
}
