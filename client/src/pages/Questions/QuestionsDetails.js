import React from 'react'
import {Link} from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar';
import { useParams } from 'react-router-dom';
import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import './Questions.css'
import DisplayAnswer from './DisplayAnswer';
const QuestionsDetails=()=>{
    const { id }=useParams();
    console.log(id);
    var questionslist=[{
        _id:'1',
        upVotes:3,
        downVotes:2,
        noOfAnswers:2,
        questionTitle:"What is a function",
        questionBody:"I want to be",
        questionTags:["java","node js","react js","monogodb"],
        userPosted:"mano",
        userId:1,
        askedOn:"jan 1",
        answer:[{
            answerBody:"Answer",
            userAnswered:'kumar',
            answeredOn:"jan2",
            userId:2,
        }]
    },
    {
        _id:'2',
        upVotes:3,
        downVotes:2,
        votes:1,
        noOfAnswers:2,
        questionTitle:"What is a function",
        questionBody:"I want to be",
        questionTags:["javascript","R","python"],
        userPosted:"mano",
        askedOn:"jan 1",
        userId:1,
        answer:[{
            answerBody:"Answer",
            userAnswered:'kumar',
            answeredOn:"jan2",
            userId:2,
        }]
    },
    {
        _id:'3',
        upVotes:3,
        downVotes:2,
        votes:3,
        noOfAnswers:2,
        questionTitle:"What is a function",
        questionBody:"I want to be",
        questionTags:["javascript","R","python"],
        userPosted:"mano",
        askedOn:"jan 1",
        userId:1,
        answer:[{
            answerBody:"Answer",
            userAnswered:'kumar',
            answeredOn:"jan2",
            userId:2,
        }]
    }]
    return(
        <div className='question-details-page'>
         {
            questionslist === null ?(
            <h1>Loading...</h1>):(
            <>{
                questionslist.filter(question => question._id === id).map(question=>(
                    <div key={question._id}>
                        <section className="question-details-container">
                            <h1>{question.questionTitle}</h1>
                            <div className='question-details-container-2'>
                                <div className='question-votes'>
                                   <img src={upvote} alt="" width="18" className="votes-icon"  />
                                   <p>{question.upVotes - question.downVotes}</p>
                                   <img src={downvote} alt="" width="18" className="votes-icon"  />
                                </div>
                                <div style={{width:"100%"}}>
                                    <p className='question-body'>{question.questionBody}</p>
                                    <div className="question-details-tags">
                                        {question.questionTags.map((tag)=><p key={tag}>{tag}</p>)}
                                    </div>
                                    <div className='question-action-user'>
                                        <div>
                                            <button type="button">Share</button>
                                            <button type="button">Delete</button>
                                        </div>
                                        <div className='p-tag'>
                                            <p>asked {question.askedOn}</p>
                                            <Link to={'/Users/$(question.userId)'} className='user-link' style={{color:'#0086d8'}}> 
                                               <button className='user' style={{textDecorationColor:"white"}}>{question.userPosted.charAt(0).toUpperCase()}</button>
                                               <div className='user-name'> {question.userPosted}</div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div>{question.noOfAnswers !== 0 && (
                         <section>
                          <h3>Answers {question.noOfAnswers} </h3>
                            <DisplayAnswer key={question._id} question={question} />
                         </section>
                        )}
                        </div>
                        <section className='post-ans-container'>
                            <h3>Your Answers</h3>
                            <form action="">
                                <textarea name="" id="" rows="15" cols="150"></textarea><br />
                                <input type="submit" className='post-ans-btn'value='Post Your Answer'/>
                            </form>
                            <p>
                                Browse other question tagged
                                {
                                    question.questionTags.map((tag)=>(
                                        <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                    )) 
                                } or  
                                <Link to='/AskQuestion' style={{textDecoration :"none", color:"#009dff"}}> ask your own question</Link>
                            </p>
                        </section>
                    </div>
                ))
            }
            </>
        ) }
        </div>
    )
}
export default QuestionsDetails;