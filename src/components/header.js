import React from 'react';
import "../styles/header.css";

export default function Header({ children }){
  
    return(  
    <header className="header">
        <div className="wrapper">
            <div className="header-grid">        
                <div>
                    <h1>Social Media Dashboard</h1>
                    <p className="header-total">Total Followers: 3.451</p>
                </div>
                {children}
            </div>
        </div>
    </header>
    );
     
}