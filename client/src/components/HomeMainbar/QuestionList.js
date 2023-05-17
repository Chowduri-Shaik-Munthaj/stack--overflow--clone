import React from 'react';
import Questions from './Questions';
const QuestionList = ({questionslist}) =>{
    return(
        <>
        {
            questionslist.map((question) => (
                <Questions question={question} key={question.id} />
            ))
        }
        </>
    )

}
export default QuestionList