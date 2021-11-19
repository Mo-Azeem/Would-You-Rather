import { handleSaveQuestion } from "../../../actions/shared";
import React from "react";
import { connect } from "react-redux";

class AddQuestionsModal extends React.Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
  };

  handleFormOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const addQuestionForm = document.getElementById("add-question-form");
    const isFormValid = addQuestionForm.checkValidity();
    if (!isFormValid) return alert("Option #1 or Option #2 cannot be empty.");

    const { authedUser, dispatch } = this.props;
    const { optionOneText, optionTwoText } = this.state;

    dispatch(
      handleSaveQuestion({ optionOneText, optionTwoText, author: authedUser })
    );
    alert("Added!");

    this.setState({
      optionOneText: "",
      optionTwoText: "",
    });
  };

  render() {
    return (
      <div
        className="create-question-dialog px-12 rounded-2xl flex flex-col items-center justify-center gap-8 w-max h-80"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <div className="headers text-center">
          <h1 className="font-bold text-gray-800 tracking-tight text-xl">
            Add Question
          </h1>
          <p className="text-gray-400 font-medium">
            Add a question to the game so players can play it!
          </p>
        </div>
        <form
          id="add-question-form"
          className="flex flex-col items-center w-full"
        >
          <input
            type="text"
            placeholder="Enter Option #1"
            name="optionOneText"
            id="option1"
            onChange={this.handleFormOnChange}
            value={this.state.optionOneText}
            className="text-center font-bold  border-2  border-red-500 bg-red-50 py-2 rounded-full placeholder-red-300 text-red-400 outline-none w-full"
            required
          />
          <div className="or-badge transform -my-3 scale-50">
            <p className="text-gray-50 font-bold bg-black p-3 inline rounded-full">
              OR
            </p>
          </div>
          <input
            type="text"
            placeholder="Enter Option #2"
            name="optionTwoText"
            id="option2"
            onChange={this.handleFormOnChange}
            value={this.state.optionTwoText}
            className="text-center font-bold border-2 border-blue-500 bg-blue-50 py-2 rounded-full placeholder-blue-300 text-blue-500 outline-none w-full"
            required
          />
          <button
            className="font-bold text-gray-50 px-4 py-2 bg-green-600 hover:bg-green-400 rounded-full mt-5"
            onClick={this.handleSubmitForm}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(AddQuestionsModal);
