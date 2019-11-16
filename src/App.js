import React from 'react';
import { Button, Carousel,Card} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

function App() {

 


  return (
    <div className="App">
      <header className="App-header">
      <p>POD es una app que te ayuda a utilizar tus tarjetas en el local correcto el dia correcto</p>
      <p>para optimizar al maximo tu dinero!</p>
      <p>dssd</p>
       
      </header>
      
      <body>

      <div>
        <Carousel >
        <Carousel.Item>
          <div className='App-myCard'>
          <div class="card" >
            <div class="card-body">
              <Card.Title class="text-primary">Card Title</Card.Title>
                  <Card.Text class="text-dark">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </div>
          </div>
        </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='App-myCard'>
        <div class="card">
          <div class="card-body">
            <Card.Title class="text-primary">Card Title este es el 2do</Card.Title>
                <Card.Text class="text-dark">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
          </div>
        </div>
        </div>
        </Carousel.Item>

        <Carousel.Item>
        <div className='App-myCard'>
        <div class="card">
          <div class="card-body">
            <Card.Title class="text-primary">Card Title este es el 3ero</Card.Title>
                <Card.Text class="text-dark">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </div>
          </div>
          </div>
        </Carousel.Item>
      </Carousel>

        </div>
      <div className='App-myForm'>
        <form >
          <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
          </div>
            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
             <span class="input-group-text" id="basic-addon1">Last name:</span>
            </div>
          <input type="text" class="form-control" placeholder="" aria-label="Nombre" aria-describedby="basic-addon1"></input>
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" placeholder="Username" id="inputGroup-sizing-default">@</span>
          </div>
            <input type="Email" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
          </div>


          <Button variant="primary" type="submit">Primary</Button>

        </form>
        </div>
      </body>
    </div>
  );
}

export default App;
