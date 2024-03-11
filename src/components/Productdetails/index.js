import { useParams } from "react-router-dom"

const Productdetials = () => {
    const params = useParams()
    const{id} = params
    console.log(id)
    return(
        <div>
            <h1>this is product details page</h1>
            <p>
                {id}
            </p>
        </div>
    )
}
export default Productdetials