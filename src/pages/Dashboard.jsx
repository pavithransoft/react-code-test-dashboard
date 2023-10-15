import CardList from "../components/CardList";
import BarChartData from "../components/BarChart";
import { IoIosArrowDown } from "react-icons/io";
import DoughnutChartData from "../components/DoughnutChart";
import TableData from "../components/Table";

const Dashboard = () => {
  return (
    <section className="px-10 overflow-y-auto scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-blue-600">
      <CardList />
      <div className="grid grid-cols-[65%,35%] gap-10 pt-3 pr-10">
        <div className="px-5 bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <div className="py-3 flex justify-between items-center">
            <div>
              <h1 className="font-bold text-lg">Overview</h1>
              <h1 className="text-gray-400 text-sm font-semibold">
                Monthly Earning
              </h1>
            </div>
            <button className="rounded-lg bg-violet-50 px-2 py-1 flex gap-5 items-center text-gray-400">
              Quarterly
              <IoIosArrowDown />
            </button>
          </div>
          <BarChartData />
        </div>
        <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-5">
          <h1 className="font-bold text-lg">Customers</h1>
          <h1 className="text-gray-400 text-sm font-semibold">
            Customers that buy products
          </h1>
          <div className="grid place-items-center">
            <DoughnutChartData />
          </div>
        </div>
      </div>
      <div className="pt-8 h-24">
        <TableData />
      </div>
    </section>
  );
};

export default Dashboard;
