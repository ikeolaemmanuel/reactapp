import React, { useState } from 'react';
import Button from '../../components/Button';
import Search from '../../components/Search/Search';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './movie.css';

const Movie = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [avail, setAvail] = useState(false);
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = async () => {
    console.log(name);
    try {
      const response = await fetch('http://www.omdbapi.com/?t=' + name + '&apikey=c6f5e8f');
      const jsonData = await response.json();
      console.log(jsonData);
      if (jsonData.Response === 'False') {
        alert('Movie not Found!!')
      } else {
        setData(jsonData);
        setAvail(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleButtonClick2 = () => {
    console.log(name);
  };

  return (
    <div>
      <h1>Movie</h1>
      <p>Find Your Movie</p>
      <Container>
        <Row>
          <Col><Search
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Enter Movie Name"
          /></Col>
          <Col sm={2} className='search'><Button color="black" onClick={handleButtonClick} disabled={name.length < 3}>
            Find
          </Button></Col>
        </Row>
      </Container>


      <div>
        {avail ? <div>
          {data && (<Container>
            <Row className="justify-content-center">
              <Col xs={12} md={6}>
                <img style={{ width: '100%' }} src={data.Poster} alt="Image Description" />
              </Col>
              <Col xs={12} md={6}>
                <Card style={{ width: '100%' }} className="text-center">
                  <Card.Body>
                    <Card.Title style={{ fontSize: '20px', marginBottom: '10px' }}>{data.Title}</Card.Title>
                    <Card.Text>
                      <div style={{ fontSize: '20px', marginBottom: '10px', fontWeight: '700' }}>{data.Year}</div>

                      <div style={{ fontSize: '20px', marginBottom: '10px', fontWeight: '100' }}>Plot: {data.Plot}</div>

                      <div style={{ fontSize: '20px', marginBottom: '10px', background: 'black', color: 'white' }}>Rating: {data.imdbRating}</div>

                      <div style={{ fontSize: '20px', marginBottom: '10px' }}>Genre: {data.Genre}</div>

                      <div style={{ fontSize: '20px', marginBottom: '10px', background: 'black', color: 'white' }}>Starring: {data.Actors}</div>

                      <div style={{ fontSize: '20px', marginBottom: '10px' }}>Directed by {data.Director}</div>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          )}
        </div> : (
          <h1>Nothing to see yet!</h1>
        )}
      </div>



    </div>
  );
};

export default Movie;