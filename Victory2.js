import React from 'react'
import { VictoryChart, VictoryArea, VictoryTheme, VictoryPolarAxis, VictoryTooltip } from 'victory'

const data = {
    twitterHandle: 'jaymaas-dev',
    suggestions: [
        {twitterHandle: 'example', score: 0.980},
        {twitterHandle: 'example2', score: 0.945},
        {twitterHandle: 'example3', score: 0.875},
        {twitterHandle: 'example4', score: 0.864},
        {twitterHandle: 'example5', score: 0.852}
    ],
    favorites: [
        {twitterHandle: 'example',
        id: '65198181654934'},
        {twitterHandle: 'example2',
        id: '65198481654984'},
        {twitterHandle: 'example3',
        id: '65198185654984'},
        {twitterHandle: 'example4',
        id: '65198181658984'},
        {twitterHandle: 'example5',
        id: '65498181654984'}
    ],
    personality: [
        {name: 'openness', score: 0.781},
        {name: 'conscientiousness', score: 0.617},
        {name: 'extraversion', score: 0.521},
        {name: 'agreeableness', score: 0.68},
        {name: 'emotionalRange', score: 0.475}
    ],
    needs: [
        {name: 'challenge', score: 0.741},
        {name: 'closeness', score: 0.706},
        {name: 'curiosity', score: 0.840},
        {name: 'excitement', score: 0.553},
        {name: 'harmony', score: 0.753},
        {name: 'ideal', score: 0.690},
        {name: 'liberty', score: 0.701},
        {name: 'love', score: 0.700},
        {name: 'practicality', score: 0.708},
        {name: 'selfExpression', score: 0.620},
        {name: 'stability', score: 0.687},
        {name: 'structure', score: 0.688}
    ],
    values: [
        {name: 'conservation', score: 0.567},
        {name: 'opennessToChange', score: 0.774},
        {name: 'hedonism', score: 0.654},
        {name: 'selfEnhancement', score: 0.697},
        {name: 'selfTranscendence', score: 0.818}
    ]
}



class Victory2 extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            data: [],
            displayedData: ''
        }
    }
    componentDidMount() {
        this.setState({
            data: data.personality,
            displayedData: 'Personality'
        })
    }
    clickHandler = e => {
        e.preventDefault()
        this.setState({
            displayedData: this.nameProviderLogic(this.state.displayedData),
            data: this.dataProviderLogic(this.state.displayedData)
        })  
    }
    nameProviderLogic = dataName => {
        if (dataName === 'Personality') {
            return 'Needs'
        } else if (dataName === 'Needs') {
           return 'Values'
        } else if (dataName === 'Values') {
            return 'Personality'
        }
    }
    dataProviderLogic = dataName => {
        if (dataName === 'Personality') {
            return data.needs
        } else if (dataName === 'Needs') {
           return data.values
        } else if (dataName === 'Values') {
            return data.personality
        }
    }
    render() {
        const stuff =this.state.data.map((data, i) => {
            return <p key={i} style={{fontSize: '2vh'}}>{data.name}: {data.score}</p>
        })
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
                    data={this.state.data}
                    x='name'
                    y="score"
                    animate={{ duration: 500}}
                     />
                     <VictoryPolarAxis 
                     
                     />
                </VictoryChart>
                <div style={{flexDirection: 'column', justifyContent: 'center'}}>
                <h2>{`${this.state.displayedData}`}</h2>
                    {stuff}
                    </div>
            </div>
        )
    }
}

export default Victory2