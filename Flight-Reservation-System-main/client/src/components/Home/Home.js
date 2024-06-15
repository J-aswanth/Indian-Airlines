import { Button } from "react-bootstrap";
import "./Home.css";
import img from "./bg.jpg";

const Home = ({setShowLogin}) => {
  return (
    <div className="home-body">
      <div className="container">
    
       <nav className="navbar navbar-expand-lg navbar-light ">
         <a className="navbar-brand" href="/">
            <span className="fast">INDIAN </span>{" "}
            <span className="airlines">AIRLINES</span>
        </a>
      </nav>  
      <hr/>
       
        <div className="row mt-5">
          <div className="col col-6 mt-5">
            <div className="">
              <h5 className="welcome-msg">Welcome to Indian Airlines!</h5>

              <p className="msg-2 mt-3">
                Fly with us and experience the exceptional. We pride ourselves on delivering exceptional service, ensuring your travel experience is seamless and enjoyable from start to finish. Our state-of-the-art fleet and dedicated crew prioritize your safety and satisfaction, connecting you to destinations worldwide with ease. Discover new horizons and let your dreams take flight with us. Experience the joy of flying, where every journey is a memorable adventure.
              </p>
              <button className="home-book-btn mt-5 " onClick={()=> setShowLogin(true)} >Book now</button>
            </div>
          </div>
          <div className="col col-6 mt-5">
            <img src={img} className="bg-img" alt="not supported" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
