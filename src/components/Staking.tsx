import React, { useState } from 'react';
import ProfileImage from '../components/assets/ProfilePhoto.jpeg';
import Dialog              from '@mui/material/Dialog';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS                 from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import dayVideo from "../components/assets/Staking/day.mp4";
import afternoonVideo from "../components/assets/Staking/afternoon.mp4";
import nightVideo from "../components/assets/Staking/night.mp4";
import StakingNew from './StakingData';

const Staking = () => {
  const [state, setState] = useState({
    isOpenDialog: false,
    pageName: 'Lottery',
    storyDialog:false
  })

  AOS.init();
  let currentTime = new Date().getHours();

  return (
    <div className='backClr'>
      <div
        data-aos="zoom-in"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="300"
        style={{
          overflow:"hidden", 
          backgroundColor:"#00000",
          backgroundSize:"cover", 
          width:"100%", 
          height:"100%", 
          objectFit:"contain", 
          position:"fixed"}}>
        <video style={{position:"absolute", width:"inherit"}} autoPlay loop muted>
        <source src={ currentTime >= 8 && currentTime <= 12 ?
          dayVideo : currentTime > 12 && currentTime <= 18 ? 
          afternoonVideo : nightVideo } type="video/mp4"/> </video>
        <div>
          <div style={ {
            height: "100vh",
            width: "100vw",
            position: "absolute",
            backgroundColor: "black",
            opacity: ".7"
          } }>
          </div>
          <div style={ { height: "100vh", width: "100vw", position: "absolute" } }>
            <div style={ {
              display: "flex",
              justifyContent: "space-between",
              color: "white",
              width: "92%",
              alignItems: "center",
              margin: "auto",
              marginTop: "30px"
            } }>
              <Link to="/">
                <p style={ { fontSize: "25px", fontWeight: 600, color:"white" } }>Logo</p>
              </Link>
              <div style={{
                display:"flex",
                color:"white",
                justifyContent:"center",
                alignItems:"center",
                gap:"50px",
                fontSize:"16px",
                fontWeight:"200"}}>
                <Link to="/">
                  <p className={ 'landingPageDialog' }>
                    Home
                  </p>
                </Link>
                  <p className={ 'landingPageDialog' } onClick={ () => setState({ ...state, isOpenDialog: true }) }>
                    Menu
                  </p>
                <Link to="/Minting">
                  <p className={ 'landingPageDialog' }
                     onClick={ () => setState({ ...state, pageName: 'Minting', isOpenDialog: false }) }>
                    Option
                  </p>
                </Link>
                <Link to="/Lottery">
                  <p className={ 'landingPageDialog' }
                     onClick={ () => setState({ ...state, pageName: 'Lottery', isOpenDialog: false }) }>Option</p>
                </Link>
                <img
                  style={ { height: "44px", width: "44px", borderRadius: "22px", border: "1px solid white" } }
                  src={ ProfileImage } alt="Profile Photo"/>
              </div>
            </div>
            <div style={{display : state.isOpenDialog ? "none" : "" }} >
              <StakingNew/> 
              </div>
          </div>
        </div>
        <Dialog
          onClose={ () => setState({ ...state, isOpenDialog: false }) }
          open={ state.isOpenDialog }>
          <div style={ {
            fontSize: "36px",
            padding: "60px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          } }>
            <Link to="/Minting">
              <p className={ 'landingPageDialog' }
                 onClick={ () => setState({ ...state, pageName: 'Minting', isOpenDialog: false }) }>
                Minting
              </p>
            </Link>
            <Link to="/Lottery">
              <p className={ 'landingPageDialog' }
                 onClick={ () => setState({ ...state, pageName: 'Lottery', isOpenDialog: false }) }>Lottery</p>
            </Link>
            <Link to="/Staking">
              <p className={ 'landingPageDialog' }
                 onClick={ () => setState({ ...state, pageName: 'Staking', isOpenDialog: false }) }>Staking</p>
            </Link>
            <p className={ 'landingPageDialog' }>Option</p>
          </div>
        </Dialog>
      </div>
    </div>
  )
}

export default Staking
