import React from 'react'

function Square({value ,onClick }) {
  return (
    <>
    <div 
    onClick={onClick}
    className="square" style={{
        border:"2px solid black" , 
        height:"100px" , 
        width:"100%", 
        display: "flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
        <h5>{value}</h5>
    </div>
      
    </>
  )
}

export default Square
