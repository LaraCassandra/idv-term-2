import React, { Fragment, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

export const RocketSuccessChart = () => {
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
              backgroundColor: "rgba(255,0,0,0.1)",
              borderWidth: 3,
              borderColor: "red",
              hoverBorderColor: ["#07a3b2", "purple", "red", "orange"],
              hoverBorderWidth: 5,
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
              text: "Mass in KG",
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

export default RocketSuccessChart;
