import React from 'react';
import './RightSidebar.css';
import Widget from './Widget';
import WidgetTags from './WidgetTags';
const RightSidebar =()=>{
    return(
        <aside className='RightSide-bar'>
            <Widget />
            <WidgetTags />
        </aside>
    )
}
export default RightSidebar;