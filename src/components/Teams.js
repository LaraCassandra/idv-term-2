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
                        label: 'WIN',
                        data:[60,40, 77, 54],
                        backgroundColor: 'blue',
                        barThickness: 50,
                    },
                    {
                        label: 'LOSS',
                        data:[40,60, 23, 46],
                        backgroundColor:'#202020',
                        barThickness: 50
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