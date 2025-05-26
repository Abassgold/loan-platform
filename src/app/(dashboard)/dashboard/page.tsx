import UserDetail from '@/components/user/UserDetail'
import { DollarSign } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const LoanDashboard = async () => {
  const token = (await cookies()).get('authToken')?.value

  if (!token) {
    console.log('Cookie is not found')
    redirect('/signin')
    return null
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/loans/dashboard`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Something went wrong while fetching loan dashboard')
  }

  const { success, loan } = await res.json()

  // Date Calculations
  const createdAt = loan ? new Date(loan.createdAt) : null
  const dueDate = createdAt && loan?.duration
    ? new Date(new Date(createdAt).setMonth(createdAt.getMonth() + loan.duration))
    : null

  const formatDate = (date: Date) =>
    date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })

  const formattedCreatedAt = createdAt ? formatDate(createdAt) : '—'
  const formattedDueDate = dueDate ? formatDate(dueDate) : '—'

  const loanAmount = loan?.loanAmount || 0
  const duration = loan?.duration || 0
  const status = loan?.status || '—'

  const renderStatusClass = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-700'
      case 'pending':
        return 'bg-yellow-100 text-yellow-700'
      case 'rejected':
        return 'bg-red-100 text-red-700'
      case 'repaid':
        return 'bg-blue-100 text-blue-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <section className="text-gray-600 bg-white p-2">
      {/* Loan Summary Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 items-stretch mb-4">
        <div className="border border-[#cbd5e1] flex-1 p-8 rounded-[1rem]">
          <div className="text-gray-600 md:text-2xl capitalize mb-2">
            Welcome, <UserDetail /> 👋
          </div>
          <h1 className="md:text-2xl my-2 font-semibold">Loan Summary</h1>
          <div className="flex gap-4 justify-between items-center">
            <p className="font-bold text-2xl md:text-3xl">${loanAmount}.00</p>
            <Link
              href={success ? '/dashboard/withdrawal' : '/dashboard/application'}
              className="bg-gray-800 text-white rounded-xl px-5 py-3 hover:bg-gray-900 active:bg-gray-600"
            >
              {success ? 'Withdraw' : 'Apply Now'}
            </Link>
          </div>
        </div>

        {/* Loan Info Card */}
        <div className="border border-[#cbd5e1] flex-1 p-8 rounded-[1rem] space-y-2">
          <DollarSign />
          <div className="flex justify-between border-b p-1">
            <p>Interest Rate</p>
            <p>{loan ? '0.05%' : '—'}</p>
          </div>
          <div className="flex justify-between border-b p-1">
            <p>Duration</p>
            <p>{loan ? `${duration} month${duration > 1 ? 's' : ''}` : '—'}</p>
          </div>
          <div className="flex justify-between border-b p-1 text-sm">
            <p>Application Date</p>
            <p>{formattedCreatedAt}</p>
          </div>
          <div className="flex justify-between border-b p-1">
            <p>Due Date</p>
            <p>{formattedDueDate}</p>
          </div>
          <div className="flex justify-between border-b p-1">
            <p>Status</p>
            {loan ? (
              <span className={`font-semibold px-4 py-2 rounded-full ${renderStatusClass(status)}`}>
                {status}
              </span>
            ) : (
              '—'
            )}
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="border border-[#cbd5e1] rounded-[1rem]">
        <div className="border-b border-[#cbd5e1] p-8">
          <h1 className="font-bold mb-2">Transaction History</h1>
          <p className="text-sm text-gray-700">A list of recent transactions</p>
        </div>
        <div className="text-center p-6">
          <img
            className="mx-auto max-w-[7rem]"
            src="https://static.vecteezy.com/system/resources/thumbnails/009/007/126/small/document-file-not-found-search-no-result-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
            alt="No data"
          />
          <h1 className="text-3xl font-bold mt-2">No data</h1>
          <p className="text-[#475569] font-normal mb-6">No data to display</p>
        </div>
      </div>
    </section>
  )
}

export default LoanDashboard
