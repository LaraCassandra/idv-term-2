import React, { Fragment, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

export const ShipChart = () => {
  const [chartData, setChartData] = useState({});
  //const [successRate, setSuccessRate] = useState({});

  const chart = () => {
    let shipEngines = [];
    let shipName = [];

    axios
      .get("https://api.spacexdata.com/v3/ships")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          shipEngines.push(parseInt(dataObj.missions.length));
          shipName.push(dataObj.ship_name);
        }
        setChartData({
          labels: shipName,
          datasets: [
            {
              label: "Number of Missions",
              data: shipEngines,
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
