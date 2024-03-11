import { Link } from "react-router-dom"
import "./index.css"

const Products  = (props) =>{
    const {eachProduct} = props
    const {title,image,id} = eachProduct
    return(
       <div className="product-card">
          <Link to={"/productdetails/"+id}>
            <div>
                <img src={image} alt={title}/>
                <p>{title}</p>
            </div>
          </Link>
       </div>
    )
}
export default Products