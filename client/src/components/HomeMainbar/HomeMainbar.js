import React from "react";
import {useLocation,useNavigate} from 'react-router-dom';
import QuestionList from "./QuestionList";
import './HomeMainbar.css'
import './Questions.js'
const HomeMainbar=()=>{
    const user = 1;
    const  navigate = useNavigate();
    var questionslist=[{
        _id:1,
        upVotes:3,
        downVotes:2,
        votes:3,
        noOfAnswers:2,
        questionTitle:"What is a function",
        questionBody:"I want to be",
        questionTags:["java","node js","react js","monogodb"],
        userPosted:"mano",
        userId:1,
        askedOn:"jan 1",
        answe:[{
            answerBody:"Answer",
            userAnswered:'kumar',
            answeredOn:"jan2",
            userId:2,
        }]
    },
    {
        _id:2,
        upVotes:3,
        downVotes:2,
        votes:1,
        noOfAnswers:0,
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
        _id:3,
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
    const location =useLocation();
    const checkAuth=()=>{
        if(user === null){
            alert("login or signup to ask a question")
            navigate('/Auth')
        }
        else{
            navigate('/AskQuestion')
        }
    }
    return(
        <div className="main-bar">
            <div className="main-bar-header">
                {
                    location.pathname ==="/" ? (<h1>Top Questions</h1>) : (<h1>All Questions</h1>)
                }
                <button onClick={checkAuth} className="ask-btn">Ask Question</button>
            </div>
            
            <div>
                {
                    questionslist === null ?
                    <h1>Loading ....</h1> :
                    <>
                    <p> {questionslist.length} questions </p>
                    < QuestionList questionslist={questionslist}/>
                    </>
                }
            </div>

        </div>
    )
}
export default HomeMainbar;