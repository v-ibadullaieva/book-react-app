import React from 'react';
import { Link } from 'react-router';
import { Container } from 'reactstrap';
import './App.css';

const App = ({ children }) =>
  <div className="App">
    <Container>
    	<header>
    		<Link to='/books'><h3>Books</h3></Link>
    		<Link to='/'><h3>Collections</h3></Link>
    	</header>
      {children}
    </Container>
  </div>

export default App;
