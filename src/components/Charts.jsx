import React, { PureComponent } from "react";
import chartimage1 from '/1 4.png'
import chartimage2 from "/1 4.png";
import chartimage3 from "/1 4.png";
import chartimage4 from "/1 4.png";
import chartimage5 from "/1 4.png";
import '../styles/Chart.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Text,
} from "recharts";
import { Link } from "react-router-dom";

 const data = [
   { name: "Mon", uv: 4000, pv: 2400, amt: 2400 },
   { name: "Tue", uv: 3000, pv: 1398, amt: 2210 },
   { name: "Wed", uv: 2000, pv: 9800, amt: 2290 },
   { name: "Thu", uv: 2780, pv: 3908, amt: 2000 },
   { name: "Fri", uv: 1890, pv: 4800, amt: 2181 },
   { name: "Sat", uv: 2390, pv: 3800, amt: 2500 },
   { name: "Sun", uv: 3490, pv: 4300, amt: 2100 },
 ];

const formatCurrency = (value) => {
  if (value >= 1000) {
    return value / 1000 + "k";
  }
  return value;
};
export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/synchronized-area-chart-9jj95d";

  render() {
    return (
      <div className="chart-chartcard">
        <div className="responsivecontainer">
          <ResponsiveContainer>
            <BarChart
             
              data={data}
              margin={{
                top: 20, // Increased top margin to accommodate labels
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickFormatter={formatCurrency}
              />
              {/* Remove Tooltip and Legend to disable hover effects */}
              {/* <Tooltip formatter={(value) => formatCurrency(value)} /> */}
              {/* <Legend /> */}
              <Bar
                dataKey="uv"
                fill="#175A70"
                barSize={10}
                radius={[10, 10, 0, 0]}
              className="barsize" />
              <Bar
                dataKey="amt"
                fill="#797474"
                barSize={10}
                radius={[10, 10, 0, 0]}
              />
              <Bar
                dataKey="pv"
                fill="#28981E"
                barSize={10}
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

          <div className="chartcard">
            <div className="chart-div1">
              <p className="chart-paragraph1">Recent transaction</p>
              <Link to="payments" className="chart-paragraph2-view">
                View all
              </Link>
            </div>

            <div className="chart-car-paragraph">
              <div className="Chart-card-1">
                <img src={chartimage1} alt="" className="chartimage" />
                <div className="chart-paragraph">
                  <div>
                    <p className="chart-paragraph1">Handajozz</p>
                    <p className="chart-paragraph2">coups</p>
                  </div>
                  <div>
                    <p className="chart-paragraph2">8:20 am</p>
                    <p className="chart-paragraph1">$ 80</p>
                  </div>
                </div>
              </div>

              <div className="Chart-card-1">
                <img src={chartimage2} alt="" className="chartimage" />
                <div className="chart-paragraph">
                  <div>
                    <p className="chart-paragraph1">Handajozz</p>
                    <p className="chart-paragraph2">coups</p>
                  </div>
                  <div>
                    <p className="chart-paragraph2">8:20 am</p>
                    <p className="chart-paragraph1">$ 80</p>
                  </div>
                </div>
              </div>

              <div className="Chart-card-1">
                <img src={chartimage3} alt="" className="chartimage" />
                <div className="chart-paragraph">
                  <div>
                    <p className="chart-paragraph1">Handajozz</p>
                    <p className="chart-paragraph2">coups</p>
                  </div>
                  <div>
                    <p className="chart-paragraph2">8:20 am</p>
                    <p className="chart-paragraph1">$ 80</p>
                  </div>
                </div>
              </div>

              <div className="Chart-card-1">
                <img src={chartimage4} alt="" className="chartimage" />
                <div className="chart-paragraph">
                  <div>
                    <p className="chart-paragraph1">Handajozz</p>
                    <p className="chart-paragraph2">coups</p>
                  </div>
                  <div>
                    <p className="chart-paragraph2">8:20 am</p>
                    <p className="chart-paragraph1">$ 80</p>
                  </div>
                </div>
              </div>

              <div className="Chart-card-1">
                <img src={chartimage5} alt="" className="chartimage" />
                <div className="chart-paragraph">
                  <div>
                    <p className="chart-paragraph1">Handajozz</p>
                    <p className="chart-paragraph2">coups</p>
                  </div>
                  <div>
                    <p className="chart-paragraph2">8:20 am</p>
                    <p className="chart-paragraph1">$ 80</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
