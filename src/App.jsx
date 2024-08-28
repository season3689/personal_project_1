import './App.css';
import Main from './pages/main'
import { Routes, Route} from 'react-router-dom'

// 세부페이지
import MoviesDetails from '../src/pages/components/organisms/moviesDetail'

function App() {

  return (
    <Routes>
      {/* 메인 페이지 */}
      <Route path='/' element={<Main/>} />

      {/* 상세 페이지 */}
      <Route path={'/:id'} element={<MoviesDetails/>} />      
    </Routes>
  );
}

export default App;
