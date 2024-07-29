import React from 'react'
import Footer from './footer';

const NoPage = () => {
    return (
      <div className='body'>
        <p>This url is invalid</p>
        <img src={require("../assets/404.png")} alt="404" />

      <Footer />
    </div>
    );
  };
  
  export default NoPage;