import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                lables: [
                    'Boston',
                    'Worcester'
                ],
                datasets:[
                    {
                        label: "Population",
                        data:[
                            123,
                            546
                        ],
                        backgroundColor: [
                            'red',
                            'blue'
                        ]
                    }
                ]
            }
        }
    }

    render(){
        return(
            <div className="chart">
                <Bar
                data = {this.state.chartData}
                options={{
                    maintainAspectRatio: false
                }}
                />
            </div>
        )
    }
}

export default Chart;