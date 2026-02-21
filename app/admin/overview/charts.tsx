"use client";

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const Charts = ({
  data: { salesData },
}: {
  data: { salesData: { month: string; totalSales: number }[] };
}) => {
  console.log(salesData);
  const sortedSalesData = salesData.sort((a, b) => {
    if (a.month.split("/")[1] < b.month.split("/")[1]) {
      return -1;
    } else if (a.month.split("/")[1] > b.month.split("/")[1]) {
      return 1;
    }
    return 0;
  });
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={sortedSalesData}>
        <XAxis
          dataKey="month"
          stroke="#888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey="totalSales"
          fill="currentColor"
          radius={[10, 10, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Charts;
