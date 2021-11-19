import { motion } from "framer-motion";
import PollAuthor from './PollAuthor'
function GamePoll(props) {
  const { question } = props;
  return (
    <div className="game-poll-wrapper w-full flex flex-col justify-center items-center gap-y-5">
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="game poll flex flex-row items-center text-2xl text-gray-50 w-full shadow-md opacity-0"
      >
        <button
          onClick={() => props.submitAnswer(1, question)}
          className="option1 font-bold w-1/2 h-44 bg-red-500 hover:bg-red-400 text-center rounded-tl-2xl rounded-bl-2xl p-5"
        >
          <p>{question.optionOne.text}</p>
        </button>
        <div
          className="or-badge transform scale-75"
          style={{ marginLeft: "-32px", marginRight: "-32px" }}
        >
          <p className="text-gray-50 font-bold bg-black p-3 inline rounded-full">
            OR
          </p>
        </div>
        <button
          onClick={() => props.submitAnswer(2, question)}
          className="option2 font-bold w-1/2 h-44 bg-blue-500 hover:bg-blue-400 text-center rounded-tr-2xl rounded-br-2xl p-5"
        >
          <p>{question.optionTwo.text}</p>
        </button>
      </motion.div>
      <PollAuthor author={props.author}/>
    </div>
  );
}

export default GamePoll;
