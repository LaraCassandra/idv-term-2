import React, { Fragment, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

export const CapsuleLandings = () => {
  const [chartData, setChartData] = useState({});
  //const [successRate, setSuccessRate] = useState({});

  const chart = () => {
    let capsuleLandings = [];
    let capsuleName = [];

    axios
      .get("https://api.spacexdata.com/v3/capsules")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          capsuleLandings.push(parseInt(dataObj.landings));
          capsuleName.push(dataObj.capsule_serial);
        }
        setChartData({
          labels: capsuleName,
          datasets: [
            {
              label: "Landings",
              data: capsuleLandings,
              borderWidth: 3,
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
              hoverBorderColor: "black",
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
        <Bar
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

export default CapsuleLandings;
