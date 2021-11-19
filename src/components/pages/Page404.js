import Background from "../fragments/Background";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

function Page404(props){
    return (
        <Background>
            <div className='h-screen w-screen flex flex-col items-center justify-center gap-y-2'>
                <h1 className='text-gray-50 font-extrabold text-9xl'>404</h1>
                <p className='text-gray-500'>The Page You Are Looking For <br/> Traveled To Another Dimension</p>
                <Link to='/'><p className='text-gray-400 underline hover:text-gray-50'>Take Me Home</p></Link>
            </div>
        </Background>
    )
}

export default connect()(Page404)