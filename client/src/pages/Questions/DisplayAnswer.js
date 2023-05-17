import React from 'react';
import {Link} from 'react-router-dom'
import QuestionsDetails from './QuestionsDetails'
import Avatar from '../../components/Avatar/Avatar'
const DisplayAnswer = ({question}) =>{
    return(
     <div>
        {
            question.answer.map((ans) => (
              <div className='display-ans' key={ans._id}>
                <p>{ans.answerBody}</p>
                <div className='question-action-user'>
                    <div>
                        <button type="button">Share</button>
                       <button type="button">Delete</button>
                    </div>
                    <div>
                        <p> answered {ans.answeredOn}</p>
                        <Link to={'/Users/$ans.userId'} className='user-link' style={{color:'#0086d8'}}> 
                            <button className='userid'>{ans.userAnswered.charAt(0).toUpperCase()}</button>
                            <div className='user-name'>{ans.userAnswered}</div>
                        </Link>
                    </div>
                </div>
             </div>
            )

         )     
        }
     </div>
    )
}
export default DisplayAnswer;