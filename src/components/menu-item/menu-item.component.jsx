import React from 'react';
// use this when exporting to allow access to history
import { withRouter } from 'react-router-dom';

//sass style sheet
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div 
            className='background-image' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

//export using withRouter();
// now that it is wrapped in withRouter, we have access to history
// pass it in as a prop above ^
export default withRouter(MenuItem);