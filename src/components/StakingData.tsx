import React from 'react';

const StakingNew = (props) => {
  return (
    <div style={{display:props.isDialogOpen ? "none" : ""}}>
        <div style={ { color: "white", width: "100%", textAlign: "center", marginTop: "12%" } }>
          <p style={ { fontSize: "28px", color: "#FFB039" } }>
            Staking</p>
          <h1
            style={ { fontSize: "60px", fontWeight: "500", margin: '10px' } }>
            Coming Soon!
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

export default StakingNew
