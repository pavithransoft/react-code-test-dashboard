import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { Table } from "antd";

const TableData = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const dataSource = [
    {
      product: "Samsung Galaxy S22 Ultra",
      stock: "32 in stock",
      price: "$1200",
      sales: 37,
    },
    {
      product: "iPhone 13 Pro",
      stock: "102 in stock",
      price: "$540",
      sales: 10,
    },
    {
      product: "Google Pixel 6 Pro",
      stock: "out of stock",
      price: "$98",
      sales: 43,
    },
    {
      product: "MacBook Air M2",
      stock: "2 in stock",
      price: "$77",
      sales: 5,
    },
    {
      product: "Microsoft Surface Laptop 4",
      stock: "coming soon",
      price: "$2000",
      sales: 45,
    },
    {
      product: "Dell XPS 13 Plus",
      stock: "1 stock",
      price: "$270",
      sales: 15,
    },
    {
      product: "Sony WH-1000XM5",
      stock: "not available",
      price: "$66",
      sales: 26,
    },
    {
      product: "Apple AirPods Pro",
      stock: "34 in stock",
      price: "$98",
      sales: 36,
    },
    {
      product: "Samsung Galaxy Watch 5 Pro",
      stock: "1000 in stock",
      price: "$500",
      sales: 41,
    },
    {
      product: "Apple Watch Series 7",
      stock: "160 in stock",
      price: "$122",
      sales: 41,
    },
    {
      product: "Samsung Galaxy S23",
      stock: "300 in stock",
      price: "$144",
      sales: 30,
    },
    {
      product: "Fitbit Charge 5",
      stock: "10 in stock",
      price: "$99",
      sales: 39,
    },
    {
      product: "Samsung Galaxy Watch 5",
      stock: "65 in stock",
      price: "$47",
      sales: 49,
    },
    {
      product: "Apple AirPods",
      stock: "47 in stock",
      price: "$36",
      sales: 34,
    },
    {
      product: "MacBook Air M3",
      stock: "76 in stock",
      price: "$100",
      sales: 24,
    },
    {
      product: "Google Pixel 7 Pro",
      stock: "898 in stock",
      price: "$1000",
      sales: 26,
    },
    {
      product: "Samsung Galaxy S22",
      stock: "91 in stock",
      price: "$65",
      sales: 6,
    },
    {
      product: "Google Pixel 6",
      stock: "out of stock",
      price: "$12",
      sales: 25,
    },
    {
      product: "iPhone 13",
      stock: "coming soon",
      price: "$54",
      sales: 20,
    },
    {
      product: "Google Pixel 7",
      stock: "24 in stock",
      price: "$32",
      sales: 45,
    },
  ];

  const columns = [
    {
      title: "Product Name",
      dataIndex: "product",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      align: "center",
    },
    {
      title: "Price",
      dataIndex: "price",
      align: "center",
    },
    {
      title: "Total Sales",
      dataIndex: "sales",
      align: "center",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
      <div className="grid grid-cols-2 p-5 pt-3 pr-10 items-center">
        <h1 className="font-bold text-lg">Product Sell</h1>
        <div className="flex gap-10 justify-end items-center">
          <div className="relative">
            <BiSearch className="absolute h-6 w-6 top-[0.3rem] left-2 border-r fill-slate-500" />
            <input
              type="search"
              placeholder="search"
              className="pl-10 px-4 py-1 border rounded-lg w-full hover:border-blue-500 outline-none bg-slate-50"
            />
          </div>
          <button className="rounded-lg bg-slate-50 px-2 py-1 flex gap-5 items-center text-gray-400">
            last 30 days
            <IoIosArrowDown />
          </button>
        </div>
      </div>
      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={{
            current: page,
            pageSize: pageSize,
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            },
          }}
        />
      </div>
    </div>
  );
};

export default TableData;
