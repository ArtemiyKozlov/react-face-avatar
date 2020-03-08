import React from 'react';
import logo from './logo.svg';
import './App.css';
import FaceAvatar from './components/face-avatar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FaceAvatar src='https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/39102597_1891603477550129_2174934819803234304_o.jpg?_nc_cat=106&_nc_sid=dd9801&_nc_oc=AQmSVv0P5Zxx8qj7XN3-Tpo697dSQ-Agd8tS9i2K8CvfgMSsGx8Qeb8mohBrwwMnKQo&_nc_ht=scontent.fktw1-1.fna&oh=64748b386f322dcd1e07c3bfebebd33d&oe=5E902D1D' />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
