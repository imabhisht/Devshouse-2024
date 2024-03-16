import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000';


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
        //send it on body
        const response = await axios.post("/workflows/65f5dc26ff97ee9ca3e3c830", {
            ...event
        });
        console.log(response);
        return response
    } catch (error) {
        alert(error)
        throw error;
    }
}