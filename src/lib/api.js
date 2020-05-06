import axios from 'axios'

const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}`

// * Function to GET pic of the day 
export const getPicOfDay = () => {
  return axios.get(`${nasaUrl}`)
}

// * Get a single project
export const getSingleProject = (id) => {
  return axios.get(`https://api.nasa.gov/techport/api/projects/${id}?api_key=${process.env.REACT_APP_NASA_KEY}`)
}

export const getAllProjects = () => {
  return axios.get(`https://api.nasa.gov/techport/api/projects?api_key=${process.env.REACT_APP_NASA_KEY}&updatedSince=2020-01-01`)
}

