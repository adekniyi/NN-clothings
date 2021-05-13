import React,{useState, useEffect} from 'react'
import './directory.styles.scss';
import MenuItem from '../Menu-Item/menuItem.component';
import {data} from '../../Data'

export default function Directory() {

    const [sections, setsections] = useState(data);

        return (
            <div className="directory-menu">
                {
                    sections.map(({id, ...otherSectionProp}) =>(
                        <MenuItem key={id} {...otherSectionProp}/>
                    ))
                }
            </div>
        )
}
