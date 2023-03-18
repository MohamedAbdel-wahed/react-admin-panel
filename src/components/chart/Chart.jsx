import './chart.scss';

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const data = [
  { name: "January", orders: 5500, earnings: 4000 },
  { name: "February", orders: 6000, earnings: 3200 },
  { name: "Mrach", orders: 4050, earnings: 2000 },
  { name: "April", orders: 3020, earnings: 1800 },
  { name: "May", orders: 3500, earnings: 3000 },
  { name: "June", orders: 4000, earnings: 5000 },
]



function Chart() {
  return (
    <div className="chart">
      <div className="title">last 6 months (orders & earnings)</div>
      <ResponsiveContainer>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="orders" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="earnings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="orders"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#orders)"
          />
           <Area
            type="monotone"
            dataKey="earnings"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#earnings)"
          /> 
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart