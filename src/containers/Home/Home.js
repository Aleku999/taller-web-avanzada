import React from 'react';
import {makeStyles} from '@material-ui/core'
import {BrowserRouter as Router,Route} from 'react-router-dom';



function Home(props) {
  const classes = useStyles({url:'/images/fondo.jpg'});
  const themes= classes;

  function handleClick(){
    props.history.push('/create');
  }
  function handleStore(){
    props.history.push('/store');
  }

  return (
    <div className={themes.background}>
      <div className={themes.todo}>
      <h1 className={themes.landing}> Paint your <br/> imagination </h1>
      </div>
      <button className={themes.button1} onClick={handleClick} >Create and sell</button>
      <button className={themes.button2} onClick={handleStore}>Store</button>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
landing:{
    color:'white',
    fontSize:'144px',
    marginTop:'100px',
    marginLeft:'200px'
},
todo:{
marginTop:'100px',
},
background:{
    backgroundImage: (props) => `url(${props.url})`,
    width:'auto',
    height: '100vh',
    marginTop:'-100px',
    backgroundSize: 'cover'
},
button1:{
color:'white',
borderRadius:'50px',
width:'250px',
height:'60px',
fontSize:'20px',
background:'none',
border:'2px solid white',

marginLeft:'200px'
},
button2:{
  color:'white',
  borderRadius:'50px',
  width:'150px',
  height:'60px',
fontSize:'20px',
background:'none',
border:'2px solid #B12D2D',

marginLeft:'30px'
}

}))


export default Home;