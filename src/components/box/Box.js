import React, { useCallback } from 'react'
import { useState,useEffect } from 'react'
import './Box.css'

const Box = (props) => {
    const[x_axis,setX]=useState(0)
    const[y_axis,setY]=useState(0)
    const[element,setElement]=useState(true)
    const[id,setId]=useState(0)
    const button = props.lock

    const key =useCallback(e=>{

        console.log(e)
        console.log("event")
        console.log(x_axis,y_axis)
        // e = e || window.event()

        if(e.keyCode === 38 || e.keyCode === 87){
             console.log("move up")
            moveBox("top",id)
        }
        else if(e.keyCode === 40 || e.keyCode === 83){
            console.log("move down")
            moveBox("bottom",id)
        }
        else if(e.keyCode === 37 || e.keyCode === 65){
            console.log("move left")
            moveBox("left",id)
        }
        else if(e.keyCode === 39 || e.keyCode === 68){
            console.log("move right")
            moveBox("right",id)
        }
        else if(e.keyCode === 8){
            
            if(element){
                
                props.delete(props.id)
            }
        }
    },[])

    const moveBox = (a,id)=>{

//      if(x_axis >= -55 && y_axis >= -45 && x_axis <=1080 && y_axis <=20){  
        if(a === 'right'){
            
            setX(x_axis + 20)
            console.log("right")
            console.log(x_axis,y_axis)
           document.getElementById(`box-${id}`).style.transform = `translate(${x_axis}px,${y_axis}px)`
            
        }
        else if(a === 'left'){
            setX(x_axis-20)
            console.log(x_axis,y_axis)
           document.getElementById(`box-${id}`).style.transform = `translate(${x_axis}px,${y_axis}px)`
            
        }
        else if(a === 'top'){
            setY(y_axis-20)
            console.log(x_axis,y_axis)
            document.getElementById(`box-${id}`).style.transform = `translate(${x_axis}px,${y_axis}px)`            
        }
        else if(a === 'bottom'){
            setY(y_axis+20)
            console.log("bottom")
            console.log(x_axis,y_axis)
            document.getElementById(`box-${id}`).style.transform =    `translate(${x_axis}px,${y_axis}px)`               
        }
//    }
//    else{
//        if(x_axis <= -55){
//            setX(x_axis + 55)
//
//        }
//        if(y_axis <= -45){
//            setY(y_axis + 45)
//        }
//        if(x_axis >= 1080){
//            setY(x_axis - 1080)
//        }
//        if(y_axis >=20){
//            setY(y_axis -20)
//        }
       
        
//    }

    }
    const  highlight = (id) =>{
        console.log("inside")
        setId(id)
        setElement(true)
        // props.check.map((itm)=>{
        //     if(itm.status === true){
        //         console.log("changed")
        //         props.click(false)
                
        //     }
        //     console.log(props.check)
        // })
    
        console.log(props.check)
        console.log(props.id)
        if(element){
            document.getElementById(`box-${id}`).style.border ='3px solid black'
        }
           

        
        
       
        //='3px solid black'
        // if(props.status){
        //     document.getElementById(id).style.border='none'
        //     console.log(props.recent,id)

        // }

        // // else if(props.recent > 0){
        // //     console.log("not possible")
        // //     console.log(props.recent)
        // // }
        // else{
        //     document.getElementById(id).style.border='3px solid black'
        //     props.click(id)
        //     console.log(props.recent)
        // }
        
        

    }
    const removeLight=()=>{
        setId(0)
        setElement(0)
        document.getElementById(`box-${id}`).style.border ='none'


    }
    
    
    
       
        useEffect(()=>{
        
            if(element && button){
                window.addEventListener('keydown', key);
                console.log(id)
                

            }
               
                

                
               
           
            return () => {
                window.removeEventListener('keydown', key);
              };
        
        
    },[key,element,button,id])
    
  return (
    <div className='box' id={`box-${props.id}`} 
    onClick={()=>highlight(props.id)}
    onDoubleClick={()=>removeLight()}
    style={
        {background:`#${Math.floor(Math.random()*16777215).toString(16)}`,
        zIndex:`${props.id}`   } 
    }                                                                                                                         
    >
        {/* {console.log(Math.floor(Math.random()*16777215).toString(16))}
        {console.log(props)}
        {/* <h1>{props.index}</h1>
        <h1>{props.id}</h1> */}
        {/* {console.log(props.check)} */}
        
       
       
       
    </div>
  )
}

export default Box