import axios from 'axios'

const TotalData = axios.create({

    api_key: '0afac41b28fe3318c687f868eff3c839',

    method: 'GET',
    baseURL: `https://api.themoviedb.org/3`,

    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWZhYzQxYjI4ZmUzMzE4YzY4N2Y4NjhlZmYzYzgzOSIsIm5iZiI6MTcyNDM4MjM1MC4xMTA1MTIsInN1YiI6IjY2YzY5NGJmZjg3MjNiZmQxOGQyMDQ5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.loWRlDGoOx5tTvavp1Rj9ZGVVxmZRrU9pUx2zgWckqk'
    }
    
})

export default TotalData;