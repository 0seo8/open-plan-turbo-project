'use client';

export default function ResultLoading() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gray-200 z-0" />

      <div className="relative z-1 flex flex-col items-center justify-center px-4 w-full min-h-screen md:flex-row md:px-8 lg:px-16">
        <div className="w-full max-w-xl mx-auto mb-6 md:w-1/2 md:mr-8 md:mb-0 md:self-center">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-300 animate-pulse relative aspect-[5000/3333]"></div>
        </div>

        <div className="w-full md:w-1/2 md:self-center">
          <div className="space-y-4 w-full max-w-xl mx-auto">
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="md:flex md:justify-between">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-sm font-medium text-gray-500">id</h3>
                  <div className="h-5 w-8 bg-gray-200 rounded animate-pulse mt-1" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">author</h3>
                  <div className="h-5 w-40 bg-gray-200 rounded animate-pulse mt-1" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="md:flex md:justify-between">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-sm font-medium text-gray-500">width</h3>
                  <div className="h-5 w-12 bg-gray-200 rounded animate-pulse mt-1" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">height</h3>
                  <div className="h-5 w-12 bg-gray-200 rounded animate-pulse mt-1" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md">
              <div>
                <h3 className="text-sm font-medium text-gray-500">url</h3>
                <div className="h-5 w-full bg-gray-200 rounded animate-pulse mt-1" />
              </div>
              <div className="mt-3">
                <h3 className="text-sm font-medium text-gray-500">download_url</h3>
                <div className="h-5 w-full bg-gray-200 rounded animate-pulse mt-1" />
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="w-40 h-10 bg-gray-300 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
