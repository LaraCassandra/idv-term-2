import React, { Fragment, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

export const RocketChart = () => {
  //Create variable to contain the data to populate the chart
  const [chartData, setChartData] = useState({});

  //Making the rocketHeight, rocketMass and rocketName arrays to contain the API data
  const chart = () => {
    let rocketHeight = [];
    let rocketMass = [];
    let rocketName = [];

    //Call API and set the data to the arrays
    axios
      .get("https://api.spacexdata.com/v3/rockets")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          rocketHeight.push(parseInt(dataObj.height.meters));
          rocketMass.push(parseInt(dataObj.height.meters));
          rocketName.push(dataObj.rocket_name);
        }
        //Set graph data with the arrays into the chartData variable
        setChartData({
          labels: rocketName,
          datasets: [
            {
              label: "Height in Metres",
              data: rocketHeight,
              borderWidth: 3,
              borderColor: ["#07a3b2", "purple", "red", "orange"],
              hoverBackgroundColor: ["#07a3b2", "purple", "red", "orange"],
              hoverBorderColor: "black",
              barThickness: 80,
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
        <Bar
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

export default RocketChart;
