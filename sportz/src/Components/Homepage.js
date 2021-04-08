import React, { useEffect, useState } from "react";
import Card from "../ReuseableComponents/Card"
import "../assests/styles/Components/Homepage.css"
import SporztLogo from "../assests/icons/download.jpg"



export default function Homepage() {
    const [playerData, setPlayerData] = useState([]);
    const [searchQuery, setSearchQuery]=React.useState('')


    const searchSubmit=(event)=>{
        event.preventDefault();
         const regexp = new RegExp(searchQuery, 'i');
        const largeGroup = playerData.filter(data => (regexp.test(data.PFName)));
        setPlayerData(largeGroup)
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




    return (
        <>
            <div id="homepage__header">
                <div id="homepage__headerLogoContainer">
                    <img src={SporztLogo} id="homepage__headingLogo"/>
                    
                    </div>
                <div id="homepage__searchContainer">
                <form onSubmit={searchSubmit}>
                <input id ="homepage__inputField"placeholder="Enter player name" onChange={onTextEnter} onSubmit={searchSubmit}/>
                
                </form>
                </div>
            </div>
        <div id="homepage__mainContainer">

            {playerData.length!=0?playerData.map((item,index)=>{
                return (<Card 
                    playerId={item.Id}
                    playerFirstName={item.PFName}
                    skillDescription={item.SkillDesc}
                    playerValue={item.Value}
                    upcomingMatch={item.UpComingMatchesList}
                />)
            }): <div>
                No results found
                 </div>
        
        
        
        
        }


            
            
        </div>
        </>
    )
}
