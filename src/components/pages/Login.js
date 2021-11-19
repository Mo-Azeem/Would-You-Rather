import React from "react";
import LoginUserList from "../layouts/LoginUsersList";
import Background from "../fragments/Background";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom'
function Login(props) {
  const { questionId } = useParams()
  return (
    <Background>
      <div className="container h-screen flex flex-col items-center justify-evenly gap-y-28">
        <div className="header text-center">
          <h1 className="text-gray-300 font-extrabold text-4xl">
            Would You Rather
          </h1>
          <p className="text-gray-400">
            The Fun Is Just Few Clicks Away, Login Or Create An Account To Start
            Playing!
          </p>
        </div>
        <div className="user flex flex-col items-center gap-y-4">
          <p className="text-gray-400 font-light">Who's Playing Here?</p>
          <LoginUserList questionId={questionId}/>
        </div>
        <footer>
          <p className="italic  text-gray-500">
            A fun project by <strong>Mohammed Abdelazem</strong>
          </p>
        </footer>
      </div>
    </Background>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Login);
