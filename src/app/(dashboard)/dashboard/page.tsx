import UserDetail from '@/components/user/UserDetail'
import { DollarSign } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'
const LoanDashboard = async () => {
  const token = (await cookies()).get('authToken')?.value
  if(!token) redirect('/signin')
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/loans/dashboard`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json()
  const createdAt = data?.success && data?.loan && new Date(data.loan.createdAt);
  const monthsToAdd = data?.success && data?.loan.duration;

  const dueDate = new Date(createdAt);
  dueDate.setMonth(dueDate.getMonth() + monthsToAdd);
  const formattedDate = dueDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  if (!res.ok) {
    throw new Error('something went wrong')
  }

  return (
    <section className='text-gray-600  bg-[#ffff] p-2'>
      <div className=' flex flex-col lg:flex-row justify-between gap-4  items-stretch mb-4'>
        <div className='border border-[#cbd5e1]  flex-1 p-[2rem] rounded-[1rem]'>
          <div className="text-gray-600 md:text-[2rem] capitalize">
            <div>welcome, <UserDetail /> 👋</div>
          </div>
          <h1 className='md:text-2xl my-2 font-[600]'>Loan Summary</h1>
          <div className='flex gap-4 justify-between items-center'>
            <p className='font-[700] text-2xl  md:text-3xl'>
              ${data?.success ? data.loan.loanAmount : 0}.00
            </p>
            {!data?.success ? (
              <Link href='/dashboard/application' className="bg-gray-800 text-white rounded-xl px-5 py-3 hover:bg-gray-900 active:bg-gray-600">
                Apply Now
              </Link>
            ) : (
              <Link href='/dashboard/withdrawal' className="bg-gray-800 text-white rounded-xl px-5 py-3  hover:bg-gray-900 active:bg-gray-600">Withdraw
              </Link>
            )
            }
          </div>
        </div>
        <div className='border border-[#cbd5e1]  flex-1 p-[2rem] rounded-[1rem]'>
          <DollarSign />
          <div className='flex justify-between items-center border-b p-1 capitalize'>
            <p>Interest Rate</p>
            <p>{data.loan ? '0.05%' : '—'}</p>
          </div>
          <div className='flex justify-between items-center border-b p-1 capitalize'>
            <p>Duration</p>
            <p>
              {data?.success
                ? `${data.loan.duration} month${data.loan.duration > 1 ? 's' : ''}`
                : '—'}
            </p>
          </div>
          <div className='flex justify-between items-center text-[14px] border-b p-1 capitalize'>
            <p>Aplication  Date</p>
            <p className='py-1 '>{data?.loan ? `${new Date(data.loan.createdAt)
              .toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
              })}` : '—'}</p>
          </div>
          <div className='flex justify-between items-center border-b p-1 capitalize'>
            <p>Due Date</p>
            <p className='py-1 '>{data?.loan ? formattedDate : '—'}</p>
          </div>

          <div className='flex justify-between items-center border-b p-1 capitalize'>
            <p>Status</p>
            {data.loan ? <div className={`font-semibold px-4 py-2 rounded-full w-fit ${data?.loan?.status === 'approved'
              ? 'bg-green-100 text-green-700'
              : data?.loan?.status === 'pending'
                ? 'bg-yellow-100 text-yellow-700'
                : data?.loan?.status === 'rejected'
                  ? 'bg-red-100 text-red-700'
                  : data?.loan?.status === 'repaid'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700'
              }`}>{data.loan.status}</div> : '—'
            }
          </div>
        </div>
      </div>
      <div className='border border-[#cbd5e1] rounded-[1rem]'>
        <div className='border-b border-[#cbd5e1] p-[2rem]'>
          <h1 className='font-[700] mb-2'>Transaction History</h1>
          <p className='text-[14px] text-gray-700 font-[400]'>A list of recent transactions</p>
        </div>
        <div className='text-center'>
          <div>
            <img className='mx-auto max-w-[7rem]' src="https://static.vecteezy.com/system/resources/thumbnails/009/007/126/small/document-file-not-found-search-no-result-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" alt="" />
          </div>
          <h1 className='text-[36px] font-[800]'>No data</h1>
          <p className='text-[#475569] font-[400] mb-6 '>No data to display</p>
        </div>
      </div>
      {/* <LoanDashboard /> */}
    </section>
  )
}

export default LoanDashboard;