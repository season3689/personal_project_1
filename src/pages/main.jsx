import TotalData from './components/atoms/totalData'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function Main () {
    const [movies_1, setMovies_1] = useState(null)
    const [movies_2, setMovies_2] = useState(null)


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

    useEffect(() => {
        console.log(movies_1)
        console.log(movies_2)
    }, [movies_1, movies_2])

    return (<>
    <h2 style={{paddingTop: '100px', textAlign: 'center'}}>TMDB top_rated 1페이지 영화목록</h2>
    <div style={{display: 'flex', flexWrap: 'wrap', margin: '0', paddingTop: '100px', justifyContent: 'center'}}>
        {movies_1 ? movies_1.results.map(({id, poster_path, title}) => (
            <Link key={id} to={`/${id}`}>
                <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} style={{margin: '5px', border: '1px solid black'}}/>
                </Link>)) : <div>없음</div>}
        </div>

    <h2 style={{paddingTop: '100px', textAlign: 'center'}}>TMDB top_rated 2페이지 영화목록</h2>
    <div style={{display: 'flex', flexWrap: 'wrap', margin: '0', paddingTop: '100px', justifyContent: 'center'}}>
        {movies_2 ? movies_2.results.map(({id, poster_path, title}) => (
            <Link key={id} to={`/${id}`}>
                <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} style={{margin: '5px', border: '1px solid black'}}/>
                </Link>)) : <div>없음</div>}
        </div>
        </>)
}