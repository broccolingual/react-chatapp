import React, {useState} from "react";
import { TextField } from '@material-ui/core';

import { pushMessage } from "../firebase";

const MessageField = ({inputEl, name, setText, text}) => {
    const [isComposed, setIsComposed] = useState(false);
    console.log({text});

    return (
        <TextField 
            autoFocus
            fullWidth={true} 
            inputRef={inputEl}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
                if (isComposed) return;
                
                if (e.key === "Enter" && text !== ""){
                    pushMessage({name, text})
                    setText("");
                    e.preventDefault();
                }
            }}
            onCompositionStart={() => setIsComposed(true)}
            onCompositionEnd={() => setIsComposed(false)}
            value={text}
        />
    );
};

export default MessageField