import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./index.css"
const Productdetails = () => {
    const[product,setProduct] = useState()
    const params = useParams()
    const {id} = params
    console.log(params)
    const getProductDetails = async()=>{
        const response = await fetch("https://fakestoreapi.com/products/"+id)
        const data = await response.json()
        setProduct(data)
        console.log(data.image)
    }
    useEffect(()=>{
        getProductDetails()
    },[])
    if(!product){
        return null
    }
    return(
        <div className="products-bg">
            <div>
                <img src={product.image} alt={product.title} className="product-img"/>
            </div>
            <div>
                <h3>{product.title}</h3>
                <p className="description">{product.description}</p>
                <p>Total rating count : {product.rating.count}</p>
                <p>Rating : {product.rating.rate}</p>
            </div>
        </div>
    )
}
export default Productdetails