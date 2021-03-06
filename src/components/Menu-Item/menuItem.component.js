import React from 'react'
import './menuitem.styles.scss'
import {withRouter} from 'react-router-dom'

const MenuItem = ({title,imageUrl, history,size, linkUrl, match})=> {
    return (
        <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image"  style = {{backgroundImage: `url(${imageUrl})`}} />
            <div className="content">
                <h2 className="title">{title.toUpperCase()}</h2>
                <span className="subtitle">Shop now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);