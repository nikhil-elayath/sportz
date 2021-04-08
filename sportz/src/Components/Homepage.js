import React, { useEffect, useState } from "react";
import Card from "../ReuseableComponents/Card"
import "../assests/styles/Components/Homepage.css"


export default function Homepage() {
    const [playerData, setPlayerData] = useState([]);
    const [searchQuery, setSearchQuery]=React.useState('')


    const searchSubmit=(event)=>{
        console.log("searchQuery", searchQuery)
        event.preventDefault();
        const largeGroup = playerData.filter(data => (data.PFName === searchQuery));
        console.log("largeGroup",largeGroup)




    }
    const onTextEnter=(enteredText)=>{
        console.log(enteredText.target.value)
        setSearchQuery(enteredText.target.value)
    }

    useEffect(()=>{
        fetch('https://api.npoint.io/20c1afef1661881ddc9c')
        .then(response => response.json())
  .then(data => setPlayerData(data.playerList));
    },[])
    console.log("after",playerData)




    return (
        <div id="homepage__mainContainer">
            <div>
                <form onSubmit={searchSubmit}>
                <input placeholder="Enter player name" onChange={onTextEnter} onSubmit={searchSubmit}/>
                search
                </form>
            </div>

            {playerData.length!==0&&playerData.map((item,index)=>{
                return (<Card 
                    playerId={item.Id}
                    playerFirstName={item.PFName}
                    skillDescription={item.SkillDesc}
                    playerValue={item.Value}
                    upcomingMatch={item.UpComingMatchesList}
                />)
            })}

            
            
        </div>
    )
}
