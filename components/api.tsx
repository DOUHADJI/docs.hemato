import axios from 'axios'

export const axiosInstance = () => {
  return axios.create({
    baseURL: 'https://api.storyblok.com/v2/cdn/stories',
    params: {
      token: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
      version: 'published',
    },
    timeout: 5000,
  })
}

export const fetchAllStories = async () => {
  try {
    const { data } = await axiosInstance().get('/')
    return data
  } catch (error) {
    console.log(error)
  }
}

export const fetchOneProcess = async (slug) => {
 
  try {
    const { data } = await axiosInstance().get('/processes/' + slug)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const fetchOneCourse = async (slug) => {
  try {
    const { data } = await axiosInstance().get('/courses/' + slug)
    return data
  } catch (error) {
    console.log(error)
  }
}
