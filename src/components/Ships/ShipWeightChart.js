import React, { Fragment, useState, useEffect } from "react";
import { HorizontalBar } from "react-chartjs-2";
import axios from "axios";

export const ShipChart = () => {
  const [chartData, setChartData] = useState({});
  //const [successRate, setSuccessRate] = useState({});

  const chart = () => {
    let shipMass = [];
    let shipName = [];

    axios
      .get("https://api.spacexdata.com/v3/ships")
      .then((res) => {
        for (const dataObj of res.data) {
          shipMass.push(parseInt(dataObj.weight_kg));
          shipName.push(dataObj.ship_name);
        }
        setChartData({
          labels: shipName,
          datasets: [
            {
              label: "Mass",
              data: shipMass,
              borderWidth: 5,
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
              hoverBackgroundColor: [
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
        <HorizontalBar
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
