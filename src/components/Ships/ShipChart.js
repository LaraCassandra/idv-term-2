import React, { Fragment, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

export const ShipChart = () => {
  //Create variable to contain the data to populate the chart
  const [chartData, setChartData] = useState({});

  //Making the shipMissions and shipName arrays to contain the API data
  const chart = () => {
    let shipMissions = [];
    let shipName = [];

    //Call API and set data to the arrays created previously
    axios
      .get("https://api.spacexdata.com/v3/ships")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          shipMissions.push(parseInt(dataObj.missions.length));
          shipName.push(dataObj.ship_name);
        }

        //Set graph data with shipMissions and shipName arrays into the chartData variable
        setChartData({
          labels: shipName,
          datasets: [
            {
              label: "Number of Missions",
              data: shipMissions,
              borderWidth: 10,
              hoverBorderWidth: 20,
              backgroundColor: "rgba(255,255,255,0.1)",
              borderColor: [
                "#07a3b2",
                "purple",
                "red",
                "orange",
                "#07a3b2",
                "purple",
                "red",
                "orange",
                "#07a3b2",
                "purple",
                "red",
                "orange",
                "#07a3b2",
                "purple",
                "red",
                "orange",
                "#07a3b2",
                "purple",
                "red",
                "orange",
                "#07a3b2",
                "purple",
              ],
              hoverBorderColor: [
                "#07a3b2",
                "purple",
                "red",
                "orange",
                "#07a3b2",
                "purple",
                "red",
                "orange",
                "#07a3b2",
                "purple",
                "red",
                "orange",
                "#07a3b2",
                "purple",
                "red",
                "orange",
                "#07a3b2",
                "purple",
                "red",
                "orange",
                "#07a3b2",
                "purple",
              ],
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

  //Use the chartData to populate the chart
  return (
    <Fragment>
      <div>
        <Line
          data={chartData}
          option={{
            responsive: true,
            title: {
              text: "Mass",
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

export default ShipChart;
