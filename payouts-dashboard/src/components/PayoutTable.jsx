import { PAYOUT_INFO } from "../data/PayoutInfo";
import './PayoutTable.css';

export function PayoutTable() {

    return <div>
    <table className="w-full">
        <thead className="bg-gray-200">
            <tr className="grid grid-cols-5 gap-2 p-2">
                <th className='font-medium text-base'>Order ID</th>
                <th className='font-medium text-base'>Status</th>
                <th className='font-medium text-base'>Transaction ID</th>
                <th className='font-medium text-base'>Refund Date</th>
                <th className='font-medium text-base'>Order Amount</th>
            </tr>
        </thead>
        <tbody>
            {PAYOUT_INFO.map(info => {
                return <tr className="grid grid-cols-5 gap-2 p-2 border-b-2 border-gray-300 row-data">
                <td className="text-blue-600 underline text-sm font-medium text-center">#{info.orderId}</td>
                <td className="text-sm font-medium text-center flex justify-center items-baseline gap-1.5">
                    <div className={"w-3 h-3 rounded-full " + (info.status !== "Successful" ? "bg-[#999999]" : "bg-green-500")}></div>
                    <div className="text-gray-500 text-sm">{info.status}</div>
                </td>
                <td className="text-gray-500 text-sm font-medium text-center">{info.transactionId}</td>
                <td className="text-gray-500 text-sm font-medium text-center">{info.refundDate}</td>
                <td className="text-gray-500 text-sm font-medium text-center">&#8377;{info.orderAmount}</td>
            </tr>
            })}
            
        </tbody>
    </table>
</div>
}
