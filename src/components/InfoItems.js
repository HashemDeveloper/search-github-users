import React from 'react';

const InfoItems = (props) => {
    const { icon, label, value, color } = props;
    return (
       <article className="item">
           <span className={color}>{icon}</span>
           <div>
               <h3>{value}</h3>
               <p>{label}</p>
           </div>
       </article>
    )
};

export default InfoItems;