import Image from "next/image"

const Feature = () => {
  return (
    <section
      id="features"
      className="flex max-w-7xl flex-col gap-10 px-8 pt-10 lg:px-12 xl:m-auto xl:pt-20"
    >
      <article className="m-auto w-[30ch] text-center text-gray-500 md:m-0 md:w-full">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">
          Every penny invested is a step toward prosperity
        </h2>
        <p>
          Invest smarter, reduce financial stress, earn rewards on every investment,
          <br />
          and access loans to grow your dreams
        </p>
      </article>

      <article className="flex w-full flex-col gap-8 overflow-hidden xl:h-96 xl:flex-row">
        <div className="flex flex-col rounded-2xl bg-sky-100 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
          <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:w-1/2 md:text-left">
            <h2 className="m-auto text-center text-3xl font-semibold text-gray-800 sm:w-[18ch] md:m-0 md:text-left">
              Grow with CreditGrow – quick loans, simple investments, and easy returns
            </h2>
            <p className="m-auto text-center text-gray-500 sm:w-[34ch] md:m-0 md:text-left">
              CreditGrow makes investing and loan repayment effortless. Whether you&apos;re funding your future or managing your finances, everything is done in seconds.
            </p>
          </div>

          <div className="m-auto mt-[5rem] max-w-72 md:mx-10 md:w-1/2 lg:mx-0">
            <Image
              className=" object-contain"
              width='500'
              height='500'
              src='https://res.cloudinary.com/abasskola/image/upload/v1739353385/app_frame_rzcwqo.png'
              alt="Kobodrop ap/p fram"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-indigo-100 p-10 xl:w-1/3">
          <div className="w-fit rounded-full bg-indigo-200 p-4">
            <img
              src='https://res.cloudinary.com/abasskola/image/upload/v1739384606/download_zbmnxj.png' alt="security"
            />
          </div>
          <h2 className="text-3xl font-semibold text-gray-800">
            Bank-grade security for your investments and loans.
          </h2>
          <p className="text-gray-500">
            Your money is 100% safe and secure on CreitGrow. No hassles, no
            glitches, get access to your money anytime.
          </p>
        </div>
      </article>

      <article className="flex w-full flex-col gap-8 xl:h-96 xl:flex-row">
        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-orange-100 p-10 xl:w-1/3">
          <div className="w-fit rounded-full bg-orange-200 p-4">
            <img src="https://res.cloudinary.com/abasskola/image/upload/v1739384814/download_asi9ms.png" alt="" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-800">
            Cost reduction
          </h2>
          <p className="text-gray-500">
            CreditGrow cut off loan processing and investment fees. No hidden charges, just transparent and cost-effective solutions.
          </p>
        </div>

        <div className="flex flex-col gap-8 overflow-hidden rounded-2xl bg-sky-100 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
          <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:mt-0 md:w-1/2 md:text-left">
            <h2 className="m-auto text-center text-3xl font-semibold text-gray-800 sm:w-[18ch] md:m-0 md:text-left">
              Effortlessly handle your loans and investments – send, receive, and exchange funds with confidence.
            </h2>
            <p className="m-auto text-center text-gray-500 sm:w-[34ch] md:m-0 md:text-left">
              Simplify your loan and investment management with CreditGrow. Receive immediate notifications after each payment or transfer.
            </p>
          </div>

          <div className="m-auto max-w-96 md:mt-36 md:w-1/2">
            <img
              src='https://res.cloudinary.com/abasskola/image/upload/v1739386524/thought-catalog-bj8U389A9N8-unsplash-removebg-preview_f5tv6g.png'
              alt="Frame displaying logos of various payment solutions"
            />
          </div>
        </div>
      </article>
    </section>
  )
}

export default Feature