import React from 'react';
import Row from './Row';
import './App.css';
import requests from './requests';
import Banner from './Banner';
import Navbar from './Nav';


function App() {
    return (
        <div className='app'>
            <Navbar/>
            <Banner/>
            <Row tittle='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            {/* default isLargeRow is true*/ }
            
            
            <Row tittle='Trending Now' fetchUrl={requests.fetchTrending}/>
            <Row tittle='Top Rated' fetchUrl={requests.fetchTopRated}/>
            <Row tittle='Action Movies' fetchUrl={requests.fetchActionMovies}/>
            <Row tittle='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
            <Row tittle='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
            <Row tittle='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
            <Row tittle='Documentaries' fetchUrl={requests.fetchDocumentaries}/>

        </div>
    )
}

export default App;
