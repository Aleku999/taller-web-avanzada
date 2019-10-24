import React from 'react';
import {Card,CardContent, makeStyles} from '@material-ui/core'

function ModalSell(props){
    const themes= useStyles();    
     return (
         <Card width="400px" height="300px">
             <CardContent className={themes.container}>
                 <img width="150px" height="150px" className={themes.imagen} src={props.paint} />
                <h2 className={themes.title}>{props.name}</h2>
                 <h2><span className={themes.title}>$</span>{props.price} </h2>
                 <p className={themes.small}>{props.autor} </p>
             </CardContent>
         </Card>
     );
 }
 
 const useStyles = makeStyles(theme =>({
     title: {
         color:'black'
     },
     small:{
         fontSize:'10px'
     }

 }))
 export default ModalSell;