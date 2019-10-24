import React, {useState} from 'react';
import {PhotoshopPicker} from 'react-color';
import p5 from 'p5';
import { white } from 'ansi-colors';
import { makeStyles, Modal } from '@material-ui/core';
import { Range } from 'react-range';
import Backdrop from '@material-ui/core/Backdrop';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { useSpring, animated } from 'react-spring';



function Paint(props) {
  const [color,setColor] = useState('#00000');
  const [name,setName]=useState("Unknown");
  const [price,setPrice]=useState(0);
  const [size, setSize]= React.useState('100');
  const [form, setForm] = useState("circle");
  const sketch = React.useRef();
  const [imag, setImag] = useState("");
  const theme = useStyles();
  const classes= useStyles();
  const [alpha, setAlpha] =useState(255);
  const [cuantity, setCuantity]= useState(0);
  const [paleta, setPaleta]=useState(0);
  const canvasParent = React.useRef();
  const cont= 0;
  const [open, setOpen] = React.useState(false);

  var storeList =[];
  var temp = localStorage.getItem("storeList");

  if (temp !== null){
    storeList=JSON.parse(temp);
  }

  console.log(canvasParent)
  
  React.useEffect(() =>{
    sketch.current = new p5(p5canvas(canvasParent.current, setCuantity));
  },[]);
  
  const handleChange =(color) => {
    console.log(color);
    setColor(color.hex);
    sketch.current.setColor(color.hex);
    setPaleta(cont);
  }
 
  const handleOpacity =(opacity) => {
    setAlpha(opacity.alpha);
    sketch.current.setAlpha(parseInt(opacity.target.value));
  }
  
  const handleSize =(event) => {
    setSize(event.value);
    sketch.current.setResize(parseInt(event.target.value));
  }

  const handlePrice = (event)=>{
    setPrice(parseInt(event.target.value));

  }
  const handleName = (event)=>{
    setName(event.target.value);

  }

  const handleCircle = (form) =>{
    form = "circle";

    sketch.current.setForm("circle");
   
    
    console.log(form);
  }
  const handleSquare= (form) =>{
    form = "square"
    sketch.current.setForm("square");
    console.log(form);
  }
  const handleTriangle= (form) =>{
    form = "triangle"
    sketch.current.setForm("triangle");
    console.log(form);
  }

  const handleOpen = () => {
    setOpen(true);
};

const handleClose = (event) => {
  setImag( canvasParent.current.querySelector("canvas").toDataURL() );
  

  var object={
    paint: imag,
    name:name,
    price:price
  }
  storeList.push(object);
  console.log(localStorage);
  localStorage.setItem("storeList",JSON.stringify(storeList));
    setOpen(false);
    
  
};
  
  return (
    <div className="Paint">
    <header className={theme.background}>
    
    <section className="Paint-right" id="canvas-parent">
    {color}
    <div ref={canvasParent}></div>
    <section>
   
    </section>
    </section>
  
        
    
    <section className="Paint-left">
    <PhotoshopPicker  color={color} triangle="hide" onChange={handleChange} />
   <button onClick={handleCircle}>Circulo</button>
   <button onClick={handleSquare}>Cuadrado</button>
   <button onClick={handleTriangle}>Triangulo</button>
    <h2 className={theme.text}>Tamaño</h2>
    <input type="range" min="10" max="100" onInput={handleSize} />
    <h2 className={theme.text}>Opacidad</h2>
    <input type="range" min="0" max="255" onInput={handleOpacity} />
    <div>   
       <h2 className={theme.text}>Pintura usada:</h2>
    <h1 className="cuantityPaint" className={theme.text}> {cuantity} <span className={theme.text}>ml</span></h1>
    <h2 className={theme.text}>{paleta}</h2>
    </div>
    <button onClick={handleOpen} className={theme.crear}>Crear</button>

    </section>
    <Modal 
        aria-labelledby="spring-modal-title"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}>    

<div  >
        <Fade in={open}>
        <ClickAwayListener>
        
        <div className={theme.paper}>
      
        <section className={classes.principalInfo}>
          
        <img width="300px" height="300px" src={imag} alt={'fondo'}></img>
        </section>
        
        
        
        <section>
        <h1 className= {theme.title} >Enviar a la tienda</h1>   
        <h3 className= {theme.title} >Llena este formulario</h3>
        <p className={theme.subtitle}>Ponle nombre a tu obra</p>
        <input className="namePaint" onChange={handleName} placeholder="Nombre de obra" />
         <p className={theme.subtitle}> Ingresa el precio de tu pintura</p>
        <input className="pricePaint" onChange={handlePrice} placeholder="Precio de tu pintura" />
        <p className={theme.subtitle}> Autor</p>
        <input className="autorPaint" placeholder="Escribe tu nombre" />
        <p className={theme.subtitle}> Pintura usada </p>
        <p className={theme.subtitle}>{cuantity}<span>ml</span> </p>
        <button onClick={handleClose}>Subir a la Tienda</button>
        </section>
        </div>
        </ClickAwayListener>
        </Fade>
        </div>
        </Modal>
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
imag:{
height:'40vh',
width:'300'
},
text:{
  color:'white',
},
crear:{
  color:'white',
borderRadius:'50px',
width:'250px',
height:'60px',
fontSize:'20px',
background:'none',
border:'2px solid white'
},

content: {
  display:'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems:'center'
},
modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
},
paper: {
    display:'flex',
    width: 600,
    flexDirection: 'row',
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
},
principalInfo:{
            
    display:'flex',
    flexDirection: 'column',
    marginRight: 50,
    
},
subtitle:{
    fontWeight: 'bold',
    
},

info: {
    margin:0,
    fontSize:20,
    color: theme.palette.grey[300],

    //Como si fuera SASS
    '& span' : {
        color: theme.palette.grey[700],
    }
}
  }));
  const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });
    
    return (
        <animated.div ref={ref} style={style} {...other}>
        {children}
        </animated.div>
        );
    });
  
  const p5canvas = (domElement,setCuantity) => (app) =>{
    var list = [];
    var x=100;
    var color = "#0000";
    var resize = 10;
    var opacity = 255;
    var form = "circle"
    var saveImage;
    var cuantity = 0;
    
    app.setup=() =>{
      var canvas = app.createCanvas(700,700);
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
      console.log(form);
      if(form === "circle"){
        app.fill(color); //intenté pasarle opacidad
        app.noStroke();
        app.ellipse(app.mouseX,app.mouseY,10+resize,10+ resize);
        console.log("pinta");
      }
      if(form === "triangle"){
        app.fill(color); //intenté pasarle opacidad
        app.noStroke();
        app.triangle(app.mouseX,app.mouseY,app.mouseX+resize,app.mouseY+ resize*2 ,app.mouseX+resize*2, app.mouseY);
        console.log("pinta");
      }
      if(form === "square"){
        app.fill(color); //intenté pasarle opacidad
        app.noStroke();
        app.rect(app.mouseX,app.mouseY,10+resize,10+ resize);
        console.log("pinta");
      }
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
    app.setForm= (temp) => {
      form = temp;
    }
    
    app.createImage = () =>{
      
    }
    
  }
  
  
  
  export default Paint;
  