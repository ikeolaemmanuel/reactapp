import React, { useState } from 'react';
import Button from '../../components/Button';
import Search from '../../components/Search/Search';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Weather = () => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [data, setData] = useState([]);
  const [avail, setAvail] = useState(false);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = async () => {
    getImage();
    console.log(name);
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=64496665a00347f79b6142640212112&q=${name}`);
      const jsonData = await response.json();
      console.log(jsonData);
      if (jsonData.error) {
        alert('Location not found!!')
      } else {
        setData(jsonData);
        setAvail(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getImage = async () => {
    console.log(imageUrl);
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${name}&client_id=optW2j7HJ65Jx2Erkmyq5tqSd1OUR8cBjlCkywe1Fe0`);
      const jsonData = await response.json();
      console.log(jsonData);
      if (jsonData.total > 0) {
        setImageUrl(jsonData.results[0].urls.full)
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Weather</h1>

      <Container>
        <Row>
          <Col><Search
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Enter Location"
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
                <Card style={{ width: '100%' }} className="text-center">
                  <Card.Img variant="top" src={imageUrl} />
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card style={{ width: '100%' }} className="text-center">
                  <Card.Body>
                    <Card.Text>
                      <div>
                        <img src={data.current.condition.icon} />
                      </div>

                      <div style={{ fontSize: '20px', marginBottom: '10px', fontWeight: '700' }}>{data.location.name}, {data.location.country}</div>

                       <div style={{ fontSize: '20px', marginBottom: '10px', fontWeight: '200' }}>{data.current.condition.text}</div>

                      <div style={{ fontSize: '20px', marginBottom: '10px', fontWeight: '200' }}>Temp: {data.current.temp_c}°C</div>

                      <div style={{ fontSize: '20px', marginBottom: '10px', fontWeight: '200' }}>Feels Like: {data.current.feelslike_c}°C</div>

                     {/* <div style={{ fontSize: '20px', marginBottom: '10px' }}>Genre: {data.Genre}</div>

                      <div style={{ fontSize: '20px', marginBottom: '10px', background: 'black', color: 'white' }}>Starring: {data.Actors}</div>

                      <div style={{ fontSize: '20px', marginBottom: '10px' }}>Directed by {data.Director}</div> */}

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>)}
        </div> : (
          <h1>Nothing to see yet!</h1>
        )}
      </div>
    </div>
  );
};

export default Weather;