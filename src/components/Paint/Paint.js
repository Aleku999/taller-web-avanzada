import React from 'react';
import {BlockPicker} from 'react-color';
import p5 from 'p5';

function Paint() {
  const [color,setColor] =React.useState('#00000');
  const [size, setSize]= React.useState('100');
  const sketch = React.useRef();
 

const canvasParent = React.useRef();

React.useEffect(() =>{
   sketch.current = new p5(p5canvas(canvasParent.current));
},[]);

  const handleChange =(color) => {
    console.log(color);
    setColor(color.hex);
    sketch.current.setColor(color.hex);
  }


  const handleSize =(event) => {
    setSize( parseInt(event.target.value));
    sketch.current.setResize(parseInt(event.target.value));
  }


  return (
    <div className="Paint">
      <header className="Paint-header">

        <section className="Paint-left">
        <BlockPicker  color={color} triangle="hide" onChange={handleChange} />

<input type="range" min="10" max="100" onInput={handleSize} />

{ color && <div style ={{width:size, height:size, background:color}}></div>}

<button>Crear</button>
        </section>
        <section className="Paint-right" id="canvas-parent">
          {color}
          <div ref={canvasParent}></div>
        </section>
        
      </header>
    </div>
  );
};

const p5canvas = (domElement) => (app) =>{
  var list = [];
  var x=100;
  var color = "#0000";
  var resize = 10;
  app.setup=() =>{
  var canvas = app.createCanvas(500,500);
canvas.parent(domElement);
  }

  app.draw = () => {
    app.background(220);
    app.fill(color);
    app.ellipse(x,100,10+resize,10+resize);
    x += 5;

    if(x > app.width + 40){
      x =- 10;
    }
  }
  app.setColor = (temp) =>{
    color = temp;
  }
  app.setResize = (temp) =>{
    resize = temp;
  }
 
}



export default Paint;
