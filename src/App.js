import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return <div className="App">
    <Navbar></Navbar>
    <Banner></Banner>
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
    <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
    <Row title='TOP RATED' fetchUrl={requests.fetchTopRated} />
    <Row title='ACTION' fetchUrl={requests.fecthActionMovies} />
    <Row title='COMEDY' fetchUrl={requests.fecthComdeyMovies} />
    <Row title='HORROR' fetchUrl={requests.fecthHorrorMovies} />
    <Row title='ROMANCE' fetchUrl={requests.fecthRomanceMovies} />
    <Row title='DOCUMENTRIES' fetchUrl={requests.fecthDocumentaries} />
  </div>;
}

export default App;
