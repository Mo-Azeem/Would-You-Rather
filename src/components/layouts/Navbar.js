import { connect } from "react-redux";
import React from "react";
import UserAvatar from "../fragments/UserAvatar";
import { Link } from "react-router-dom"
class Navbar extends React.Component {
 
  render() {
      const {avatar, name,id} = this.props.authedUser
    return (
      <nav className="flex flex-row items-center justify-between w-full">
        <div className="user-avatar-mini flex flex-row gap-x-1 items-center justify-center">
          <UserAvatar avatar={avatar} width="55px" />
          <div className="username leading-4">
            <p className="text-gray-50 uppercase font-semibold tracking-widest">
              {name}
            </p>
            <p className='text-gray-500 tracking-wide text-sm'>@{id}</p>
          </div>
        </div>
        <ul className='flex text-gray-400 underline font-semibold gap-x-5'>
        <Link to='/'><p className='hover:text-gray-50'>Home</p></Link>
        <Link to='/questions'><p className='hover:text-gray-50'>Play</p></Link>
        <Link to='/leaderboard'><p className='hover:text-gray-50'>Leaderboard</p></Link>
        <Link to='/add'><p className='hover:text-gray-50'>Add Questions</p></Link>
        <Link to='/logout'><p className='hover:text-gray-50'>Logout</p></Link>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users }, { history }) {
  const _authedUser = users[authedUser];
  return {
    authedUser: _authedUser,
    history,
  };
}

export default connect(mapStateToProps)(Navbar);
