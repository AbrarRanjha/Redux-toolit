import React,{useState,useEffect} from "react";
import { TextField, Paper, Button } from "@material-ui/core";
import { AddCircle as Add, DataUsageOutlined} from '@material-ui/icons';
import {useDispatch} from 'react-redux'
import { createProduct } from "../Reduxss/features/productSlice";
import axios from 'axios';
const url = 'http://localhost:8000';
const AddProducts = () => {
    const [data, setData] = useState({
        id: "",
        tagline:"",
        price:"",
        picture:'',

        
      });
      

    
      const ChangeEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
          return {
            ...preVal,
            [name]: value,
          };
        });
      };



      const [file, setFile] = useState('');
      const [imageURL, setImageURL] = useState('');
  
      const urlImg = data.picture ? data.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';


      const uploadFile = async (data) => {
        console.log(data);
        try {
            return await axios.post(`${url}/file/upload`, data);
        } catch (error) {
            console.log('Error while calling uploadFile API ', error);
        }
    }
     
      useEffect(() => {
          const getImage = async () => { 
              if(file) {
                  const dataF = new FormData();
                  dataF.append("name", file.name);
                  dataF.append("file", file);
                  
                  const image = await uploadFile(dataF);
                  // console.log(image);
                  data.picture = image.data;
                  setImageURL(image.data);
              }
          }
          getImage();
      }, [file])


     


    
    // const createPost = async (data) => {
    //     try {
    //         return await axios.post(`http://localhost:8000/addProducts`,data);
    //     } catch (error) {
    //         console.log('Error while calling createPost API ', error);
    //     }
    // }
    const dispatch = useDispatch()



      const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(createProduct(data));
        console.log('added product');
        // await createPost(data);
        // history.push('/');
    // const {id,tagline,price}=data;
    // const res= await fetch("http://localhost:8000/addProducts",{
    //   method:"POST",
    //   headers:{
    //     "Content-Type" : "application/json"
    
    //   },
    //   body:JSON.stringify({
    //    id,tagline,price
    //   })
    // });
    // const details= await res.json();
    // console.log(details);
    // if(res.status === 422 ){
    // window.alert("INVALID REGISTRATION");
    // }
    // else if(details || res.status===201){
    //   window.alert("Registered Successfully!");
    // }
        
       
      };


  return (

    <div>
        <br/><br/><br/>
      <form >
      <Paper  style={{width:'50%',margin:"auto"}}>
      <img  style={{width:'100%',height:'20vh'}} src={urlImg} alt="product"  />

    <label htmlFor="fileInput">
        <Add style={{marginLeft:'0%'}} fontSize="large" color="action" />
      
    </label>
            <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={(e) => setFile(e.target.files[0])}
             />
  
              <TextField
                id="product-id"
                label="ID"
                name="id"
                onChange={ChangeEvent}
                value={data.id}
                variant="outlined"
                placeholder="Enter Product id"
                fullWidth
                margin="normal"
          
          />

            <TextField
                id="product-Tagline"
                label="Tagline"
                variant="outlined"
                name="tagline"
                value={data.tagline}
                onChange={ChangeEvent}
                placeholder="Enter Tagline"
                
                fullWidth
                margin="normal"
          
          />
               <TextField
                id="product-price"
                label="Price"
                variant="outlined"
                placeholder="Price"
                name="price"
                onChange={ChangeEvent}
                value={data.price}
                
                fullWidth
                margin="normal"
          
          />

          <Button style={{width:'100%'}} variant='contained' color='secondary' type="submit" onClick={handleSubmit}>Add New Product</Button>
      
      </Paper>
      </form>
    </div>
  );
};

export default AddProducts;
