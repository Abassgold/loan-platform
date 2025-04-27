const Skeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="h-[125px] w-[250px] rounded-xl bg-gray-300 animate-pulse" />
      <div className="space-y-2">
        <div className="h-4 w-[250px] bg-gray-300 rounded-md animate-pulse" />
        <div className="h-4 w-[200px] bg-gray-300 rounded-md animate-pulse" />
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>
    </div>
  )
}

export default Skeleton
