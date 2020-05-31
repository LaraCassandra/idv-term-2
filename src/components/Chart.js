import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData
        }
    }

static defaultProps = {
    displayTitle: true,
    displayLegend: false,
}

    render(){
        return(
            <div className="Chart">
                <Doughnut 
                data={this.state.chartData}
                options={{
                    layout:{
                        padding:{
                            left:0,
                            right:0,
                            top:0,
                            bottom:0
                        }
                    },
                    scales:{
                        xAxes:[{
                            gridLines: false
                        }],
                        yAxes:[{
                            gridLines: false
                        }]
                    },
                    title:{
                        display:this.props.displayTitle,
                        text:'WIN / LOSS RATIO',
                        fontSize: 15
                    },
                    legend:{
                        display:this.props.displayLegend,
                    },
                }}
                />
            </div>
        )
    }
}

export default Chart;