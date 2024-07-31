import React from 'react'
import Footer from './footer';
import {} from "../pages/styles.css";

const NoPage = () => {
    return (
      <div className='body fill container-fluid'>
        <img src={require("../assets/404errorpage.png")} alt="404" class="error d-block w-100"/>        
      <Footer />
    </div>
    );
  };
  
  export default NoPage;