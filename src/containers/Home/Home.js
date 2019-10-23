import React from 'react';
import {makeStyles} from '@material-ui/core'
import {BrowserRouter as Router,Route} from 'react-router-dom';



function Home(props) {
  const classes = useStyles({url:'/images/fondo.jpg'});
  const themes= classes;

  function handleClick(){
    props.history.push('/create');
  }

  return (
    <div className={themes.background}>
      <h1 className={themes.landing}> Paint your <br/> imagination </h1>
      <button className={themes.button1} onClick={handleClick} >Create and sell</button>
      <button className={themes.button2}>Store</button>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
landing:{
    color:'white',
    fontSize:'144px',
    marginTop:'0'
},
background:{
    backgroundImage: (props) => `url(${props.url})`,
    width:'auto',
    height: '100vh',
    backgroundSize: 'cover'
},
button1:{
color:'white',
borderRadius:'50px',
width:'250px',
height:'60px',
fontSize:'20px',
background:'none',
border:'2px solid white'
},
button2:{
  color:'white',
  borderRadius:'50px',
  width:'150px',
  height:'60px',
fontSize:'20px',
background:'none',
border:'2px solid #B12D2D'
}

}))


export default Home;