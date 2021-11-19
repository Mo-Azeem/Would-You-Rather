/*
  this page is used for all games mode (Random in series or a single question picked from home screen)
  and it's also used for displaying answered questions stats too.  
*/

import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Background from "../fragments/Background";
import GameAnsweringPoll from "../layouts/GameAnsweringPoll";
import Navbar from "../layouts/Navbar";
import { connect } from "react-redux";

function Game(props) {
  const { questionId } = useParams();
  
  if (!props.authedUser && questionId){
    alert("Please Login First.")
    return <Navigate to={`/login/${questionId}`}/> 
  }
  
  if (!props.authedUser){
    return <Navigate to={`/login`}/> 
  }
  
  
  let questionType = props.authedUser.answers[questionId] ? "answered" : "unanswered"
    return (
    <Background>
      <div className="game-scene h-screen flex flex-col items-center justify-around w-4/5">
        <Navbar />
        <GameAnsweringPoll singleQuestion={questionId} questionType={questionType}/>
        <div className=""></div>
      </div>
    </Background>
  );
}

function mapStateToProps({authedUser, users}) {
    return {
      authedUser: users[authedUser]
    }
}

export default connect(mapStateToProps)(Game);
