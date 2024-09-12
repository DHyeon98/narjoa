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
