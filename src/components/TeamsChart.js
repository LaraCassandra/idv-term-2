import React, { Component } from 'react'
import Chart from './Chart'

class TeamsChart extends Component {
    constructor(){
        super();
        this.state = {
            chartData:{}
        }
    }

    componentWillMount(){
        this.getChartData();
    }

    getChartData(){
        this.setState({
            chartData:{
                datasets: [
                    {
                        data:[40, 60],
                        backgroundColor: [ '#202020', '#BF2200',],
                        borderWidth: '1',
                        borderColor: 'black'
                    },
                ],
                labels: [
                    'LOSS',
                    'WIN'
                ]
            }
        });
    }

    render(){
        return(
            <div>
                <Chart chartData={this.state.chartData} />
            </div>
        )
    }
}

export default TeamsChart