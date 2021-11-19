import React, { Fragment } from "react";
import UnansweredPoll from "../fragments/UnansweredPoll";
import AnsweredPoll from "../fragments/AnsweredPoll";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class QuestionBrowserDialog extends React.Component {
  state = {
    viewing: !this.props.questionType ? "unanswered" : "answered",
  };

  handleToggleButton = () => {
    const { viewing } = this.state;
    if (viewing === "answered") {
      this.setState({
        viewing: "unanswered",
      });
    } else {
      this.setState({
        viewing: "answered",
      });
    }
  };

  render() {
    const { answeredCount, answered, unansweredCount, unanswered } = this.props;
    const { viewing } = this.state;
    return (
      <div
        className="questions-browser-dialog p-8 rounded-2xl flex flex-col items-center"
        style={{ backgroundColor: "#F5F5F5", height: "70vh", width: "35vw" }}
      >
        <div className="header flex flex-col items-center py-2">
          <h1 className="text-gray-500 font-bold tracking-tight mt-3">
            {viewing === "answered"
              ? `You've Answered ${answeredCount} Questions!`
              : `There are still ${unansweredCount} Questions to Play!`}
          </h1>
          <button
            onClick={this.handleToggleButton}
            className="text-blue-400 underline cursor-pointer"
          >
            Toggle Poll Type
          </button>
        </div>
        <div
          className="polls mt-6 overflow-auto flex flex-col gap-6 justify-start items-center"
          style={{ height: "95%", width: "100%" }}
        >
          {this.state.viewing === "answered" && (
            <Fragment>
              {answered.map((answeredQuestion) => (
                <Link to={`/questions/${answeredQuestion.id}`} key={answeredQuestion.id}>
                  <AnsweredPoll key={answeredQuestion.id} answeredQuestion={answeredQuestion} />
                </Link>
              ))}
            </Fragment>
          )}
          {this.state.viewing === "unanswered" && (
            <Fragment>
              {unanswered.map((unansweredQuestion) => (
                <Link
                to={`/questions/${unansweredQuestion.id}`} key={unansweredQuestion.id}>
                <UnansweredPoll unansweredQuestion={unansweredQuestion} />
               </Link>
              ))}
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}


function mapStateToProps({ users, questions, authedUser }, {questionType}) {
  const _authedUser = users[authedUser];

  const answeredQuestionsIDs = Object.keys(_authedUser.answers)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp);
    
  const unansweredQuestionsIDs = Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp);

  const answeredQuestions = answeredQuestionsIDs.map((aqId) => questions[aqId]);
  
  //removing the answered questions from the all questions list so we get the unanswered list
  answeredQuestionsIDs.forEach((aqId) => {
    const itemIndex = unansweredQuestionsIDs.indexOf(aqId);
    if (itemIndex !== -1) unansweredQuestionsIDs.splice(itemIndex, 1);
  });

  const unansweredQuestions = unansweredQuestionsIDs.map(
    (uaq) => questions[uaq]
  );

  return {
    answeredCount: answeredQuestionsIDs.length,
    answered: answeredQuestions,
    unansweredCount: unansweredQuestionsIDs.length,
    unanswered: unansweredQuestions,
    questionType
  };
}

export default connect(mapStateToProps)(QuestionBrowserDialog);
