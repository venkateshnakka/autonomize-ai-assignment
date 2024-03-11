import { Link } from "react-router-dom"
import "./index.css"

const Products  = (props) =>{
    const {eachProduct} = props
    const {title,image,id} = eachProduct
    return(
      <Link to={"/productdetails/"+id}>
       <div className="product-card">
         
            <div>
                <img src={image} alt={title}/>
                <p>{title}</p>
            </div>
          
       </div>
       </Link>
    )
}
export default Products