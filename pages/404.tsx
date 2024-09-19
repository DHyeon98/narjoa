import Link from 'next/link';

/**
 * 404 페이지 입니다.
 * 홈으로 이동할 수 있는 버튼과 텍스트로 구성되어 있습니다.
 */
export default function NotFound() {
  return (
    <div className="flex-center flex-col mt-auto">
      <p className="text-xl">페이지를 찾을 수 없습니다.</p>
      <div className="flex">
        <Link href={'/'} className="link-button px-4 py-2 mt-4">
          홈으로
        </Link>
      </div>
    </div>
  );
}
