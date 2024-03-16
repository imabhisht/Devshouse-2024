import axios from 'axios';
axios.defaults.baseURL = 'https://temp-devhouse-3mvs5oa71-devsapariya94.vercel.app';
// const user = "f79b7455-abe5-4ad7-b2dc-fe04143d683c"

export const postProject = async (event) => {
    try {
        const response = await axios.post('/projects', event);
        return response;
    } catch (error) {
        alert(error)
        throw error; 
    }
}


export const fetchProjects = async(event) => {
    try {
        const response = await axios.get('/projects');
    } catch (error) {
        alert(error)
        throw error;
    }
}


export const updateProjectWorkflow = async(event) => {
    try {
        const response = await axios.post("/workflows/cbd9843b-223e-4ec1-bd23-e34ae59e5ebd", event);
        console.log(response);
        return response
    } catch (error) {
        alert(error)
        throw error;
    }
}