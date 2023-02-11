import React from "react";
import Dictionary from "../Dictionary";
import emojipedia from "../emojipedia";

// emojidata is imported from emojipedia.js
// where emojidata is a single js obejct either id or name or meaning
function create(emojiData)
{

    return(

        <Dictionary 
        key = {emojiData.id}
        emoji = {emojiData.emoji}
        name = {emojiData.name}
        meaning = {emojiData.meaning}        
        />

        // these are all the props now which will be called below using map function

    )
}



function Entry ()
{
    return(

        <div>
        <dl className="dictionary">

            {emojipedia.map(create)}
       {/* <Dictionary
       />
       <Dictionary
       />
       <Dictionary
       /> */}


      </dl>
    </div>
    )
}

export default Entry;