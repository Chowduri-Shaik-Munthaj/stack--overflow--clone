import React from 'react'
import pen from '../../assets/pen.svg'
import comment from '../../assets/Message.svg'
import blacklogo from '../../assets/blacklogo.png'

const Widget = () =>
{
    return(
      <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
          <div className ='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18'className='icon-p'/>
            <p> Observability is the key to the future of software (and your Devops center)</p>
          </div>
          <div className ='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18'className='icon-p'/>
            <p> Podcast 374: How valuable is your screen name ?</p>
          </div>
        </div>
        <h4>Feautured on Meta</h4>
        <div className='right-sidebar-div-1'>
          <div className ='right-sidebar-div-2'>
            <img src={comment} alt="comment" width='18' className='icon-m1'/>
            <p> Review queue workflows - Final Release</p>
          </div>
          <div className ='right-sidebar-div-2'>
            <img src={comment} alt="comment" width='18' className='icon-m'/>
            <p>Please welcome Valued Associates : #958-V2Blast #959 -SpencerG</p>
          </div>
          <div className ='right-sidebar-div-2'>
            <img src={blacklogo} alt="blacklogo" width='38' className='icon-black'/>
            <p> Outdated Answers: acceptede answer is now unpinned on Stack Overflow</p>
          </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
          <div className ='right-sidebar-div-2'>
            <p className='nums'>38</p>
            <p>Why was this spam flag declined,yet the question marked as spam ?</p>
          </div>
          <div className ='right-sidebar-div-2'>
            <p className='nums'>20</p>
            <p>What is the best course of action when a user has high enough rep to....</p>
          </div>
          <div className ='right-sidebar-div-2'>
            <p className='nums'>14</p>
            <p>is a link to the "How to ask" help page a useful comment?</p>
          </div>
        </div>
      </div>
    )
}
export default Widget;