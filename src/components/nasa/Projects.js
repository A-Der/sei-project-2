
import React from 'react'
import { Link } from 'react-router-dom'
import { getAllProjects } from '../../lib/api'
import ProjectSection from '../nasa/ProjectSection'



class Projects extends React.Component{
  state ={
    projects: null,
    isOpen: false
  }

  async componentDidMount() {
    try {
      const res = await getAllProjects()
      this.setState({ projects: [ ...res.data.projects.projects] })   
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    if (!this.state.projects) return null
    return (
      <>
        <ProjectSection />
        <section className="section">
          <div className="columns is-multiline">
            {this.state.projects.map(item => {
              return (
                <button className="button is-primary" key={item.id}>
                  <Link to={`/projects/${item.id}`}>
                    <strong>{item.lastUpdated} </strong>
                  </Link>
                </button>
              )
            })}
          </div>
        </section>
      </>
    )
  }
}
export default Projects