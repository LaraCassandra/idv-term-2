import React, { Fragment, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

export const CapsuleMissions = () => {
  const [chartData, setChartData] = useState({});
  //const [successRate, setSuccessRate] = useState({});

  const chart = () => {
    let capsuleMissions = [];
    let capsuleName = [];

    axios
      .get("https://api.spacexdata.com/v3/capsules")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          capsuleMissions.push(parseInt(dataObj.landings));
          capsuleName.push(dataObj.capsule_serial);
        }
        setChartData({
          labels: capsuleName,
          datasets: [
            {
              label: "Landings",
              data: capsuleMissions,
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

export default CapsuleMissions;
