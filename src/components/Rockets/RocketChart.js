import React, { Fragment, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

export const RocketChart = () => {
  const [chartData, setChartData] = useState({});
  //const [successRate, setSuccessRate] = useState({});

  const chart = () => {
    let successRate = [];
    let rocketName = [];

    axios
      .get("https://api.spacexdata.com/v3/rockets")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          successRate.push(parseInt(dataObj.success_rate_pct));
          rocketName.push(dataObj.rocket_name);
        }
        setChartData({
          labels: rocketName,
          datasets: [
            {
              label: "Success Rate",
              data: successRate,
              borderWidth: 2,
              borderColor: "#07a3b2",
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <Fragment>
      <div>
        <Line
          data={chartData}
          option={{
            responsive: true,
            title: {
              text: "Rocket Success Rate",
              display: true,
            },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    display: true,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: true,
                },
              ],
            },
          }}
        />
      </div>
    </Fragment>
  );
};

export default RocketChart;
