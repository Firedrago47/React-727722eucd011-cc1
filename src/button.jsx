import React from "react";

function ClickMe() {
    alert('Vanagam da Mapla!')
}

export default function button()
{
    return(
        <button onClick={ClickMe}>ClickMe</button>
    )
}