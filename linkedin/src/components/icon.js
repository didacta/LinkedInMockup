import React from 'react';
import './icon.css'

const Icon = (props) => {
  return (<li><img className="Icon" src={props.source}alt={props.alt}/>
</li>)
};
export default Icon;