import React, { Fragment, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

export const CapsuleLandings = () => {
  //Create variable to contain the data to populate the chart
  const [chartData, setChartData] = useState({});

  //Make the capsuleLandings and capsuleName arrays to contain the API data
  const chart = () => {
    let capsuleLandings = [];
    let capsuleName = [];

    //Call API and set the data to the arrays
    axios
      .get("https://api.spacexdata.com/v3/capsules")
      .then((res) => {
        //console.log(res);
        for (const dataObj of res.data) {
          capsuleLandings.push(parseInt(dataObj.landings));
          capsuleName.push(dataObj.capsule_serial);
        }
        //Set graph data with the arrays into the chartData variable
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
