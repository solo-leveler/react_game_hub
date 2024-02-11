import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key : '67af0756bec3439ca2f9be369bdef103'
    }
})
