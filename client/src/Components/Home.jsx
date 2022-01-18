import React from 'react'
import { Grid, makeStyles,Box,Typography,Button,Fab} from '@material-ui/core';
import { useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';
import AddIcon from "@material-ui/icons/Add";
import { addToCart } from '../Reduxss/features/cartSlice';
const useStyle = makeStyles({
    fab: {
        position: "fixed",
        right: "5%",
        bottom: "5%",
      },
    container: {
        border: '1px solid #d3cede',
        borderRadius: 10,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: 350,
        '& > *': {
            padding: '0 5px 5px 5px'
        }
    },
    image: {
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',
        height: 150
    },
    textColor: {
        color: '#878787',
        fontSize: 12
    },
    heading: {
        fontSize: 18,
        fontWeight: 600
    },
    detail: {
        fontSize: 14,
        wordBreak: 'break-word'
    }
})
const Home = () => {
    const history=useNavigate();
    const { items } = useSelector(state => state.product);
    console.log(items);
    
    const classes = useStyle();
    const dispatch=useDispatch();

    const AddToCaRT=(product)=>{
        dispatch(addToCart(product));
        history('/Cart');

    }
    return (
       
        <Grid container>
        { items?
         items.map(product => (
                < >
                 <Grid item lg={3} sm={4} xs={12}>
                 
                 <Box className={classes.container}>
                <img src={product.picture} alt="post" className={classes.image} />
               <Typography className={classes.textColor}>{product.id}</Typography>
               <Typography className={classes.heading}>{product.tagline}</Typography>
               <Typography className={classes.textColor}>{product.price}</Typography>
              <Button onClick={()=>AddToCaRT(product)} style={{width:'90%',height:'50px'}} variant='contained' color='primary' >ADD TO CART</Button>
              </Box>  
                </Grid>
              
          
            
          
                                    
                 </>
                        
                    )):<Typography>Hello</Typography>
                }
                 <Fab component={Link} to="/add" className={classes.fab} ><AddIcon /></Fab>
                </Grid>   
    )
}

export default Home
