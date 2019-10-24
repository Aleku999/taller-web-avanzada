import React from 'react';
import ModalSell from '../../components/ModalSell/ModalSell.js';

import { makeStyles, Modal } from '@material-ui/core';

var storeList = [];

var temp = localStorage.getItem("storeList");
if(temp !== null){
    storeList=JSON.parse(temp);
}

function Store(){
    let views =[];

    const themes= useStyles();   
    storeList.forEach((elem)=>{
        views.push(<ModalSell width="400px" height="300px" paint={elem.paint} name={elem.name} price={elem.price} autor={elem.autor} /> );
    });
    
    const handleClick = (props) =>{
        //props.history.('');
    }
    return(
        <div className={themes.background}>
            <div>
            <button className={themes.before} onClick={handleClick}>Atrás</button>
            <h1 className={themes.title} >Nuestra Tienda</h1>
            </div>
            <div className={themes.tienda} >
                
            <div className={themes.card}>
            {React.Children.map(views,(view) => {
                return view;
            })}</div>
            </div>
        </div>
    );
}
const useStyles = makeStyles(themes =>({
    title: {
        color:'grey',
        fontSize:'50px'
    },
    background:{
        backgroundColor: 'white',
  height: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection:'column'
    },
    card:{
        height: '300px',
        marginTop:'10px',
        marginLeft:'10px',
        width:'100vw',
        display: 'flex',
        flexWrap:'wrap'
    },
    before:{
        height:'5%'
    },
   

}))


export default Store;