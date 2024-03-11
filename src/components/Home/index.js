import React from "react";
import { useState, useEffect } from "react";
import Products  from "../Products";
import "./index.css"
const Home = () => {
    const [products,setProducts] = useState([])
    
    useEffect(()=>{
        let getDetails = async () => {
            const response = await fetch("https://fakestoreapi.com/products/")
            const data = await response.json()
            setProducts(data)
        }
        getDetails()
        
    },[])
    
    return(
        <div>
            <div className="productsContainer">
            
                    {
                    products.map((eachProduct, index) => {
                        return <Products key={index} eachProduct={eachProduct} />;
                    })          
                        }
            </div>
        </div>
        
    )
}
export default Home