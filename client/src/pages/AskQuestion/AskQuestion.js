import React from 'react'
import './AskQuestion.css'
const AskQuestion =()=>{
    return(
        <div className='ask-question'>
            <div className='ask-ques-container'>
                <h1>Ask a Pubblic Question</h1>
                <form>
                    <div className='ask-form-container'>
                        <label htmlFor="ask-ques-title">
                            <h2>Title</h2>
                            <p>
                                Be specific and imagine you're asking a question to another person
                            </p>
                            <input type="text" id='ask-ques-title' placeholder="e.g.Is there an R function for finding the index of an element in a vector ?"></input>
                        </label>
                        <label htmlFor="ask-ques-body">
                            <h2>Body</h2>
                            <p>Include all the information someone would need to answer your qestion</p>
                            <textarea name="" id="ask-ques-body" cols="80" rows="10"></textarea>
                        </label>
                        <label htmlFor='ask-ques-tags'>
                            <h2>Tags</h2>
                            <p>Add up to 5 tags to descrie what your question is about</p>
                            <input type="text" id="ask-ques-tags" placeholder="e.g.(xml typescript wordpress)"/>
                        </label>
                    </div>
                    <input type="submit" value="Review your question" className="review-btn"/>
                </form>
            </div>
        </div>
    )
}
export default AskQuestion;