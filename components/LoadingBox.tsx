import { Skeleton } from './ui/skeleton'

const LoadingBox = () => {
  return (
    <div className="flex justify-center items-center">
      <Skeleton className="h-[250px] w-[250px] rounded-xl" />
    </div> 
  )
}

export default LoadingBox