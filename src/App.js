
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'; 
import Trending from './components/Trending'
import Popular from './components/Popular'
import Upcoming from './components/Upcoming'
import Shows from './components/Shows'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Review from './components/Review';
import Error from './components/Error';
import MoviesList from './components/MoviesList';

function App() {
  return (
    <div className="App ">
  
   <Router>
   <Navbar/>
    <Routes>
      
      <Route index element={<Home/>}></Route>
      <Route path='trending' element={<Trending/>}></Route>
      <Route path='popular' element={<Popular/>}></Route>
      <Route path='shows' element={<Shows/>}></Route>
      <Route path='upcoming' element={<Upcoming/>}></Route>
      <Route path='movie/:id' element={<Review/>}></Route>
      <Route path='trending/movie/:id' element={<Review/>}></Route>
      <Route path='upcoming/movie/:id' element={<Review/>}></Route>
      <Route path='shows/movie/:id' element={<Review/>}></Route>
      <Route path='popular/movie/:id' element={<Review/>}></Route>
      <Route path="popular/:type" element={<MoviesList />}></Route>
      <Route path='/*' element={<Error/>}></Route>



    </Routes>
    <Footer/>
   </Router>

    </div>
  );
}

export default App;
