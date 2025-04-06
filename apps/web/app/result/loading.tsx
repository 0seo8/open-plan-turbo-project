'use client';

import { Card } from '@repo/ui/components/card';
import { CardRow } from '@repo/ui/components/card';
import { CardLabel } from '@repo/ui/components/card';

export default function ResultLoading() {
  return (
    <div className="min-h-screen relative pt-16">
      <div className="fixed inset-0 w-screen h-screen bg-[#FAFAFA]" />
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
            <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-300 animate-pulse relative aspect-[5000/3333]" />
          </div>

          <div className="w-full md:w-5/12">
            <div className="space-y-4 w-full">
              <Card>
                <CardRow className="flex-col md:flex-row gap-2">
                  <div className="flex-1">
                    <CardLabel>id</CardLabel>
                    <div className="h-5 w-8 bg-gray-200 rounded animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <CardLabel>author</CardLabel>
                    <div className="h-5 w-40 bg-gray-200 rounded animate-pulse" />
                  </div>
                </CardRow>
              </Card>

              <Card>
                <CardRow className="flex-col md:flex-row gap-2">
                  <div className="flex-1">
                    <CardLabel>width</CardLabel>
                    <div className="h-8 w-24 bg-gray-200 rounded animate-pulse text-xl mt-1" />
                  </div>
                  <div className="flex-1">
                    <CardLabel>height</CardLabel>
                    <div className="h-8 w-24 bg-gray-200 rounded animate-pulse text-xl mt-1" />
                  </div>
                </CardRow>
              </Card>

              <Card>
                <div className="mb-3">
                  <CardLabel>url</CardLabel>
                  <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
                </div>
                <div>
                  <CardLabel>download_url</CardLabel>
                  <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
                </div>
              </Card>

              <div className="mt-6 flex justify-center">
                <div className="w-40 h-10 bg-gray-300 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
