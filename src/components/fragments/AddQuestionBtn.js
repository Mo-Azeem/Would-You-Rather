
function AddQuestionBtn(props) {
    return (
        <button className="add-question-btn flex flex-col justify-center items-center bg-red-500 h-32 w-52 gap-y-2 rounded-md hover:bg-red-400">
            <p className='text-gray-50 font-extrabold text-4xl tracking-tighter'>?+</p>
            <p className='font-bold tracking-tight text-gray-50 leading-4'>Add Questions</p>
        </button>
    )
}

export default AddQuestionBtn;