import React from 'react';
import Countdown from 'react-countdown';

const LotteryPageNew = ( props ) => {
  const Completionist = () => <span>You are good to go!</span>
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };
  console.log(Date.now(), 88888888)
  return (
    <div>
      <div style={ { display : props.isDialogOpen ? "none": "", color: "white", width: "100%", textAlign: "center", marginTop: "6%" } }>
        <p style={ { fontSize: "22px", opacity: .8 } }>
          Get a chance to win a
        </p>
        <h1 style={ { fontSize: "44px", fontWeight: "400", margin: '10px', color: "#FFB039" } }>
          Lottery!
        </h1>

        <h1 className='LotteryTime' style={ { fontSize: "80px", fontWeight: "600", margin: '10px' } }>
          {/*22:22:22*/}
          <Countdown
            date={Date.now() + 1000000}
            renderer={renderer}
          />
        </h1>
        <h1 style={ { fontSize: "22px", fontWeight: "400", margin: '10px', opacity: .8 } }>
          Time Remaining
        </h1>
        <p style={ {
          opacity: ".7",
          width: "55%",
          fontSize: "20px",
          fontWeight: 200,
          margin: "auto",
          marginTop: "30px"
        } }>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
      </div>
    </div>
  )
}

export default LotteryPageNew;
