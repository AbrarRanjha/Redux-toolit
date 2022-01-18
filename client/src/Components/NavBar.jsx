import React,{useState} from "react";
import { AppBar, Toolbar,makeStyles, Box,Menu,MenuItem} from '@material-ui/core'; 
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

const useStyle = makeStyles ((theme) =>({
    component: {
        background: 'blue',
        color: 'white',
        fontWeight:'bold'
    },
    container: {
        justifyContent: 'center',
        marginLeft:'auto',
        [theme.breakpoints.down('sm')]: {
            display:'none'
           },
        '&  >*': {
            padding: 20,
            color: 'white',
            textDecoration: 'none'
        }
    },

    Menu:{
        display:"none",
        [theme.breakpoints.down('sm')]: {
           display:'block'
          },

    }

}))

const NavBar = () => {
    
    const classes = useStyle(); 
    const[toggle,setToggle]=useState(false);




    const OpenMobileMenu=(event)=>{
        setToggle(event.currentTarget);
      }

      
    
      

  const CloseMobileMenu=()=>{
    setToggle(false);
}

    const mobileMenu=(
        <Menu  anchorEl={toggle} id="mobile-menu"  open={toggle} >
            <MenuItem component={Link} onClick={CloseMobileMenu} to="/">HOME</MenuItem>
            <MenuItem component={Link} onClick={CloseMobileMenu}  to="/cart"> CART</MenuItem>
            <MenuItem component={Link}  onClick={CloseMobileMenu}  to="/signup">SignUp</MenuItem>
            <MenuItem component={Link}  onClick={CloseMobileMenu}  to="/login">Login</MenuItem>
        </Menu>
    )

  
    return (
        <>
        <AppBar className={classes.component}>
            <Toolbar >
               <Box className={classes.Menu}>
                <MenuIcon onClick={OpenMobileMenu}/>
                </Box>

                 <Box className={classes.container}>
                <Link to='/'>HOME</Link>
                <Link to='/cart'>CART</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
                </Box>
                
                
            </Toolbar>
        </AppBar>

        {mobileMenu}
        </>
    )
}

export default NavBar;