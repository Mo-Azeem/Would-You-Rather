import { connect } from "react-redux";
import { Navigate } from "react-router-dom"
import { deAuthUser } from "../../actions/authedUser"

function Logout(props){
    props.dispatch(deAuthUser())
    return (
        <Navigate to='/' />
    )
}

export default connect()(Logout)