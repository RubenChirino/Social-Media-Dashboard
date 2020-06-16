import React from "react";
import CardSmall from "./cards-small";
import '../styles/overview.css'

const cardsSmallData = [
    {   
        id: 1,
        icon: 'images/icon-facebook.svg',
        views: '87',
        growth: 3
    },
    {
        id: 2,
        icon: 'images/icon-twitter.svg',
        views: '2',
        growth: 1
    },
    {
        id: 3,
        icon: 'images/icon-instagram.svg',
        views: '100',
        growth: 10
    },
    {
        id: 4,
        icon: 'images/icon-youtube.svg',
        views: '25',
        growth: 3
    }
]

export default function Overview(){

     return(
        <section className="overview">
            <div className="wrapper">
                <h2>Overview - Today</h2>
                <div className="grid">        

                {
                    cardsSmallData.map((card) => <CardSmall key={card.id} {...card} />
                    )
                }

                </div>
            </div>
      </section>
     );

}