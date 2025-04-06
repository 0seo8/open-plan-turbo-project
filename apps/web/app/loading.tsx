import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      <div className="flex flex-col gap-2 items-center text-2xl font-semibold justify-center flex-grow text-center">
        <div className="h-8 bg-gray-200 rounded-md animate-pulse w-32" />
        <div className="h-8 bg-gray-200 rounded-md animate-pulse w-40" />
      </div>

      <div className="mb-10 w-full max-w-md sm:max-w-xs">
        <div className="w-full h-12 bg-gray-200 rounded-md animate-pulse" />
      </div>
    </div>
  );
}
