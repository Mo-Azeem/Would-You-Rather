import React from 'react';
import { connect } from 'react-redux';
import UserAvatar from './UserAvatar'

class UnansweredPoll extends React.Component {
    render(){
        
    const { author, optionOne, optionTwo } = this.props; 

    return(
        <div className="unanswered-poll shadow-xl border-2 border-gray-200 flex flex-row justify-around items-center p-5 rounded-3xl cursor-pointer" 
        style={{backgroundColor: '#F5F5F5', width:'55vh'}}>
            <div className="author-info flex flex-col items-center justify-center gap-y-1">
                <UserAvatar avatar={author.avatar} width='90px'/>
                <div className="user-info leading-4 -mt-2 text-center">
                    <p className='uppercase font-medium text-gray-500 tracking-wider text-center'>{author.name}</p>
                    <p className='italic text-gray-400 mt-1'>@{author.id}</p>
                </div>
            </div>
            <div className="splitter border-l border-2 border-gray-200 h-16"></div>
            <div className="poll text-center " style={{width: '70%'}}>
                <p className='font-bold text-gray-600 mb-1'>Would You Rather...</p>
                <div className="option-1 bg-red-50 border-2 border-red-500 rounded-full py-2 px-3" >
                    <p>{optionOne.text}</p>
                </div>
                <div className="or-badge transform -my-3 scale-50">
                    <p className='text-gray-50 font-bold bg-black p-3 inline rounded-full'>OR</p>
                </div>
                <div className="option-2 bg-blue-50 border-2 border-blue-500 rounded-full py-2 px-3">
                    <p>{optionTwo.text}</p>
                </div>
            </div>
        </div>
    )
    }
}

function mapStateToProps({users}, {unansweredQuestion}) {
    
    const {author, optionOne, optionTwo} = unansweredQuestion
    const _author = users[author]
    return {
        author : _author,
        optionOne,
        optionTwo
    }
}

export default connect(mapStateToProps)(UnansweredPoll);
