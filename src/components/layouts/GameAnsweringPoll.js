import GamePoll from "../fragments/GamePoll";
import PollResults from "../fragments/PollResults";
import { handleSaveQuestionAnswer } from "../../actions/shared";
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

class GameAnsweringPoll extends React.Component {
  constructor(props) {
    super(props);

    if (props.gameMode === 'random')
      var {question, author} = this.fetchQuestion(); // fetchQuestion is used here to fetch the first question of the session
    
      this.state = {
      gameMode: props.gameMode === "random" ? "random" : "singular",
      /* ^ this indicates if the player is answering all the questions randomly, 
      or just answering a single question that the player picked from the questions browser. */
    
      viewMode: "gamePoll", // is the player answering or is he viewing the stats of the question he has answered previously
      playSession: "stillGoing", //indicates if the session is over or still going
      questionType: props.questionType,
      question: props.gameMode === "random" ? question : props.question,
      author: props.gameMode === "random" ? author : props.author,
      isInvalid: props.invalid ? true : false
    };
  }

  toggleViewMode = () => {
    const { viewMode } = this.state;
    if (viewMode === "gamePoll")
      return this.setState({ viewMode: "pollResults" });
    this.setState({ viewMode: "gamePoll" });
  };

  submitAnswer = (userChoice, question) => {
    const { authedUser, dispatch } = this.props;
    const { id: qid } = question;
    const _answer = {
      authedUser: authedUser.id,
      qid,
      answer: userChoice === 1 ? "optionOne" : "optionTwo",
    };
    dispatch(handleSaveQuestionAnswer(_answer));
    this.toggleViewMode();
  };

  fetchQuestion = () => {
    const { users, questions, unansweredQuestionsIDs } = this.props;
    
    if (unansweredQuestionsIDs.length === 0) {
      return {
        question: "",
        author: "",
        playSession: "over"
      };
    }
    
    const question = getRandomQuestion(unansweredQuestionsIDs, questions);
    const author = users[question.author];
    return {
      question,
      author,
    };
  };

  nextQuestion = () => {
    if (this.props.gameMode === "singular")
      return this.setState({
        question: "",
        author: "",
        playSession: "over",
      });
    const {question, author} = this.fetchQuestion(); //<-- this might cause a bug 
    this.setState({
      question,
      author
    })
  };

  render() {
    if (this.state.isInvalid) return <Navigate to='/404'/>
    if (this.state.playSession === "over" && this.state.gameMode === "singular") return <Navigate to="/questionType=answered" />;
    if (this.state.playSession === "over" || this.state.question === "") {
      alert("No more questions, time to add more!");
      return <Navigate to="/" />;
    }
    const { question, author } = this.state;
    return (
      <div
        className="game-answer-poll flex flex-col items-center gap-y-7"
        style={{ width: "60vw" }}
      >
        <h1 className="font-bold text-gray-200 text-2xl tracking-tight -mb-4">
          {this.state.viewMode === "gamePoll"
            ? "Would You Rather..."
            : "Most People Rather"}
        </h1>
        {this.state.viewMode === "gamePoll" && this.state.questionType !== "answered" ? (
          <>
            <GamePoll
              question={question}
              author={author}
              submitAnswer={this.submitAnswer}
            />
          </>
        ) : (
          <>
            <PollResults
              questionID={question.id}
              author={author}
              toggleViewMode={this.toggleViewMode}
              nextQuestion={this.nextQuestion}
            />
          </>
        )}
      </div>
    );
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomQuestion(unansweredQuestionsIDs, questions) {
  const randomQuestionID =
    unansweredQuestionsIDs[getRandomInt(unansweredQuestionsIDs.length)];
  const randomQuestion = questions[randomQuestionID];
  return randomQuestion;
}

function mapStateToProp({ authedUser, users, questions }, { singleQuestion, questionType }) {
  const _authedUser = users[authedUser];
  const gameMode = singleQuestion ? "singular" : "random";
  const _singleQuestion = questions[singleQuestion]

  if(_singleQuestion === undefined && gameMode === "singular")
    return {
      invalid: true
    }

  if (_singleQuestion !== undefined){
    return { 
      authedUser: _authedUser, 
      question: _singleQuestion, 
      author: users[_singleQuestion.author],
      questionType,
      gameMode
    };
  }
  const answeredQuestionsIDs = Object.keys(_authedUser.answers);
  const unansweredQuestionsIDs = Object.keys(questions);

  //substracting the answered questions from total questions so we end up with the unanswered ones
  answeredQuestionsIDs.forEach((aqId) => {
    const itemIndex = unansweredQuestionsIDs.indexOf(aqId);
    if (itemIndex !== -1) unansweredQuestionsIDs.splice(itemIndex, 1);
  });

  return {
    gameMode,
    users,
    authedUser: _authedUser,
    questions,
    unansweredQuestionsIDs,
  };
}

export default connect(mapStateToProp)(GameAnsweringPoll);
