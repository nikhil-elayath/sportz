import React from 'react'
import "../assests/styles/ReuseableComponents/Card.css"
import PositionIcon from "../assests/icons/position.svg"
import Football from "../assests/icons/football.svg"



export default function Card(props) {

    return (
        <div id="card__mainContainer">
            <div id="card__imageContainer"> 

            <img src={
                    require(`../assests/player-images/${"63706"}.jpg`).default}
                    alt={"image"}
                    id="card__playerImage"
                    /> 
            

                </div>
            <div id="card__nameContainer">
               <h2 id="card__playerName">{props.playerFirstName} </h2>

            </div>
            <div id="card__skillAndValueContainer">
            <div id="card__skillContainer">
            <img src={PositionIcon} id="positionIcon"/>
            {props.skillDescription}

            </div>
            <div id="card__nameContainer">
                Value: ${props.playerValue}

            </div>
            </div>
            
            <div id="card__upcomingMatch">
              {props.upcomingMatch.map((item, index)=>{
                  return (<>
                  <div id="card__footballAndText">
                      <div id="card__footballImageContainer">
                  <img src={Football} id="card__footballIcon"/>
                  </div>
                  {item.CCode} vs {item.VsCCode}
                  </div>                  
                  
                  </>)
              })}           

            </div>
            <div id="card__nameContainer">
              Time {props.matchTime}

            </div>
            
        </div>
    )
}
