import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

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
                <HorizontalBar 
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
                            stacked:true,
                            gridLines: false
                        }],
                        yAxes:[{
                            stacked:true,
                            gridLines: false
                        }]
                    },
                    title:{
                        display:this.props.displayTitle,
                        text:'Professional Teams',
                        fontSize: 20
                    },
                    legend:{
                        display:this.props.displayLegend,
                    }
                }}
                />
            </div>
        )
    }
}

export default Chart;