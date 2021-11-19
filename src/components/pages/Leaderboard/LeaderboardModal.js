import LeaderboardItem from "../../fragments/LeaderboardItem";
import { connect } from "react-redux";
import React from "react";

class LeaderboardModal extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <div className="leaderboard-dialog">
        <div
          className="dialog-background px-20 py-10 rounded-lg"
          style={{ backgroundColor: "#F5F5F5", height: "90vh" }}
        >
          <div className="header flex flex-col items-center">
            <div className="handle py-1 px-7 rounded-full bg-gray-400"></div>
            <h1 className="text-gray-500 font-bold tracking-tight mt-3">
              Leaderboard
            </h1>
          </div>
          <div
            className="leaderboard-list flex flex-col gap-y-7 mt-5 overflow-auto"
            style={{ height: "90%" }}
          >
            {users.map((user, index) => {
              const {
                username,
                displayName,
                avatar,
                answersCount,
                asksCount,
                totalScore,
              } = user;
              const place = index + 1;
              return (
                <LeaderboardItem key={index} key_={index}
                  user={{ username, displayName, avatar }}
                  stats={{ place, answersCount, asksCount, totalScore }}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const formattedUsers = Object.keys(users).map((username) => {
    const displayName = users[username].name;
    const answersCount = Object.keys(users[username].answers).length;
    const asksCount = users[username].questions.length;
    const avatar = users[username].avatar;
    const totalScore = answersCount + asksCount;
    return { displayName, answersCount, asksCount, avatar, totalScore };
  });
  return {
    users: formattedUsers.sort((a, b) => b.totalScore - a.totalScore),
  };
}

export default connect(mapStateToProps)(LeaderboardModal);
