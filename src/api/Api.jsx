import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

const Api = (props) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.location}&units=metric&appid=6f4d9c29a7d5640079237e06f218211c`;
    
    useEffect(() => {
            axios
                .get(url)
                .then((res) => {  
                    props.setData(res.data);
                    console.log(res.data);
                })

                .catch((Error) => {
                    console.log(Error);
                    props.setData({Error:"There is no such city in the database or maybe something went wrong, please try again!"})
                }) },[props.location])        
    // };
    // return (
    //     <h3>this h from api </h3>
    // )
}
export default Api;