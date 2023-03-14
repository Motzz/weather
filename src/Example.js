import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];
export default function Example() {
  return (
    <>
      <div class="grid grid-cols-1 gap-4 ">
        <div className="bg-slate-500 rounded-xl h-screen">01</div>
        <div className="bg-slate-500 rounded-xl h-screen">02</div>

        <div className="bg-slate-500 rounded-xl h-screen">03</div>

        <div className="bg-slate-500 rounded-xl h-screen">04</div>

        <div className="bg-slate-500 rounded-xl h-screen">05</div>

        <div className="bg-slate-500 rounded-xl h-screen">06</div>

        <div className="bg-slate-500 rounded-xl h-screen">07</div>

        <div className="bg-slate-500 rounded-xl h-screen">08</div>
      </div>
    </>
  );
}
