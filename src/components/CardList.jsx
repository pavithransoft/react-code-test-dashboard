import Card from "./Card";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { BsFileText, BsHandbag } from "react-icons/bs";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { TbBasketDollar } from "react-icons/tb";

const CardList = () => {
  return (
    <div className="h-44 grid grid-cols-4 gap-10 py-5">
      <Card
        title="Earning"
        price="$198k"
        description={
          <>
            <span className="pr-1 text-green-400 flex items-center">
              <AiOutlineArrowUp />
              37.8%
            </span>
            <h1>this month</h1>
          </>
        }
        icon={
          <>
            <div className="bg-green-100 p-5 rounded-full">
              <FaCircleDollarToSlot className="w-11 h-11 fill-yellow-500" />
            </div>
          </>
        }
      />
      <Card
        title="Orders"
        price="$2.4k"
        description={
          <>
            <span className="pr-1 text-pink-600 flex items-center">
              <AiOutlineArrowDown />
              2%
            </span>
            <h1>this month</h1>
          </>
        }
        icon={
          <div className="bg-violet-100 p-5 rounded-full">
            <BsFileText className="w-12 h-12 fill-violet-800" />
          </div>
        }
      />
      <Card
        title="Balance"
        price="$2.4k"
        description={
          <>
            <span className="pr-1 text-pink-600 flex items-center">
              <AiOutlineArrowDown />
              2%
            </span>
            <h1>this month</h1>
          </>
        }
        icon={
          <div className="bg-sky-100 p-5 rounded-full">
            <TbBasketDollar className="w-12 h-12 stroke-blue-800" />
          </div>
        }
      />
      <Card
        title="Total Sales"
        price="$89k"
        description={
          <>
            <span className="pr-1 text-green-400 flex items-center">
              <AiOutlineArrowDown />
              2%
            </span>
            <h1>this month</h1>
          </>
        }
        icon={
          <div className="bg-pink-100 p-5 rounded-full">
            <BsHandbag className="w-11 h-11 fill-red-600" />
          </div>
        }
      />
    </div>
  );
};

export default CardList;
