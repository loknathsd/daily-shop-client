import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL,setImageURL] = useState(null)
    const onSubmit = data => {
        const productData ={
            name : data.name,
            price : data.price,
            weight : data.weight,
            imageURL : imageURL
        }
        fetch('https://frozen-citadel-19738.herokuapp.com/addProduct',{
            method:'POST',
            headers : {'Content-Type' : 'application/json'},
            body:JSON.stringify(productData)
        })
        .then(result=>{
            alert('Your product is added successfully')
        })
    }

    const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key','27857de30973670589e3e40a5817902c')
        imageData.append('image',event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload' , imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="mt-5">
            <h2 style={{marginLeft:'150px'}}>Add product</h2>
            <div className="container">
                <div className="row product-detail">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p><span>Product Name</span> <br /> <input placeholder="Name" {...register("name")} /></p>
                        <p><span>Weight</span><br /><input placeholder="weight" {...register("weight")} /></p>
                        <p><span>Add Price</span><br /> <input placeholder="price" {...register("price")} /></p>
                        <p><span>Add photo</span><br /><input onChange={handleImageUpload} type="file" /></p>
                        <input style={{color:'white'}}  value="Save" className="btn btn-primary" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;