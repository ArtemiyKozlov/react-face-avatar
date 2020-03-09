import React from 'react';
import './App.css';
import FaceAvatar from './components/face-avatar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <FaceAvatar className="avatar" src='https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/39102597_1891603477550129_2174934819803234304_o.jpg?_nc_cat=106&_nc_sid=dd9801&_nc_oc=AQmSVv0P5Zxx8qj7XN3-Tpo697dSQ-Agd8tS9i2K8CvfgMSsGx8Qeb8mohBrwwMnKQo&_nc_ht=scontent.fktw1-1.fna&oh=64748b386f322dcd1e07c3bfebebd33d&oe=5E902D1D' />
        <FaceAvatar src='https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/87843512_865006830625471_6411090162251464704_o.jpg?_nc_cat=107&_nc_sid=110474&_nc_oc=AQna4RZgNn_WMfnaOc-gbBObYNXf6fnYKKPc7A47gOoR7oeFPeajWlmCBTKMRqqnKDg&_nc_ht=scontent.fktw1-1.fna&oh=3df76cdc983e37550895aa553edff460&oe=5E94FF17' />
        <FaceAvatar src='https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/11236430_825426500886927_5326598974952025982_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_oc=AQmINx0JMqr9409zjtKlvnycOBMmhMuiNLHq5-ymckn-uY_xdjzui4-I9pFkbK7Xl5s&_nc_ht=scontent.fktw1-1.fna&oh=8b623487b1620caef4983ec2f14afb9c&oe=5E90B6F1' />
        <FaceAvatar src='https://image.cnbcfm.com/api/v1/image/105968995-1560512715227rtx6z8xd.jpg?v=1583511384?w=720&h=405' />
        <FaceAvatar src='https://secure.gravatar.com/avatar/95d625fd173c40f06e3249493203cfa6?s=200&d=mm&r=g' />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
