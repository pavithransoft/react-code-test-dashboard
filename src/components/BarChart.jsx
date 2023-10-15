import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0];
    return (
      <div className="custom-tooltip text-white rounded-md w-fit bg-violet-400 px-2 py-1 flex gap-5 items-center">
        <p className="label text-xl capitalize font-semibold">
          {dataPoint.dataKey}
        </p>
        <p className="value font-medium">{dataPoint.value}</p>
      </div>
    );
  }
  return null;
};

const BarChartData = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#4B5563"
          fontSize={14}
          fontWeight="bold"
          tickLine={false}
          axisLine={false}
        />
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Bar dataKey="total" fill="#2563EB" radius={[14, 14, 14, 14]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartData;
