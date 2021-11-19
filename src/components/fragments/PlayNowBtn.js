import { FaPlay } from 'react-icons/fa'

function PlayNowBtn(props){
    return (
        <button className="play-now-btn bg-indigo-500 flex items-center gap-x-10 px-14 py-6 rounded-md hover:bg-indigo-400">
            <div className='text-gray-50'>
            <h1 className='font-extrabold text-4xl my-1'>Play Now!</h1>
                <p className='text-indigo-300'>Answer all questions now!</p>
            </div>
            <div className="splitter border-l-2 h-14 border-gray-50 opacity-40"></div>
            <FaPlay size='40' color='#F9FAFB'/>
        </button>
    )
}

export default PlayNowBtn;