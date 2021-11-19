import { motion } from 'framer-motion'
import PollAuthor from './PollAuthor';
import { connect } from 'react-redux';

function PollResults(props) {
  const { optionOne, optionTwo } = props.question
  const {optionOnePercentage,
    optionTwoPercentage,
    optionOneStats,
    optionTwoStats } = formatStats(optionOne.votes.length, optionTwo.votes.length)
  
  const highlightingStyle = {
    optionOne: props.playerChoice === "optionOne" ? 1 : .3,
    optionTwo: props.playerChoice === "optionTwo" ? 1 : .3
  }
  return (
    <div className="wrapper w-full flex flex-col items-center gap-y-5">
      <motion.div animate={{opacity: 1}} transition={{duration: .5, delay:.5}} className="poll-results w-full opacity-0 cursor-pointer"
      onClick={() => {props.toggleViewMode(); props.nextQuestion()}}
      >
        <div className="relative bg-black bg-opacity-30 rounded-2xl">
          <div className="overflow-hidden h-44 rounded-2xl font-bold tracking-tight">
              <motion.div animate={{width: `${optionOnePercentage}%`, opacity: highlightingStyle.optionOne}} transition={{duration: .6, delay: 1}} 
                  className="float-left text-center text-gray-50 justify-center bg-red-500 py-9 opacity-30" 
                  style={{minWidth:'20%',maxWidth: '80%', width:'50%'}}>
                <div className="info">
                    <h1 className='text-6xl italic'>{optionOnePercentage}%</h1>
                    <p className='opacity-70'>{optionOne.text}</p>
                    <i className='font-normal opacity-70 '>{optionOneStats}</i>
                </div>
              </motion.div>
              <motion.div animate={{width: `${optionTwoPercentage}%`, opacity: highlightingStyle.optionTwo}} transition={{duration: .6, delay: 1}} 
                  className="float-right text-center text-gray-50 justify-center bg-blue-500 py-9 opacity-30" 
                  style={{minWidth:'20%',maxWidth: '80%' ,width:'50%'}}>
                <div className="info">
                    <h1 className='text-6xl italic'>{optionTwoPercentage}%</h1>
                    <p className='opacity-70'>{optionTwo.text}</p>
                    <i className='font-normal opacity-70 '>{optionTwoStats}</i>
                </div>
              </motion.div>
              
          </div>
        </div>
      </motion.div>
        <PollAuthor author={props.author}/>
    </div>
  );
}

function formatStats (optionOneVotes, optionTwoVotes) {
  const totalVotes = optionOneVotes + optionTwoVotes;
  return {
    optionOnePercentage: Math.round((optionOneVotes * 100) / totalVotes),
    optionTwoPercentage: Math.round((optionTwoVotes * 100) / totalVotes),
    optionOneStats: `(${optionOneVotes} out of ${totalVotes})`,
    optionTwoStats: `(${optionTwoVotes} out of ${totalVotes})`,
  };
};

function mapStateToProps({questions, users, authedUser}, {author, questionID}){
  const playerChoice = users[authedUser].answers[questionID]
  return { 
    question: questions[questionID],
    author,
    playerChoice
  }
}

export default connect(mapStateToProps)(PollResults);
