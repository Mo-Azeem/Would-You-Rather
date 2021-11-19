import allQuestionsBtnLogo from '../../img/all-questions-btn.svg'
function AllQuestionsBtn(props) {
    return (
        <button className="all-questions-btn flex flex-col justify-center items-center bg-blue-500 h-32 w-32  rounded-md hover:bg-blue-400">
            <img src={allQuestionsBtnLogo} width='60' alt="" />
            <p className='font-bold tracking-tight text-gray-50 leading-4'>Browse <br /> All Questions</p>
        </button>
    )
}

export default AllQuestionsBtn;