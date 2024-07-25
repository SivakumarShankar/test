import React from 'react'
//import logo from "./profile.png"
import logo from "./profilecopy.png"
import { } from "../pages/styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Home = () => {
    return (
      <div class="body">
        <div class="text-center">
        <h4>HELLO EVERYBODY, I AM.</h4>
        <h1>Sivakumar Shankar Kumar</h1>
        <h3 class="col-md-6 offset-md-3" >Welcome to my personal website! I am Sivakumar, a passionate software developer based in London. With a keen interest in coding and exploring the vibrant tech landscape, I specialize in front-end development, creating intuitive and dynamic user experiences.</h3>
        </div>
       
        <img src={logo} class="image rounded-circle mx-auto d-block img-thumbnail" />
    </div>
    )
  };
  
  export default Home;