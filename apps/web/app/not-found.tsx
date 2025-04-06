import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">요청하신 페이지를 찾을 수 없습니다.</p>
        <Link href="/" className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition-colors">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
