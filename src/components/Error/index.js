import { useRouteError } from "react-router-dom"
import "./index.css"

const Error = () => {
    const err = useRouteError()
    return(
        <div>
            <h1 className="errorHeding">Something went wrong</h1>
            <p className="errorPara">{err.status}:{err.statusText}</p>
        </div>
    )
}
export default Error