import UserAvatar from './UserAvatar'

function formatPlace(place) {
    place = place.toString()
    let abbver = ''
    const lastChar = place.substr(place.length - 1)
    if(lastChar === '1') abbver = 'st'
    else if(lastChar === '2') abbver = 'nd'
    else if(lastChar === '3') abbver = 'rd'
    else abbver = 'th'
    return `${place}${abbver}`
}

function LeaderboardItem(props) {

    const {user, stats, key_} = props
    return (
        <div key={key_} className="leaderboard-item flex flex-row items-center justify-around py-4 rounded-xl shadow-lg border-2 border-gray-200" style={{backgroundColor: '#F5F5F5', width: '600px'}}>
            <div className="info-section flex flex-col gap-y-2">
                <div className="username-info leading-5">
                    <h1 className='font-bold uppercase tracking-widest text-gray-600 w-1'>{user.displayName}</h1>
                    <p className='italic text-gray-400'>{user.username}</p>
                </div>
                <div className="splitter border-b-2 border-gray-300 w-12"></div>
                <div className="stats-info font-medium text-gray-500 leading-8">
                    <h3>Asked <span className='px-3 py-1 rounded-lg text-gray-50 bg-purple-500'>{stats.asksCount}</span></h3>
                    <h3>Answered <span className='px-3 py-1 rounded-lg text-gray-50 bg-purple-500'>{stats.answersCount}</span></h3>
                </div>
            </div>
            <div className="user-avatar -ml-12 relative">
                <UserAvatar avatar={user.avatar} width='150px'/>
                <div className="place absolute bottom-4 right-10">
                    <span className='bg-yellow-500 p-2 rounded-md font-bold text-gray-50 '>{formatPlace(stats.place)}</span>
                </div>
            </div>
            <div className="score text-center">
                <h1 className='text-gray-50 font-bold text-3xl tracking-tighter bg-purple-500 px-3 py-2 rounded-md shadow-md'>{stats.totalScore}</h1>
                <p className='italic tracking-tighter text-gray-500'>score</p>
            </div>
        </div>
    )
}

export default LeaderboardItem