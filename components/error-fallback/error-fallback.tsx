/**
 * 에러 처리 컴포넌트 입니다.
 * 관련 에러 메시지와 페이지를 리로드 하는 버튼으로 구성되어 있습니다.
 */
export default function ErrorFallback({ error }: any) {
  return (
    <div className="flex-center flex-col mt-auto px-4 text-center">
      <p className="text-lg">페이지를 불러오는 중 문제가 발생했습니다.</p>
      <p className="text-red-500">error message: {error.message}</p>
      <button onClick={() => window.location.reload()} className="link-button mt-4 py-2 px-4">
        페이지 새로고침
      </button>
    </div>
  );
}
