import React from 'react'
import "../assests/styles/ReuseableComponents/Card.css"
import PositionIcon from "../assests/icons/position.svg"


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
            
            <div id="card__nameContainer">
              Upcoming Match 

              {props.upcomingMatch.map((item, index)=>{
                  return (<><p>{item.CCode}</p> 
                  vs <p>{item.VsCCode}</p> 
                  <div id="card__nameContainer">
              Time {item.MDate}

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
