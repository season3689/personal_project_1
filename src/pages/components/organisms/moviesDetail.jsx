import TotalData from '../atoms/totalData'
import { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'

export default function MoviesDetails () {
    const [movies_1, setMovies_1] = useState(null)
    const [movies_2, setMovies_2] = useState(null)
    const params = useParams()
    const moviesId = parseInt(params.id)

    function TMDBApi_1p() {
        TotalData
            .get('/movie/top_rated?language=ko&page=1&region=KR')
            .then((res) => {
                setMovies_1(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function TMDBApi_2p () {
        TotalData
            .get('/movie/top_rated?language=ko&page=2&region=KR')
            .then((res) => {
                setMovies_2(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    useEffect(() => {
        TMDBApi_1p()
        TMDBApi_2p()
    }, [])

    const index_1 = movies_1 ? movies_1.results.findIndex((item) => item.id === moviesId) : ''
    const index_2 = movies_2 ? movies_2.results.findIndex((item) => item.id === moviesId) : ''
    const data_1 = movies_1 ? movies_1.results[index_1] : ''
    const data_2 = movies_2 ? movies_2.results[index_2] : ''
    

    return (<>
    {data_1 ? <div style={{ margin: '0', paddingTop: '200px', textAlign: 'center', width: '50%'}}>
        <img src={`https://image.tmdb.org/t/p/w400${data_1.poster_path}`} alt={data_1.title} style={{margin: '5px', border: '1px solid black'}}/>
        <h2>{data_1.title}</h2>
        <div>{data_1.overview}</div>
        <div>popularity : {data_1.popularity}</div>
    </div> : null}
    
    {data_2 ? <div style={{ margin: '0', paddingTop: '200px', textAlign: 'center', width: '50%'}}>
        <img src={`https://image.tmdb.org/t/p/w400${data_2.poster_path}`} alt={data_2.title} style={{margin: '5px', border: '1px solid black'}}/>
        <h2>{data_2.title}</h2>
        <div>{data_2.overview}</div>
        <div>popularity : {data_2.popularity}</div>
    </div> : null}
    </>)
}