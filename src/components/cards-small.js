import React from "react";
import '../styles/cards-small.css';

export default function CardSmall({ icon, views, growth }){

    return(
        <div className="card-small">
            <p className="card-small-views">Page Views</p>
            <p className="card-small-icon">
            <img src={icon} alt="" />
            </p>
            <p className="card-small-number">{views}</p>
            <p className="card-small-percentage">
            <span>
                <img src="images/icon-up.svg" alt="" />
                {growth}%
            </span>
            </p>
        </div>
    );

}