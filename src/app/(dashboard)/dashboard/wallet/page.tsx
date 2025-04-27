'use client'
import { Copy } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'


const Wallet = () => {
    const [copied, setCopied] = useState(false);
    const [network, setNetwork] = useState("TRC20");
    const btcAddress = network === "TRC20" ? "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" : '0xe46b8f288d7fda2fc93f644a6a910c304e0a355c';
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(btcAddress);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };
    return (
        <>
            <section className='bg-[#ffff] h-full'>
                <div className='p-2 '>
                    <p className='font-[500] text-[1.4rem] my-4'>Deposit Wallet Address</p>
                    <div className='border-[2px] border-[#DADBDD]'>
                        <div className='p-2 flex items-center gap-4'>
                            <p className='text-blue-600'>Select chain</p>
                            <button
                                className={`p-2 border rounded ${network === "TRC20" ? "shadow-[1px_2px_0px_#2d38a8] bg-gray-600 text-gray-50" : "bg-gray-100"
                                    }`}
                                onClick={() => setNetwork("TRC20")}
                            >
                                TRC20
                            </button>
                            <button
                                className={`p-2 border rounded ${network === "ERC20" ? "shadow-[1px_2px_0px_#2d38a8] bg-gray-600 text-gray-50" : "bg-gray-100"
                                    }`}
                                onClick={() => setNetwork("ERC20")}
                            >
                                ERC20
                            </button>

                        </div>
                        <div className='text-center'>
                            <p className='font-serif my-4 '>This is your Tether-{network} wallet address, please send your deposits to this address.</p>
                            <div
  className="m-2 p-2 w-full max-w-sm mx-auto border border-blue-700 rounded-md shadow-[1px_2px_0px_0px_#2d38a8] bg-white"
  onClick={copyToClipboard}
>
  <div className="flex items-center justify-between gap-2">
    <p className="font-semibold text-sm break-all text-gray-800">{btcAddress}</p>
    <button className="relative group p-1 border border-red-400 rounded hover:bg-slate-500 transition">
      <Copy className="text-gray-600 group-hover:text-gray-200 transition" />
      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md">
          Copied!
        </span>
      )}
    </button>
  </div>
</div>

                            <Image 
                            src={network === "TRC20" ? '/trc20.png' : '/erc20.png'}
                            alt='wallet Qr code'
                            width={200}
                            height={200}
                            // placeholder='blur'
                            className='mb-4 mx-auto'
                            />
                            <p className='mb-2'>Minimum Deposit Amount: 0.1 USDT</p>
                            <p className='mb-[7rem]'>Any deposits less than the minimum amount <span>will not be processed and can not be refunded</span>.</p>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Wallet