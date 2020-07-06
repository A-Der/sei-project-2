import React from 'react'
import axios from 'axios'



class NasaImages extends React.Component {
  state = {
    data: null,
    index: 0,
    query: ''
  }

  async componentDidMount() {
    try {
      const res = await axios.get('https://images-api.nasa.gov/search?q=galaxy')
      this.setState({ data: { ...res.data } })
    } catch (err){
      console.log(err)
    } 
  } 
  
  handleSelect = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.get(`https://images-api.nasa.gov/search?q=${e.target.value}`)
      this.setState({ data: { ...res.data } })
    } catch (err) {
      console.log(err)
    }
  }

  handleSearch = async(e) => {
    const { query } = this.state
    e.preventDefault()
    try {
      const res = await axios.get(`https://images-api.nasa.gov/search?q=${query}`)
      this.setState({ data: { ...res.data } })
    } catch (err) {
      this.props.history.push('/imageError') //*DOES FORWARD TO /IMAGE ERROR url BUT DOE NOT SHOW PAGE
      console.log(err)
    }
  }

  changeQuery = (e) => {
    e.preventDefault()
    this.setState({ query: e.target.value })
  }

  changeImage = (e) => {
    const { index } = this.state
    if (e.target.value === '+1' && index < 100) {
      this.setState({ index: index + 1  })
    } else if (e.target.value === '-1' && index > 1){
      this.setState({ index: index - 1 })
    }
  }


  render() {
    if (!this.state.data) return null
    const { data } = this.state
    return (
      <section>
        <div className="nasa-images">
          <h1 className= 'title is-2'>NASA has an expansive album collection, search by any word</h1>
          <h2 className='subtitle'> you would be surprised what comes up..</h2>
        </div>
        
        <div className='search'>
          <form onSubmit={this.handleSearch} onChange={this.changeQuery}>
            <div className="field">
              <div className="control">
                <input 
                  defaultValue=''
                  className="input is-primary" type="text" placeholder="Search NASA Images.."/> 
                <button className='button is-primary' type='submit'>Search</button>
              </div>
            </div>
          </form>

          <div className="select is-primary">
            <select onChange={this.handleSelect}>
              <option value="">Popular Search</option>
              <option value="mars">Mars</option>
              <option value='venus'>Venus</option>
              <option value='earth'>Earth</option>
              <option value='moon'>Moon</option>
              <option vaue='jupiter'>Jupiter</option>
              <option value='saturn'>Saturn</option>
              <option value='neptune'>Neptune</option>
              <option value='pluto'>Pluto</option>
            </select>
          </div>
        </div>
        <button onClick={this.changeImage} value='-1'className='button'>Previous</button>
        <button onClick={this.changeImage} value='+1' className='button'>Next</button>

        <div className="album">
          <div className='album-info'>
            <h4>Info:</h4>
            <h3>{data.collection.items[this.state.index].data[0].description}</h3>
          </div>
          <div className="album-image">
            <h4 className= 'title is-4'>{data.collection.items[this.state.index].data[0].title}</h4>
            <img src={this.state.data.collection.items[this.state.index].links[0].href} alt=''/>
          </div>
        </div>
      </section>
    )
  }
}

export default NasaImages

