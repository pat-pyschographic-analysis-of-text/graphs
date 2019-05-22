import { VictoryChart, VictoryArea, VictoryTheme, VictoryPolarAxis, VictoryTooltip } from 'victory'
import React from 'react'

export default class RadarGraph extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            data: props.data || [],
            attribute: props.data.personality || [],
            displayedData: 'Personality'
        }

      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(e) {
        e.preventDefault()
        this.setState({
            displayedData: this.nameProviderLogic(this.state.displayedData),
            attribute: this.dataProviderLogic(this.state.displayedData)
        })  
    }

    nameProviderLogic(attribute) {
        if (attribute === 'Personality') {
            return 'Needs'
        } else if (attribute === 'Needs') {
           return 'Values'
        } else if (attribute === 'Values') {
            return 'Personality'
        }
    }

    dataProviderLogic(attribute) {
        if (attribute === 'Personality') {
            return this.state.data.needs || []
        } else if (attribute === 'Needs') {
           return this.state.data.values || []
        } else if (attribute === 'Values') {
            return this.state.data.personality || []
        }

        return []
    }

    render() {
        return (
            <div style={{ margin: '0 auto', padding: '1%', display: 'flex', flexDirection:'row'}}>
                <button style={{marginBottom: '5vh', width: '10vw', height: '10vh'}}onClick={this.clickHandler}>Click me to change charts</button>
                <VictoryChart
                polar
                theme={VictoryTheme.material}
                padding={{ left: 100, right: 100, top: 100, bottom: 100}}
                maxDomain={{ y: 1 }}
                innerRadius={25}
                 >
                    <VictoryArea
                    data={this.state.attribute}
                    x='name'
                    y="score"
                    animate={{ duration: 500}}
                     />
                     <VictoryPolarAxis />
                </VictoryChart>
                <div style={{flexDirection: 'column', justifyContent: 'center'}}>
                  <h2>
                    { this.state.displayedData }
                  </h2>
                  { this.state.attribute.map((data, i) => <p key={i} style={{fontSize: '2vh'}}>{data.name}: {data.score}</p>) }
                </div>
            </div>
        )
    }
}
