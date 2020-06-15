import React, { Fragment, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

export const RocketSuccessChart = () => {
  //Create variable to contain the data to populate the charts
  const [chartData, setChartData] = useState({});

  //Make the successRate and rocketName arrays to contain the API data
  const chart = () => {
    let successRate = [];
    let rocketName = [];

    //Call API and set the data to the arrays
    axios
      .get("https://api.spacexdata.com/v3/rockets")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          successRate.push(parseInt(dataObj.success_rate_pct));
          rocketName.push(dataObj.rocket_name);
        }
        //Set graph data with the arrays into the chartData variable
        setChartData({
          labels: rocketName,
          datasets: [
            {
              label: "Success Rate",
              data: successRate,
              backgroundColor: "rgba(255,0,0,0.1)",
              borderWidth: 3,
              hoverBorderWidth: 5,
              borderColor: "red",
              hoverBorderColor: "red",
              hoverBorderWidth: 5,
            },
          ],
        });
      })
      //Send an error if the API call fails
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);

  //Use the chartData variable to populate the chart
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
