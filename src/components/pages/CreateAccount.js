import React from "react";
import Background from "../fragments/Background";
import AvatarCreationForm from "../layouts/AvatarCreationForm";
import { connect } from "react-redux";
class CreateAccount extends React.Component {

  render() {
    return (
      <Background>
        <div className="create-account h-screen w-10/12 flex flex-col items-center justify-around">
          <div className="headers self-start">
            <h1 className="text-gray-50 font-bold text-2xl">Create Account</h1>
            <p className="text-gray-400">
              Creating an account helps you keep the progression you make.
            </p>
          </div>
          <AvatarCreationForm />
          <div></div>
        </div>
      </Background>
    );
  }
}

export default connect(({ authedUser }) => ({authedUser}))(CreateAccount);
