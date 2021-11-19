import PlayNowBtn from "../fragments/PlayNowBtn";
import LeaderboardBtn from "../fragments/LeaderboardBtn";
import AddQuestionBtn from "../fragments/AddQuestionBtn";
import { Link } from 'react-router-dom'
import React from 'react'

class MainMenu extends React.Component {

    state = {
        openedDialog: 'none'
    }
    render(){
        return (
            <div className="main-menu">
                <Link to='/questions'><PlayNowBtn /></Link>
                <div className="sub-menu flex flex-row items-center justify-center gap-x-4 mt-3">
                    <Link to='/leaderboard'><LeaderboardBtn/></Link>
                    <Link to='/add'><AddQuestionBtn/></Link>
                </div>
            </div>
        )
    }
}

export default MainMenu;