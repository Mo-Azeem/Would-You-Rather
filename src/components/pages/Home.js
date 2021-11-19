import React from "react";
import Background from "../fragments/Background";
import Navbar from "../layouts/Navbar";
import MainMenu from "../layouts/MainMenu";
import { Outlet, Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import QuestionsBrowserDialog from "../layouts/QuestionsBrowserDialog";

function Home(props) {
  const {questionType} = useParams()
  if (!props.authedUser) return <Navigate to="/login" />;
  return (
    <Background>
      <div className="home-page h-screen w-9/12 flex flex-col items-center justify-evenly">
        <Navbar />
        <div className="main-screen flex flex-row w-full justify-between items-center">
          <div className="main">
            <h1 className="text-gray-200 font-extrabold text-3xl tracking-tight my-3 ">
              Would You Rather
            </h1>
            <MainMenu />
          </div>
          <QuestionsBrowserDialog questionType={questionType}/>
        </div>
        <div className="author">
          <p className="text-gray-600">
            A fun project by{" "}
            <strong className="italic">Mohammed Abdelazem</strong>
          </p>
        </div>
      </div>
        <Outlet />
    </Background>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Home);
