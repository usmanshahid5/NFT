import React, { useRef, useState } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import image from "../thumbnail.png";
import Dialog              from '@mui/material/Dialog';

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ProfileImage from '../components/assets/ProfilePhoto.jpeg';
import Slider              from "react-slick";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import plantImg from "../components/assets/coin.png";
import rolling from "../components/assets/rollingTwo.png"

import dayVideo from "../components/assets/day.mp4";
import afternoonVideo from "../components/assets/afternoon.mp4";
import nightVideo from "../components/assets/night.mp4";
import { Link } from 'react-router-dom';



// Little helpers ...
const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function LandingPage() {
  const [state, setState] = useState({
    isOpenDialog: false,
    pageName: 'LandingPage',
    storyDialog:false,
    faqOpen : false
  })
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const parallax = useRef<IParallax>(null!)

  const Faqs = () => {
    return <div>
      <div>
        <div>
          <div
            style={{
              margin:"auto",
              borderRadius:"10px"
            }}>
            <div className="faqs">
              <div>
                <p style={{color:"#FFDCBB", fontSize:"24px"}}>1- Lorem Ipsum is simply dummy text of the printing?</p>
                <p style={{color:"white", fontSize:"20px", marginLeft:"29px", marginTop:"6px", opacity:".8"}}>     Lorem Ipsum is simply dummy</p>
              </div>
              <div style={{marginTop:"22px"}}>
                <p style={{color:"#FFDCBB", fontSize:"24px"}}>2- Lorem Ipsum is simply dummy text of the printing?</p>
                <p style={{color:"white", fontSize:"20px", marginLeft:"29px", marginTop:"6px", opacity:".8"}}>     Lorem Ipsum is simply dummy</p>
              </div>
              <div style={{marginTop:"22px"}}>
                <p style={{color:"#FFDCBB", fontSize:"24px"}}>2- Lorem Ipsum is simply dummy text of the printing?</p>
                <p style={{color:"white", fontSize:"20px", marginLeft:"29px", marginTop:"6px", opacity:".8"}}>     Lorem Ipsum is simply dummy</p>
              </div>
              <div style={{marginTop:"22px"}}>
                <p style={{color:"#FFDCBB", fontSize:"24px"}}>2- Lorem Ipsum is simply dummy text of the printing?</p>
                <p style={{color:"white", fontSize:"20px", marginLeft:"29px", marginTop:"6px", opacity:".8"}}>     Lorem Ipsum is simply dummy</p>
              </div>
              <div style={{marginTop:"22px"}}>
                <p style={{color:"#FFDCBB", fontSize:"24px"}}>2- Lorem Ipsum is simply dummy text of the printing?</p>
                <p style={{color:"white", fontSize:"20px", marginLeft:"29px", marginTop:"6px", opacity:".8"}}>     Lorem Ipsum is simply dummy</p>
              </div>
              <div style={{marginTop:"22px"}}>
                <p style={{color:"#FFDCBB", fontSize:"24px"}}>2- Lorem Ipsum is simply dummy text of the printing?</p>
                <p style={{color:"white", fontSize:"20px", marginLeft:"29px", marginTop:"6px", opacity:".8"}}>     Lorem Ipsum is simply dummy</p>
              </div>
              <div style={{marginTop:"22px"}}>
                <p style={{color:"#FFDCBB", fontSize:"24px"}}>2- Lorem Ipsum is simply dummy text of the printing?</p>
                <p style={{color:"white", fontSize:"20px", marginLeft:"29px", marginTop:"6px", opacity:".8"}}>     Lorem Ipsum is simply dummy</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  }

  const Footer = () => {
    return   <div style={{
      backgroundColor:"black",
      color:"white",
      position:"absolute",
      width:"100%",
      marginTop:"8%"
    }}>
      <div style={{
        display:"flex",
        width:"100%",
        justifyContent:"space-around",
        alignItems:"center",
        margin:"20px",
        color:"#313131",
        marginTop:"40px"
      }}>
        <hr style={{width:"20%", border:"1px solid #313131"}}/>
        <p style={{
          width:"33.33%",
          textAlign:"center",
          fontSize:"22px",
          fontWeight:"200",
          color:"white"}}>Let's get started for something great!</p>
        <hr style={{width:"20%", border:"1px solid #313131"}}/>
      </div>
      <div style={{display:"flex", width:"100%", margin:"40px", color:"#D2D2D2",
        fontWeight:"200"}}>
        <div style={{width:"33.33%"}}>
          <p style={{width:"70%", fontSize:"18px"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div style={{width:"33.33%"}}>
          <div style={{margin:"auto", display:"flex", justifyContent:"center"}}>
            <div style={{display:"inline-block"}}>
              <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                <FmdGoodIcon style={{height:"18px", width:"18px", color:"orange"}}/>
                <p>Location</p>
              </div>
              <div style={{display:"flex", gap:"10px", alignItems:"center", marginTop:"20px"}}>
                <CallIcon style={{height:"18px", width:"18px", color:"green"}}/>
                <p>+01-232-222111333</p>
              </div>
              <div style={{display:"flex", gap:"10px", alignItems:"center", marginTop:"20px"}}>
                <EmailIcon style={{height:"18px", width:"18px", color:"orange"}} color={"orange"}/>
                <p>usman@gmail.com</p>
              </div>
              <div style={{display:"flex", gap:"10px", alignItems:"center", marginTop:"20px"}}>
                <LanguageIcon style={{height:"18px", width:"18px", color:"orange"}} color={"white"}/>
                <p>usman@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{width:"33.33%"}}>
          <div style={{margin:"auto", display:"flex", justifyContent:"center"}}>
            <div style={{display:"inline-block"}}>
              <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                <FacebookIcon style={{height:"18px", width:"18px", color:"#3b5998 "}}/>
                <p>Facebook</p>
              </div>
              <div style={{display:"flex", gap:"10px", alignItems:"center", marginTop:"20px"}}>
                <InstagramIcon style={{height:"18px", width:"18px", color:"red"}}/>
                <p>Instagram</p>
              </div>
              <div style={{display:"flex", gap:"10px", alignItems:"center", marginTop:"20px"}}>
                <TwitterIcon style={{height:"18px", width:"18px", color:"#00acee"}}/>
                <p>Twitter</p>
              </div>
              <div style={{display:"flex", gap:"10px", alignItems:"center", marginTop:"20px"}}>
                <LinkedInIcon style={{height:"18px", width:"18px", color:"#0A66C2"}}/>
                <p>LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        display:"flex",
        width:"100%",
        justifyContent:"space-between",
        alignItems:"center",
        margin:"40px",
        color:"#ffffff",
        fontWeight:"200"
      }}>
        <div>@2023 All right reserved</div>
        <div style={{display:"flex", gap:"40px", marginRight:"10%"}}>
          <div>Terms</div>
          <div>Privacy</div>
          <div>Cookies</div>
        </div>
      </div>
    </div>
  }

  const StoryPageDiv = () => {
    return <div style={ { height: "100vh", overflow:"hidden" } }>
      <div style={{background:"transparent"}}></div>
      <div>
        <div style={{margin:"50px", marginTop:"5%"}}>
          <div style={ { display: "flex", alignItems: "center", color: "white", gap: "30px", width:"100%" } }>
            <h1 style={ { width: "8%", fontSize: "34px", fontWeight:"400" } }>Stories</h1>
            <hr style={ { width: "70%", opacity:".7" } }/>
          </div>
          <div style={{width:"100%", marginTop:"10px"}}>
            <p style={ { fontSize: "20px", fontWeight: "100", color: "white", width:"70%", opacity:".7" } }>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div style={{width:"90%", margin:"auto", overflowY:"hidden", marginTop:"4%"}}>
          <Slider { ...settings }>
            <div className="storyCard" onClick={()=>setState({...state, storyDialog: true})}>
              <img src={image} style={{marginTop:"20px"}} className="cardImg"/>
              <p className="cardText">Story 1</p>
            </div>
            <div className="storyCard">
              <img src={image} style={{marginTop:"20px"}} className="cardImg"/>
              <p className="cardText">Story 1</p>
            </div><div className="storyCard">
            <img src={image} style={{marginTop:"20px"}} className="cardImg"/>
            <p className="cardText">Story 1</p>
          </div><div className="storyCard">
            <img src={image} style={{marginTop:"20px"}} className="cardImg"/>
            <p className="cardText">Story 1</p>
          </div><div className="storyCard">
            <img src={image} style={{marginTop:"20px"}} className="cardImg"/>
            <p className="cardText">Story 1</p>
          </div>
          </Slider>
        </div>
        <div className="storyDialog">
        </div>
      </div>
    </div>

  }

  let currentTime = new Date().getHours();
  return (
    <div className='main'>
      <video style={{position:"absolute", width:"inherit"}} autoPlay loop muted>
        <source src={ currentTime >= 8 && currentTime <= 12 ?
          dayVideo : currentTime > 12 && currentTime <= 18 ? 
          afternoonVideo : nightVideo } type="video/mp4"/> </video>
      <Parallax ref={parallax} pages={state.faqOpen?4.07 : 3.4} style={{background:"rgba(0,0,0,0.6)"}}>
{/* ______________________ */}
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: 'rgba(0,0,0,.7)', filter:"blur(6px)" }} />
        <ParallaxLayer offset={2} speed={1} style={{ background: 'transparent' }} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
            background:"transparent"
          }}
        />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={rolling} style={{ width: '15%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          {/* <img src={plantImg} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={plantImg} style={{ display: 'block', width: '10%', marginLeft: '15%' }} /> */}
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          {/* <img src={plantImg} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={plantImg} style={{ display: 'block', width: '20%', marginLeft: '40%' }} /> */}
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          {/* <img src={plantImg} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={plantImg} style={{ display: 'block', width: '20%', marginLeft: '75%' }} /> */}
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          {/* <img src={plantImg} style={{ display: 'block', width: '20%', marginLeft: '60%' }} /> */}
          {/* <img src={plantImg} style={{ display: 'block', width: '25%', marginLeft: '30%' }} /> */}
          {/* <img src={plantImg} style={{ display: 'block', width: '10%', marginLeft: '80%' }} /> */}
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.2 }}>
          {/* <img src={plantImg} style={{ display: 'block', width: '20%', marginLeft: '5%' }} /> */}
          <img src={plantImg} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <div style={ {
            display: "flex",
            justifyContent: "space-between",
            color: "white",
            width: "92%",
            alignItems: "center",
            position:"fixed",
            zIndex:"1",
            top:"30px"
          } }>
            <p style={ { fontSize: "25px", fontWeight: 600 } }>Logo</p>
            <div style={{
              display:"flex",
              color:"white",
              justifyContent:"center",
              alignItems:"center",
              gap:"50px",
              fontSize:"16px",
              fontWeight:"200"}}>
              <p className={ 'landingPageDialog' }>Option</p>
              <Link to="/Minting">
              <p className={ 'landingPageDialog' }>Minting</p>
              </Link>
              <Link to="/Lottery">
              <p className={ 'landingPageDialog' }>Lottery</p>
              </Link>
              <img
                style={ { height: "44px", width: "44px", borderRadius: "22px", border: "1px solid white" } }
                src={ ProfileImage } alt="Profile Photo"/>
            </div>
          </div>
          <div>
            <div
              style={ {
                color: "white",
                width: "100%",
                textAlign: "center",
                marginTop: "6%",
                display: state.isOpenDialog ? "none" : ""
              } }>
              <p style={ { fontSize: "28px" } }>Welcome to</p>
              <h1 style={ { fontSize: "50px", fontWeight: "500", margin: '10px' } }
              >
                 Website Name
              </h1>
              <p style={ {
                opacity: ".7",
                width: "55%",
                fontSize: "20px",
                fontWeight: 200,
                margin: "auto",
                marginTop: "30px"
              } }>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type</p>

              <button onClick={ () => setState({ ...state, isOpenDialog: true }) } style={ {
                border: "0px",
                marginTop: "60px",
                height: "50px",
                fontSize: "20px",
                fontWeight: "300",
                color: "white",
                cursor: 'pointer',
                backgroundColor: "#CA6406",
                borderRadius: "25px",
                paddingLeft: "60px", paddingRight: "60px"
              } }>Menu</button>
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
                   onClick={ () => setState({ ...state, pageName: 'Staking', isOpenDialog: false }) }>Staking <span style={{color:"orange", fontSize:"14px"}}>( Coming Soon! )</span></p>
                   </Link>
                <p className={ 'landingPageDialog' }>Option</p>

              </div>
            </Dialog>
          </div>
        </ParallaxLayer>


        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <StoryPageDiv/>
        </ParallaxLayer>

        <ParallaxLayer
          style={{
            marginTop: "92%"
          }}>
             <Accordion style={{width:"70%", margin:"auto", backgroundColor:"rgba(0,0,0,.4)"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          onClick={()=>setState({...state, faqOpen : !state.faqOpen})}
        >
          <Typography style={{fontSize:"30px", color:"white"}}>FAQ</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Faqs/>
        </AccordionDetails>
      </Accordion>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={-0}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:!state.faqOpen ? "51%" : "83%",
            height:"100vh",
            transition:"margin-top 0.5s"
          }}>
          <div style={{display:"flex", alignItems:"center", marginLeft:"10%", gap:"10px"}}>
            <p style={{width:"14%", fontSize:"34px", color:"white"}}>Our Team</p>
            <hr style={{width:"70%", opacity:".4"}}/>
          </div>
          <div style={{width:"100%"}}>
            <p style={ {
              marginLeft:"10%",
              fontSize: "20px", fontWeight: "100", color: "white", width:"70%", opacity:".7" } }>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div style={{display:"flex", justifyContent:"space-between", width:"80%", margin:"auto"}}>
            <div style={{ width:"200px", height:"377px",
              display:"flex", alignItems:"center", flexDirection:"column", gap:"20px"}}>
              <img src={ProfileImage} style={{
                height:"180px",
                width:"180px",
                backgroundColor:"yellow",
                borderRadius:"90px",
                border:"1px solid white"
              }}/>
              <div style={{border:"1px solid #CA6406", borderStyle:"dashed", height:"100px", }}></div>
              <p style={{fontSize:"16px", color:"white"}}>Name</p>
              <p style={{fontSize:"20px", color:"#FFB039", marginTop:"-10px"}}>Designation</p>
            </div>
            <div style={{ width:"200px", height:"400px",
              display:"flex", alignItems:"center", flexDirection:"column-reverse", gap:"20px"}}>
              <img src={ProfileImage} style={{
                height:"180px",
                width:"180px",
                backgroundColor:"yellow",
                borderRadius:"90px",
                border:"1px solid white"
              }}/>
              <div style={{border:"1px solid #CA6406", borderStyle:"dashed", height:"100px", }}></div>
              <p style={{fontSize:"20px", color:"#FFB039", marginTop:"-10px"}}>Designation</p>
              <p style={{fontSize:"16px", color:"white"}}>Name</p>

            </div>  <div style={{ width:"200px",
            display:"flex", alignItems:"center", flexDirection:"column", gap:"20px"}}>
            <img src={ProfileImage} style={{
              height:"180px",
              width:"180px",
              backgroundColor:"yellow",
              borderRadius:"90px",
              border:"1px solid white"
            }}/>
            <div style={{border:"1px solid #CA6406", borderStyle:"dashed", height:"100px", }}></div>
            <p style={{fontSize:"16px", color:"white"}}>Name</p>
            <p style={{fontSize:"20px", color:"#FFB039", marginTop:"-10px"}}>Designation</p>
          </div>  <div style={{ width:"200px", height:"400px",
            display:"flex", alignItems:"center", flexDirection:"column-reverse", gap:"20px"}}>
            <img src={ProfileImage} style={{
              height:"180px",
              width:"180px",
              backgroundColor:"yellow",
              borderRadius:"90px",
              border:"1px solid white"
            }}/>
            <div style={{border:"1px solid #CA6406", borderStyle:"dashed", height:"100px", }}></div>
            <p style={{fontSize:"20px", color:"#FFB039", marginTop:"-10px"}}>Designation</p>
            <p style={{fontSize:"16px", color:"white"}}>Name</p>
          </div>
          </div>
          <Footer/>
        </ParallaxLayer>



        {/* <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            // marginTop:"84%"
          }}>
          <Footer/>
        </ParallaxLayer> */}
      </Parallax>
    </div>
  )
}
