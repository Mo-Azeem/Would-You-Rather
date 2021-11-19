import { HiUserAdd } from 'react-icons/hi'
function CreateAccountButton(props){
    return (
        <div className="btn">
            <button onClick={props.onClick} className="create-account-btn p-10 mt-16 ml-5 bg-indigo-500 rounded-full relative hover:bg-indigo-400">
                <HiUserAdd color='white' size='50'/>
            </button>
            <p className='text-center text-gray-50 uppercase font-medium ml-6 mt-4 '>Create Account</p>
        </div>
    )
}

export default CreateAccountButton