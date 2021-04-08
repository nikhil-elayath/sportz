import React, { useEffect, useState } from "react";
import Card from "../ReuseableComponents/Card"
import "../assests/styles/Components/Homepage.css"
import SporztLogo from "../assests/icons/download.jpg"



export default function Homepage() {

    const [playerData, setPlayerData] = useState([]);
    const [searchQuery, setSearchQuery]=React.useState('')


    //function is called when form is submitted
    const searchSubmit=(event)=>{
        // to prevent refreshing of the page
        event.preventDefault();
        // filter through the data and matching the player name with the entered search query
         const regexp = new RegExp(searchQuery, 'i');
        const largeGroup = playerData.filter(data => (regexp.test(data.PFName || data.TName)));
        // setting the data with updated search data
        setPlayerData(largeGroup)
    }

    // called whenever user enters a text
    // @param-> text->string
    // sets the state with the enterd text
    const onTextEnter=(enteredText)=>{
        setSearchQuery(enteredText.target.value)
    }
// calling the api as sson as page is laoded
// storing it in the state
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
            {/* mapping the data and calling card component and passing the necessary props */}

            {playerData.length!=0?playerData.slice(0).reverse().map((item,index)=>{
                return (<Card 
                    playerId={item.Id}
                    playerFirstName={item.PFName}
                    skillDescription={item.SkillDesc}
                    playerValue={item.Value}
                    upcomingMatch={item.UpComingMatchesList}
                />)
            }):
            // If there is no data present showing message
             <div>
                No results found
                 </div>
        
        
        
        
        }


            
            
        </div>
        </>
    )
}
