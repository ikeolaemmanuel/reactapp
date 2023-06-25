import './App.css';
import Weather from './pages/weather/weather';
import Chat from './pages/movie/movie';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
};

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Container>
          <Row>
            <Col><Link to="/movie" style={linkStyle}>
              <Card className='Card'>
                <Card.Body>Movie</Card.Body>
              </Card></Link>
            </Col>
            <Col><Link to="/" style={linkStyle}>
              <Card className='Card'>
                <Card.Body>Weather</Card.Body>
              </Card></Link>
            </Col>
          </Row>
        </Container>
        <Routes>
          <Route path="/movie" element={<Chat />} />
          <Route path="/" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
