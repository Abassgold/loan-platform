import Link from "next/link";
import React from "react";

type LoanStatus = "Approved" | "Pending" | "Rejected" | "Processing" | "No Loan";

interface Loan {
    amount: number;
    interestRate: number;
    tenure: number; // Months
    status: LoanStatus;
    dueDate: string;
}

interface Transaction {
    id: number;
    type: "Withdrawal" | "Repayment";
    amount: number;
    date: string;
}

const LoanDashboard: React.FC = () => {
    const userName = "John Doe"; // Replace with dynamic user data

    const loan: Loan | null = {
        amount: 5000,
        interestRate: 2,
        tenure: 120,
        status: "Approved",
        dueDate: "2025-04-01",
    };

    const transactions: Transaction[] = [
        { id: 1, type: "Withdrawal", amount: 5000, date: "2025-03-01" },
        { id: 2, type: "Repayment", amount: 450, date: "2025-03-15" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-6 px-2">
            {/* Header */}
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-semibold text-gray-800 md:text-[2rem]">Loan Dashboard</h1>
                <p className="text-gray-600 md:text-[2rem]">Welcome, {userName} 👋</p>

                {/* Loan Summary */}
                {loan ? (
                    <div className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500 rounded-lg">
                        <h2 className=" text-xl md:text-2xl font-semibold">Loan Summary</h2>
                        <p className="text-gray-700 text-3xl">
                            <strong>Amount:</strong> ${loan.amount}
                        </p>
                        <p className="text-gray-700">
                            <strong>Interest Rate:</strong> {loan.interestRate}%
                        </p>
                        <p className="text-gray-700">
                            <strong>Tenure:</strong> {loan.tenure} months
                        </p>
                        <p className="text-gray-700">
                            <strong>Due Date:</strong> {loan.dueDate}
                        </p>
                        <p className="text-gray-700">
                            <strong>Status:</strong>{" "}
                            <span
                                className={`font-bold ${loan.status === "Approved"
                                    ? "text-green-600"
                                    : loan.status === "Pending"
                                        ? "text-yellow-600"
                                        : loan.status === "Rejected"
                                            ? "text-red-600"
                                            : "text-blue-600"
                                    }`}
                            >
                                {loan.status}
                            </span>
                        </p>
                        {/* Withdraw Button (Only if Approved) */}
                        {loan.status === "Approved" && (
                            <Link href='/loan/withdrawal' className="block text-center md:text-xl mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition">
                                Withdraw Funds
                            </Link>
                        )}

                        {/* Loan Pending Message */}
                        {loan.status === "Pending" && (
                            <p className="mt-4 text-yellow-600 text-center font-medium">
                                Your loan is pending approval.
                            </p>
                        )}

                        {/* Loan Rejected Message */}
                        {loan.status === "Rejected" && (
                            <p className="mt-4 text-red-600 text-center font-medium">
                                Your loan request was rejected.
                            </p>
                        )}
                    </div>
                ) : (
                    <div className="mt-6 p-4 bg-gray-200 rounded-lg text-center">
                        <p className="text-gray-600 mb-3 text-[1.5rem] md:text-4xl md:-[600]">No active loan.</p>
                        <Link href='/apply' className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                            Apply for a Loan
                        </Link>
                    </div>
                )}

                {/* Transaction History */}
                <div className="mt-6">
                    <h2 className="text-lg font-semibold mb-2">Transaction History</h2>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                        {transactions.length > 0 ? (
                            transactions.map((txn) => (
                                <div
                                    key={txn.id}
                                    className="flex justify-between py-2 border-b last:border-none"
                                >
                                    <span className="font-medium">{txn.type}</span>
                                    <span className="text-gray-600">${txn.amount}</span>
                                    <span className="text-sm text-gray-500">{txn.date}</span>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600 text-center">No transactions yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoanDashboard;
