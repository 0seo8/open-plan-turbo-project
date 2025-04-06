import { Button } from '@repo/ui/components/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      <div className="flex flex-col gap-2 items-center text-2xl font-semibold justify-center flex-grow text-center">
        <h2>안녕하세요</h2>
        <p>노영서입니다.</p>
      </div>

      <div className="mb-10 w-full max-w-md sm:max-w-xs">
        <Link href="/result" className="w-full">
          <Button size="default" className="w-full">
            다음
          </Button>
        </Link>
      </div>
    </div>
  );
}
