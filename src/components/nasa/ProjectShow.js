import React from 'react'

import { getSingleProject } from '../../lib/api'

class ProjectShow extends React.Component {
  state = { 
    project: null,
    description: '',
    destinations: ''
  }

  async componentDidMount() {
    const projectId = this.props.match.params.id
    const res = await getSingleProject(projectId)
    const desStrip = res.data.project.description.replace(/<\/?[^>]+(>|$)/g, '')
    const benStrip = res.data.project.benefits.replace(/<\/?[^>]+(>|$)/g, '')
    this.setState({ project: res.data.project, description: desStrip, benefits: benStrip })
  }

  render() {
    if (!this.state.project) return null

    const { title, status, startDate, endDate, leadOrganization, programDirectors, destinations, website } = this.state.project

    return (
      <>
        <div className="card">
          <div className="card-content">
            <div className="title is-1">{title}</div>  
            <div className="media">
              <div className="media-content">
                <h1>Status: {status}</h1>
              </div>
            </div>
            <div className="content">
              <h1>DESCRIPTION</h1>
              {this.state.description} 
              <br/>
              <h1>BENEFITS</h1>
              {this.state.benefits}
              <h3>Destination: {destinations.map(d => 
                <span key={d}>{d}, </span> )}</h3>
              <br></br>
          To learn more about this project <a href={website}>Click Here</a>
              <br></br>
              <hr/>
              <h4>Lead Organization:</h4>
              Situated in {leadOrganization.city}, {leadOrganization.country}, at {leadOrganization.name}. <br></br>
              Director: {programDirectors}
              <hr/>
              <h4>Dates:</h4>
              <time dateTime="2016-1-1">{startDate} - {endDate}</time>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ProjectShow


