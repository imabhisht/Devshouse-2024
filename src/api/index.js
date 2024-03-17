import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:5000';
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
        const response = await axios.post("/workflows", event);
        console.log("This is response", response.data.workflow._id);
        localStorage.setItem("URL_PART",response.data.workflow._id)


        alert(`Your Short URL IS: /execute/${response.data.workflow._id}`)
        return response
    } catch (error) {
        alert(error)
        throw error;
    }
}