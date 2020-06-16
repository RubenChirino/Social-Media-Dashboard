import React from "react";
import '../styles/cards.css'

export default function Card({ username, followerds, todayFollower, icon, red}){

    return(
    <article className={`card ${red}`}>
        <p className="card-title">
            <img src={icon} alt="" />
            {username}
        </p>
        <p className="card-followers">
            <span className="card-followers-number">{followerds}</span>
            <span className="card-followers-title">Followers</span>
        </p>
        <p className="card-today">
            <img src="images/icon-up.svg" alt="" />
           {todayFollower}
        </p>
    </article>
    );

}