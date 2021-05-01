import React from "react";
import "./Header.css";
import './SearchAPI.js';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"; 
import { useState } from 'react'
//import { Link } from "react-router-dom";
 


function Header() {
  //var PName = "";
  const [searchText, setsearchText] = useState('');



  const handleSubmit = e => {
     e.preventDefault();    
     console.log(searchText);
     //PName = searchText;
     SearchAPI(searchText);
    console.log("rjedsmkl");
    };

  return (
    <div className="header">
      
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/tesla_logo/tesla_logo_PNG21.png" alt="Tesla"
        />
      

      <div className="header__search">
        
       <input className="header__searchInput" type="text" value={searchText} onChange={e => setsearchText(e.target.value)}/>
        <button type='submit' onClick={handleSubmit} className='searchButton'><SearchIcon className="header__searchIcon" /></button>  
        
      </div>

      <div className="header__nav">
        
          <div  className="header__option">
            <span className="header__optionLineTwo">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        

        
          <div className="header__option">
            <span className="header__optionLineTwo">My</span>
            <span className="header__optionLineTwo">Account</span>
          </div>
       
        

        <div className="header__option">
          <span className="header__optionLineTwo">My</span>
          <span className="header__optionLineTwo">Wallet</span>
        </div>

       
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              0
            </span>
          </div>
        
      </div>
    </div>
  );
}

function SearchAPI(PName){
    
  const http = require("https");
  
  console.log("searchapi");
  
  // PName= "mobile";
  
  var PATH = "/search?keywords=%3Capple%3E&marketplace=ES";
  const options = {
    "method": "GET",
    "hostname": "amazon-price1.p.rapidapi.com",
    "port": null,
    "path": PATH,
    "headers": {
      "x-rapidapi-key": "b14b9e8d80msh838de2b100c7723p1740d5jsnf6fdfa99ccf6",
      "x-rapidapi-host": "amazon-price1.p.rapidapi.com",
      "useQueryString": true
    
  }
  
  const req = http.request(options, function (res) {
    const chunks = [];
  
    res.on("data", function (chunk) {
      chunks.push(chunk);
    });
  
    res.on("end", function () {
      const body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });
  
  req.end();
  
  }
  
    }

export default Header;
