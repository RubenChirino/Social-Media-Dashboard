import React from "react";
import "../styles/top-cards-list.css";
import '../styles/top-cards-list.css';
import Card  from "./cards";

const cardsData = [
    {   
        id: 1,
        username: '@RubenChirinos',
        followerds: '2048',
        todayFollower: 2,
        icon: 'images/icon-facebook.svg',
        red: 'facebook'
    },
    {
        id: 2,
        username: '@RubenChirino',
        followerds: '0',
        todayFollower: 0,
        icon: 'images/icon-twitter.svg',
        red: 'twitter'
    },
    {   id: 3,
        username: '@RubenChirinog',
        followerds: '1398',
        todayFollower: 5,
        icon: 'images/icon-instagram.svg',
        red: 'instagram'
    },
    {
        id: 4,
        username: '@RubenChirino',
        followerds: '5',
        todayFollower: 1,
        icon: 'images/icon-youtube.svg',
        red: 'youtube'
    }
]

export default function TopCardList(){

    return(
    <section className="top-cards">
        <div className="wrapper">
            <div className="grid">
                
            {
                cardsData.map((card) =>
                    <Card key={card.id} {...card} /> 
                )
            }
  
            </div>
        </div>
  </section>
    );

}

/* 



                <article className="card instagram">
                <p className="card-title">
                    <img src="images/icon-instagram.svg" alt="" />
                    @LeonidasEsteban
                </p>
                <p className="card-followers">
                    <span className="card-followers-number">6k</span>
                    <span className="card-followers-title">Followers</span>
                </p>
                <p className="card-today">
                    <img src="images/icon-up.svg" alt="" />
                    12 Today
                </p>
                </article>
                
                <article className="card youtube">
                <p className="card-title">
                    <img src="images/icon-youtube.svg" alt="" />
                    @LeonidasEsteban
                </p>
                <p className="card-followers">
                    <span className="card-followers-number">12k</span>
                    <span className="card-followers-title">Followers</span>
                </p>
                <p className="card-today">
                    <img src="images/icon-up.svg" alt="" />
                    12 Today
                </p>
                </article>   

*/