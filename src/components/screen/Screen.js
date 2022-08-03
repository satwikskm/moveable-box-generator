import React from 'react'
import Box from '../box/Box'
import { useState,useEffect } from 'react'
import Header from '../header/Header'
import './Screen.css'

const Screen = () => {
    const [box,setBox]=useState([])
    const[number,setNumber]=useState(1)
    const[idx,setIdx]=useState(0)
    const[button,setButton]=useState(false)
    const addBox = () =>{
        setNumber(number+1)
        setIdx(idx+1)
        const newBox = {
            
            id:number,
            index:idx,
            
            
        }
        setBox([...box,newBox])

    }
    const deleteBox =(id) =>{
        console.log("deleted")
        const updatedBox = box.filter((item)=>item.id!==id)
        setBox(updatedBox)
    }
    useEffect(()=>{
        document.title=`(${box.length})🎁Box-Mobility😎`
    })
    const modal=()=>{
        
        const modal = document.getElementById("myModal");


        

       
       

        
          modal.style.display = "block";
        

        // When the user clicks on <span> (x), close the modal
        // span.onClick = function() {
        //   modal.style.display = "none";
        // }

        window.onclick = function(event) {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        }

    }

    const modalClose = () =>{
        const modal = document.getElementById("myModal");
        modal.style.display = "none";

    }
  return (
    <div className='canvas'>
        <Header />
       
       {console.log(box)}
       <div className="btn-container">
       <button 
        className="btn"
        onClick={(e)=>addBox()}
        >+ Add Boxes</button>
        <button 
        className="btn"
        onClick={()=>setButton(!button)}
        >{button?"Status:On 🌅":"Status:Off 🌄"} </button>
        {console.log(button)}

       </div>
        
        
        <div className="main-screen">
        <h2 className='start' color='black'> Start 🚩</h2>
        {box.map((item)=>{
            return(
            
            <Box {...item}  delete={deleteBox} check={box} key={item.id} lock={button}/>
            
            )
        })}
        
           </div> 

           <div className="popup">

           <button id="myBtn"
           className='btn'
            onClick={()=>modal()}
           >Open Modal</button>
           <div id="myModal" class="modal">
            
  
            <div class="modal-content">
                    <span className="close"
                    onClick={()=>modalClose()}
                    >&times;</span>
                    <h1 className='rules'>📚 Manual</h1>
                    <h3>  Use the Status button to switch on control</h3>
                    <h3>  Use navigation keys or w - top d - right s - down a - left </h3>
                    <h3>  Use add boxes button to create boxes </h3>
                    <h3>  Use Click to select box </h3>
                    <h3>  Double click to remove a box </h3>

            </div>

</div>

           </div>
        
       
        

       
       

       
        
    </div>
  )
}

export default Screen