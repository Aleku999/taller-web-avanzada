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
        views.push(<ModalSell width="400px" height="300px" paint={elem.paint} name={elem.name} price={elem.price} /> );
    });
    
    const handleClick = (props) =>{
        //props.history.('');
    }
    return(
        <div className={themes.background}>
            <h1>Store</h1>
            <button onClick={handleClick}>Atrás</button>
            {React.Children.map(views,(view) => {
                return view;
            })}
        </div>
    );
}
const useStyles = makeStyles(themes =>({
    title: {
        color:'black'
    },
    background:{
        backgroundColor: '#000000',
  height: '100vh',
  width: '100%',
  display: 'flex'
    }

}))


export default Store;