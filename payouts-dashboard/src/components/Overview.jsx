import { PayoutCard } from "./PayoutCard";

export function Overview() {
    return <div className="bg-[#0c4a6e] p-4 flex flex-col gap-6 mt-5">
        <div className="text-cream-300 text-2xl font-sans">Overview</div>
        <div className='grid grid-cols-1 gap-y-6 md:grid-cols-2 gap-x-6 xl:grid-cols-3'>
            <PayoutCard varient={"primary"} title={"Next Payout"} amount={"12,312.30"} ordersCount={5} footerTitle={"Next Payment Date"} footerVal={"Today, 4:00PM"}></PayoutCard>
            <PayoutCard title={"Amount Pending"} amount={"23,312.23"} ordersCount={12}></PayoutCard>
            <PayoutCard title={"Amount Processed"} amount={"2,65,312.50"} ordersCount={54}></PayoutCard>
        </div>
    </div>
}