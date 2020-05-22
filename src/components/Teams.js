import React, { Component } from 'react'
import Chart from './Chart'

class Teams extends Component {
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
                labels: ['Team Liquid', 'Alliance', 'BlinkPool', 'Gambit Esports'],
                datasets: [
                    {
                        label: 'Win',
                        data:[60,40, 77, 54],
                        backgroundColor: 'green',
                        barThickness: 20,
                    },
                    {
                        label: 'Lose',
                        data:[40,60, 23, 46],
                        backgroundColor:'red',
                        barThickness: 20
                    },
                ],
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

export default Teams