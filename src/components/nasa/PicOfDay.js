import React from 'react'

import PicCard from './PicCard'
import { getPicOfDay } from '../../lib/api'

class PicOfDay extends React.Component {
state = {
  info: {
    copyright: '',
    date: '',
    explanation: '',
    hdurl: '',
    title: ''
  }
}

// ! Function Getting our pic of the day data from Nasa API
async componentDidMount() {
  try {
    const res = await getPicOfDay()
    this.setState({ info: res.data })
  } catch (err) {
    console.log(err.response)
  }
}

render(){
  if (!this.state.info) return null
  return (
    <PicCard 
      key={this.state.info.url}
      {...this.state.info}/>
  )
}
}

export default PicOfDay