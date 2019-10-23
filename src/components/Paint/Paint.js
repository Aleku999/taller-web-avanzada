import React, {useState} from 'react';
import {PhotoshopPicker} from 'react-color';
import p5 from 'p5';
import { white } from 'ansi-colors';
import { makeStyles } from '@material-ui/core';
import { Range } from 'react-range';



function Paint() {
  const [color,setColor] = useState('#00000');
  const [size, setSize]= React.useState('100');
  const sketch = React.useRef();
  const [imag, setImag] = useState("");
  const theme = useStyles();
  const [alpha, setAlpha] =useState(255);
  const [cuantity, setCuantity]= useState(0);
  
  const canvasParent = React.useRef();

  console.log(canvasParent)
  
  React.useEffect(() =>{
    sketch.current = new p5(p5canvas(canvasParent.current, setCuantity));
  },[]);
  
  const handleChange =(color) => {
    console.log(color);
    setColor(color.hex);
    sketch.current.setColor(color.hex);
  }
  const handleOpacity =(opacity) => {
    setAlpha(opacity.alpha);
    sketch.current.setAlpha(parseInt(opacity.target.value));
  }
  
  const handleSize =(event) => {
    setSize( parseInt(event.target.value));
    sketch.current.setResize(parseInt(event.target.value));
  }

  const handleClick = () => {
    setImag( canvasParent.current.querySelector("canvas").toDataURL() )
  }
  
  return (
    <div className="Paint">
    <header className={theme.background}>
    
    <section className="Paint-right" id="canvas-parent">
    {color}
    <div ref={canvasParent}></div>
    <h1 className="cuantityPaint"> {cuantity}</h1>
    <section>
    <img src={imag} alt={'fondo'}></img>
    </section>
    </section>
   
    
    <section className="Paint-left">
    <PhotoshopPicker  color={color} triangle="hide" onChange={handleChange} />
    
    <input type="range" min="10" max="100" onInput={handleSize} />
    <input type="range" min="0" max="255" onInput={handleOpacity} />
    
    <button onClick={handleClick} className="crear">Crear</button>

    </section>
    </header>
    </div>
    );
  };

  const useStyles = makeStyles(theme => ({
background:{
  backgroundColor: '#000000',
  height: '100vh',
  width: '100%',
  display: 'flex'
},
  }))
  
  const p5canvas = (domElement,setCuantity) => (app) =>{
    var list = [];
    var x=100;
    var color = "#0000";
    var resize = 10;
    var opacity = 255;
    var saveImage;
    var cuantity = 0;
    
    app.setup=() =>{
      var canvas = app.createCanvas(500,500);
      canvas.parent(domElement);
      app.noLoop();
      console.log(canvas.canvas);
   
      //setImag(canvas.canvas.toDataURL())
    }
    
    app.draw = () => {
      app.background(220);
      if(x > app.width + 40){
        x =- 10;
      }
    }
    app.mouseDragged = () => {
      app.fill(color);
      app.noStroke();
      app.ellipse(app.mouseX,app.mouseY,10+resize,10+ resize);
      cuantity++;
      console.log(cuantity);
      setCuantity(cuantity);
      
    }
    app.setColor = (temp) =>{
      color = temp;
    }
    app.setResize = (temp) =>{
      resize = temp;
    }
    app.setAlpha= (temp) => {
      opacity = temp;
    }
    
    app.createImage = () =>{
      
    }
    
  }
  
  
  
  export default Paint;
  