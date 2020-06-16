import React, { useRef, useEffect, useState } from "react";
import '../styles/switch.css'
 
export default function Switch(){

    const ref = useRef(null);

    const [checked, setChecked] = useState(false);

    function handleChange(){

        setChecked(ref.current.checked)

        if(ref.current.checked){
            document.body.classList.remove('is-light-mode')
            document.body.classList.add('is-dark-mode')
        }else{
            document.body.classList.remove('is-dark-mode')
            document.body.classList.add('is-light-mode')
        }

    }

    function changeMedia(mq){
            
        setChecked(mq.matches)

        if(mq.matches){
            document.body.classList.remove('is-light-mode')
            document.body.classList.add('is-dark-mode')
        }else{
            document.body.classList.remove('is-dark-mode')
            document.body.classList.add('is-light-mode')
        }
    }

    useEffect(function(){

       const mq = window.matchMedia('(prefers-color-scheme: dark)')

       mq.addListener(changeMedia)

       if (mq.matches) {
            setChecked(true);
        } 

    }, []);

    return(
        <div className="dark-mode" >
            <p className="dark-mode-title">Dark Mode</p>
            <input ref={ref} onChange={handleChange} type="checkbox" checked={checked} className="checkbox" id="checkbox" />
            <label className="switch" htmlFor="checkbox"></label>
        </div>
    );

}