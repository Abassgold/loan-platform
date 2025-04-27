import Link from "next/link"
import React from "react"

interface child {
    children: React.ReactNode
}
const layout = ({ children }: child) => {
    return (
        <section>
            <div>
                <nav className="flex items-center gap-2 p-4 bg-[#f8fafc]">
                    <Link href='/dashboard/account'>Profile</Link>
                    <Link href='/dashboard/account/security'>Security</Link>
                </nav>
                <div className="bg-[#ffff] px-4">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default layout