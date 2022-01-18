
import { makeStyles, Box, Typography,Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cartSlice';
const useStyle = makeStyles({
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

const Product = ({ product }) => {
    const classes = useStyle();
    const dispatch=useDispatch();

    const AddToCaRT=(product)=>{
        dispatch(addToCart(product));

    }


    return (
        <Box className={classes.container}>
            <img src={product.url} alt="post" className={classes.image} />
            <Typography className={classes.textColor}>{product.id}</Typography>
            <Typography className={classes.heading}>{product.tagline}</Typography>
            <Button onClick={AddToCaRT(product)} style={{width:'90%',height:'50px'}} variant='contained' color='primary' >ADD TO CART</Button>
        </Box>
    )
}

export default Product;