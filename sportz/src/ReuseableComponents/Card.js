// Accepts the following props
// playerId, playerFirstName, skillDescription, playerValue, upcomingMatch


import React from 'react'
import "../assests/styles/ReuseableComponents/Card.css"
import PositionIcon from "../assests/icons/position.svg"
import Football from "../assests/icons/football.svg"
import Clock from "../assests/icons/clock.svg"



export default function Card(props) {

    return (
        <div id="card__mainContainer">
            <div id="card__imageContainer"> 
        {/* as there are not images present for certain player id it throws an error */}
        {/* ran out of time so hardcoded for now */}
            <img src={
                    require(`../assests/player-images/${"63706"}.jpg`).default}
                    alt={"image not available"}
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
            <div id="card__upcomingMatch">
              {props.upcomingMatch.map((item, index)=>{
                  return (<>
                <div id="card__upcomingMatchContainer">
                    <div>
                    <img src={Clock} id="card__clockImage"/>
                    </div>
                    <div id="card__time">
                      {item.MDate}
                      </div>
                      </div>
                                  
                  
                  </>)
              })}           

            </div>      
            
        </div>
    )
}
