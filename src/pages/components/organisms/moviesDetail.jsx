import TotalData from '../atoms/totalData'
import { useEffect, useState } from 'react'
import { useParams, Link} from 'react-router-dom'

export default function MoviesDetails () {
    const [movies, setMovies] = useState(null)
    const params = useParams()
    const moviesId = parseInt(params.id)

    async function TMDBApi () {
        const requests = [
            TotalData.get('/movie/top_rated?language=ko&page=1&region=KR'),
            TotalData.get('/movie/top_rated?language=ko&page=2&region=KR'),
            TotalData.get('/movie/top_rated?language=ko&page=3&region=KR'),
            TotalData.get('/movie/top_rated?language=ko&page=4&region=KR'),
            TotalData.get('/movie/top_rated?language=ko&page=5&region=KR'),
        ]

        const response = await Promise.all(requests)

        const allData = response.flatMap(({data}) => data.results)

        setMovies(allData)
    }


    useEffect(() => {
        TMDBApi()
    }, [])


    const index = movies ? movies.findIndex((item) => item.id === moviesId) : ''
    const data = movies ? movies[index] : ''
    

    return (<>
    {data ? <div style={{ margin: '0', paddingTop: '200px', textAlign: 'center', width: '50%'}}>
        <img src={`https://image.tmdb.org/t/p/w400${data.poster_path}`} alt={data.title} style={{margin: '5px', border: '1px solid black'}}/>
        <h2>{data.title}</h2>
        <div>{data.overview}</div>
        <div>popularity : {data.popularity}</div>
    </div> : null}
    <h2><Link to="/">메인으로</Link></h2>
    </>)
}