import UserAvatar from './UserAvatar'
function PollAuthor(props) {
    return (
        <div className="poll-author bg-gray-50 rounded-2xl px-4 bg-opacity-90">
            <div className="wrapper mr-3 flex flex-row items-center">
                <UserAvatar avatar={props.author.avatar} width='60px'/>
                <p className='leading-4'><strong>{props.author.name}</strong><br />Asks</p>
            </div>
        </div>
    )
}

export default PollAuthor