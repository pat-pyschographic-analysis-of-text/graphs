import ReactDOM from 'react-dom'
import React from 'react'
 
import { RadarGraph } from '@tweetmate/graphs'
import data from './data'

ReactDOM.render(<RadarGraph data={data} />, document.getElementById('app'))
