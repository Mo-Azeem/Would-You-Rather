import UserAvatar from "./UserAvatar";
import { connect } from "react-redux";
import React from "react";

class AnsweredPoll extends React.Component {
  formatStats = (optionOneVotes, optionTwoVotes) => {
    const totalVotes = optionOneVotes + optionTwoVotes;

    return {
      optionOnePercentage: Math.round((optionOneVotes * 100) / totalVotes),
      optionTwoPercentage: Math.round((optionTwoVotes * 100) / totalVotes),
      optionOneStats: `(${optionOneVotes} out of ${totalVotes})`,
      optionTwoStats: `(${optionTwoVotes} out of ${totalVotes})`,
    };
  };

  render() {
    const { author, optionOne, optionTwo, playerChoice } = this.props;
    const {
      optionOnePercentage,
      optionTwoPercentage,
      optionOneStats,
      optionTwoStats,
    } = this.formatStats(optionOne.votes.length, optionTwo.votes.length);
    return (
      <div
        className="answered-poll shadow-xl border-2 border-gray-200 flex flex-row justify-around items-center p-5 rounded-3xl"
        style={{ backgroundColor: "#F5F5F5", width: "55vh" }}
      >
        <div className="author-info flex flex-col items-center justify-center gap-y-2">
          <UserAvatar avatar={author.avatar} width="100px" />
          <div className="user-info leading-4 -mt-2">
            <p className="uppercase font-medium text-gray-500 tracking-wider text-center">
              {author.name}
            </p>
            <p className="italic text-gray-400 mt-1">@{author.id}</p>
          </div>
        </div>
        <div className="splitter border-l border-2 border-gray-200 h-16 mr-4"></div>
        <div className="poll w-2/3 text-center">
          <div className="poll-stats relative pt-1 flex flex-col">
            <div
              className={`option-1 self-start text-red-500 font-bold ml-3 ${
                playerChoice !== "optionOne" ? "opacity-40" : ""
              }`}
            >
              <p>{optionOne.text}</p>
              <p className="float-left font-normal italic">{optionOneStats}</p>
            </div>
            <div className="stats overflow-hidden flex rounded-full my-3 bg-red-50 text-gray-50 font-bold">
              <div
                className={`option-1-stat flex flex-col h-10 text-center whitespace-nowrap justify-center bg-red-500 ${
                  playerChoice !== "optionOne" ? "opacity-40" : ""
                }`}
                style={{ width: `${optionOnePercentage}%`, minWidth: "15%" }}
              >
                ({optionOnePercentage}%)
              </div>
              <div
                className={`option-2-stat flex flex-col h-10 text-center whitespace-nowrap justify-center bg-blue-600 ${
                  playerChoice !== "optionTwo" ? "opacity-40" : ""
                }`}
                style={{ width: `${optionTwoPercentage}%`, minWidth: "15%" }}
              >
                ({optionTwoPercentage}%)
              </div>
            </div>
            <div
              className={`option-2 self-end text-blue-600 font-bold mr-3 ${
                playerChoice !== "optionTwo" ? "opacity-40" : ""
              }`}
            >
              <p>{optionTwo.text}</p>
              <p className="font-normal italic float-right">{optionTwoStats}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }, { answeredQuestion }) {
  const { id, author, optionOne, optionTwo } = answeredQuestion;
  const _author = users[author];
  const _authedUser = users[authedUser];
  const playerChoice = _authedUser.answers[id];
  return {
    author: _author,
    optionOne,
    optionTwo,
    playerChoice,
  };
}

export default connect(mapStateToProps)(AnsweredPoll);
