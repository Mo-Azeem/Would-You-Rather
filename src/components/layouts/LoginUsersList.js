import CreateAccountButton from "../fragments/CreateAccountButton";
import UserAvatar from "../fragments/UserAvatar";
import { Link } from "react-router-dom";
import React from "react";
import { authUser } from "../../actions/authedUser";
import { connect } from "react-redux";
import { Navigate } from "react-router";

function LoginUserList(props) {
  const handleSignIn = (e, username) => {
    e.preventDefault();
    props.dispatch(authUser(username));
  };

  const { users } = props;
  if(props.authedUser && props.questionId)
    return <Navigate to={`/questions/${props.questionId}`} />  
  if(props.authedUser)
    return <Navigate to='/'/>
  

  return (
    <div className="logged-users flex flex-row justify-center items-center gap-x-2">
      {Object.keys(users).map((user) => (
        <div
          className="cursor-pointer hover:opacity-50"
          key={`userKey@${user}`}
          onClick={(e) => handleSignIn(e, user)}>
          <UserAvatar
            width="190px"
            username={user}
            avatar={users[user].avatar}
          />
        </div>
      ))}
      <Link to="/new-account">
        <CreateAccountButton />
      </Link>
    </div>
  );
}
function mapStateToProps({ users, authedUser }, {questionId}) {
    
  return {
    users,
    authedUser,
    questionId,
  };
}

export default connect(mapStateToProps)(LoginUserList);
