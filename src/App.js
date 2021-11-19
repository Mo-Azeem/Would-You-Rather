import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Game from "./components/pages/Game";
import Logout from "./components/pages/Logout";
import Page404 from "./components/pages/Page404";
import CreateAccount from "./components/pages/CreateAccount";
import AddQuestionsModalWrapper from "./components/pages/AddQuestions/AddQuestionsModalWrapper";
import LeaderboardModalWrapper from "./components/pages/Leaderboard/LeaderboardModalWrapper";
import { handleInitialData } from "./actions/shared";
import { connect } from "react-redux";
import React from "react";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}>
            <Route path=":questionId"/>
          </Route>
          <Route path="/" exact element={<Home />}>
            <Route path=":questionType" />
            <Route path='add' element={<AddQuestionsModalWrapper/>}/>
            <Route path='leaderboard' element={<LeaderboardModalWrapper/>}/>
          </Route>
          <Route path="/questions" element={<Game />}>
            <Route path=":questionId" element={<Game />} />
          </Route>
          <Route path="/new-account" element={<CreateAccount />} />
          <Route path='/logout' element={<Logout />}/>
          <Route path='/404' element={<Page404/>}/>
        </Routes>
      </Router>
    );
  }
}

export default connect()(App);
