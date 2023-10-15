import { TbSquareKey, TbBasketDollar } from "react-icons/tb";
import { RiBox3Line } from "react-icons/ri";
import { PiUserSquareLight } from "react-icons/pi";
import { BiSolidOffer, BiMessageError } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const SideMenu = (props) => {
  const menuList = [
    {
      name: "Dashboard",
      path: "/",
      icon: <TbSquareKey className="h-6 w-6" />,
    },
    {
      name: "Product",
      path: "/product",
      icon: <RiBox3Line className="h-6 w-6" />,
    },
    {
      name: "Customers",
      path: "/customers",
      icon: <PiUserSquareLight className="h-6 w-6" />,
    },
    {
      name: "Income",
      path: "/income",
      icon: <TbBasketDollar className="h-6 w-6" />,
    },
    {
      name: "Promote",
      path: "/promote",
      icon: <BiSolidOffer className="h-6 w-6" />,
    },
    {
      name: "Help",
      path: "/help",
      icon: <BiMessageError className="h-6 w-6" />,
    },
  ];

  return (
    <div className="border-t">
      <ul className="grid gap-5 p-5">
        {menuList.map((menu, index) => (
          <NavLink
            to={menu?.path}
            key={index}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-5 px-4 py-3 cursor-pointer rounded-lg hover:shadow-lg hover:bg-blue-600 focus:bg-blue-800 active:bg-blue-600 bg-blue-800 hover:border hover:border-white"
                : "flex items-center gap-5 px-4 py-3 cursor-pointer rounded-lg hover:shadow-lg hover:bg-blue-600 focus:bg-blue-800 active:bg-blue-600 hover:border hover:border-white"
            }
          >
            {menu?.icon}
            {props.isHovered && <h1>{menu?.name}</h1>}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
