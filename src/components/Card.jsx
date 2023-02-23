import React from "react";

function Card (props) {
    const {name, age, isPremium, country} = props.client;
    const premium = isPremium ? 'Yes' : 'No';
    let greet = "";
    if(country === 'en'){
        greet = 'Hello'
    } else if (country === 'de'){
        greet = "Hallo"
    } else if (country === 'fr'){
        greet = "Bonjour"
    } else if (country === 'es'){
        greet = 'Hola'
    }

    console.log(greet)

    return (
        <div className="card">
        <h4>{greet} {name}</h4> 
        <h4>{age}</h4>
        <h4>{premium}</h4>
        
    </div>
    )
}


export default Card;