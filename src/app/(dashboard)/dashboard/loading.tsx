import './loading.css'
const LoadingUserLoan = () => {
  return (
<section className='text-gray-600 bg-[#ffff] p-2'>
  <div className='flex flex-col lg:flex-row justify-between gap-4 items-stretch mb-4'>
    <div className='border border-[#cbd5e1] flex-1 p-[2rem] rounded-[1rem] animate-pulse'>
      <div className="text-gray-600 md:text-[2rem] capitalize">
        <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
      </div>
      <h1 className='md:text-2xl my-2 font-[600] h-6 w-1/3 bg-gray-200 rounded'></h1>
      <div className='flex gap-4 justify-between items-center mt-4'>
        <div className='font-[700] text-2xl md:text-3xl h-10 w-1/2 bg-gray-200 rounded'></div>
        <div className="bg-gray-200 text-white rounded-xl px-5 py-3 h-12 w-1/3"></div>
      </div>
    </div>

    <div className='border border-[#cbd5e1] flex-1 p-[2rem] rounded-[1rem] animate-pulse'>
      <div className='h-6 w-1/4 bg-gray-200 rounded mb-6'></div>
      <div className='flex justify-between items-center border-b p-1 capitalize'>
        <div className='h-4 w-1/3 bg-gray-200 rounded'></div>
        <div className='h-4 w-1/6 bg-gray-200 rounded'></div>
      </div>
      <div className='flex justify-between items-center border-b p-1 capitalize'>
        <div className='h-4 w-1/3 bg-gray-200 rounded'></div>
        <div className='h-4 w-1/6 bg-gray-200 rounded'></div>
      </div>
      <div className='flex justify-between items-center text-[14px] border-b p-1 capitalize'>
        <div className='h-4 w-1/3 bg-gray-200 rounded'></div>
        <div className='h-4 w-1/6 bg-gray-200 rounded'></div>
      </div>
      <div className='flex justify-between items-center border-b p-1 capitalize'>
        <div className='h-4 w-1/3 bg-gray-200 rounded'></div>
        <div className='h-4 w-1/6 bg-gray-200 rounded'></div>
      </div>
      <div className='flex justify-between items-center border-b p-1 capitalize'>
        <div className='h-4 w-1/3 bg-gray-200 rounded'></div>
        <div className='h-8 w-1/4 bg-gray-200 rounded-full'></div>
      </div>
    </div>
  </div>

  <div className='border border-[#cbd5e1] rounded-[1rem] animate-pulse'>
    <div className='border-b border-[#cbd5e1] p-[2rem]'>
      <div className='font-[700] mb-2 h-6 w-1/4 bg-gray-200 rounded'></div>
      <div className='text-[14px] text-gray-700 font-[400] h-4 w-1/2 bg-gray-200 rounded'></div>
    </div>
    <div className='text-center p-8'>
      <div className='mx-auto max-w-[7rem] h-28 bg-gray-200 rounded'></div>
      <div className='text-[36px] font-[800] h-10 w-1/4 bg-gray-200 rounded mx-auto mt-4'></div>
      <div className='text-[#475569] font-[400] mb-6 h-4 w-1/3 bg-gray-200 rounded mx-auto mt-2'></div>
    </div>
  </div>
</section>
  )
}

export default LoadingUserLoan;