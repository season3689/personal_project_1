import TotalData from './components/atoms/totalData'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function Main () {

    const [movies, setMovies] = useState(null)

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
        console.log('allData: ', allData)

        setMovies(allData)
    }


    useEffect(() => {
        TMDBApi()
    }, [])

    useEffect(() => {
        console.log(movies)
    }, [movies])

    return (<>
    <h2 style={{paddingTop: '100px', textAlign: 'center'}}>TMDB top_rated 영화목록</h2>
    <div style={{display: 'flex', flexWrap: 'wrap', margin: '0', paddingTop: '100px', justifyContent: 'center'}}>
        {movies ? movies.map(({id, poster_path, title}) => (
            <Link key={id} to={`/${id}`}>
                <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} style={{margin: '5px', border: '1px solid black'}}/>
                </Link>)) : <div>Loading</div>}
        </div>
        </>)
}