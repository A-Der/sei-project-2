import axios from 'axios'

const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=NbUMNiC7IbeebFugN5Z80yJ7R97wLwaIrMNIuIgr'

// * Function to GET pic of the day 
export const getPicOfDay = () => {
  return axios.get(`${nasaUrl}`)
}

// * Get a single project
export const getSingleProject = (id) => {
  return axios.get(`https://api.nasa.gov/techport/api/projects/${id}?api_key=NbUMNiC7IbeebFugN5Z80yJ7R97wLwaIrMNIuIgr`)
}

export const getAllProjects = () => {
  return axios.get('https://api.nasa.gov/techport/api/projects?api_key=NbUMNiC7IbeebFugN5Z80yJ7R97wLwaIrMNIuIgr&updatedSince=2020-01-01')
}

