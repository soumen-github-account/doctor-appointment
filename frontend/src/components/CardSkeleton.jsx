
const CardSkeleton = () => {
  return (
    <div className="w-full max-w-md p-4 rounded-2xl shadow flex flex-col gap-y-2">

      {/* Main Image */}
      <div className="w-full h-64 skeleton rounded-xl"></div>

      {/* Caption lines */}
      <div className="flex flex-col gap-y-3 mt-6">
        <div className="h-4 w-11/12 skeleton rounded"></div>
        <div className="h-4 w-2/3 skeleton rounded"></div>
        <div className="h-4 w-1/2 skeleton rounded"></div>
      </div>
    </div>
  );
};

export default CardSkeleton