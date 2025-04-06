import React from 'react';

export default function Loading() {
  // TODO 추후 페이지와 흡사한 스켈레톤으로 변경
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md">
        <div className="w-full h-64 bg-gray-200 rounded-md animate-pulse mb-6" />

        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded-md animate-pulse w-1/2" />
          <div className="h-4 bg-gray-200 rounded-md animate-pulse w-3/4" />
          <div className="h-4 bg-gray-200 rounded-md animate-pulse w-2/3" />
          <div className="h-4 bg-gray-200 rounded-md animate-pulse w-full" />
          <div className="h-4 bg-gray-200 rounded-md animate-pulse w-4/5" />
        </div>
      </div>
    </div>
  );
}
