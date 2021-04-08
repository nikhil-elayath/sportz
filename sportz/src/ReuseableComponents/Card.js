import React from 'react'
import "../assests/styles/ReuseableComponents/Card.css"


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
                Player Name: {props.playerFirstName}

            </div>
            <div id="card__nameContainer">
                Skills: {props.skillDescription}

            </div>
            <div id="card__nameContainer">
                Value: {props.playerValue}

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
