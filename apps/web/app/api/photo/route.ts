import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://picsum.photos/id/0/info', {
      next: { revalidate: 60 * 60 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `API 호출 실패: ${response.status}` },
        { status: response.status },
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('사진 데이터 가져오기 실패:', error);
    return NextResponse.json({ error: '서버 내부 오류가 발생했습니다.' }, { status: 500 });
  }
}
