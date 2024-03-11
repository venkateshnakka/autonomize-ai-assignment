import { Link } from "react-router-dom"
import "./index.css"

const Products  = (props) =>{
    const {eachProduct} = props
    const {title,image} = eachProduct
    return(
       <div className="product-card">
          <Link to="/productdetials">
            <div>
                <img src={image} alt={title}/>
                <p>{title}</p>
            </div>
          </Link>
       </div>
    )
}
export default Products