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
            
            <button className={themes.before} onClick={handleClick}>Atrás</button>
            <h1>Tienda</h1>
            <div className={themes.card}>
            {React.Children.map(views,(view) => {
                return view;
            })}</div>
        </div>
    );
}
const useStyles = makeStyles(themes =>({
    title: {
        color:'black'
    },
    background:{
        backgroundColor: 'white',
  height: '100vh',
  width: '100%',
  display: 'flex'
    },
    card:{
        height: '300px',
        width:'200px'
    },
    before:{
        height:'5%'
    }

}))


export default Store;