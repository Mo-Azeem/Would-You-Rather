import { MdLeaderboard } from 'react-icons/md'

function LeaderboardBtn(props) {
    return (
        <button className="leaderboard-btn flex flex-col justify-center items-center bg-green-500 h-32 w-48 rounded-md hover:bg-green-400">
            <MdLeaderboard size='38' color='#F9FAFB'/>
            <p className='font-bold tracking-tight text-gray-50'>Leaderboard</p>
        </button>
    )
}

export default LeaderboardBtn;