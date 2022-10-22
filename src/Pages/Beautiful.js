import React, { useState } from "react";
import {useHistory,Link} from 'react-router-dom'
import { UseContext } from "../Contract/Context";
import "./Beautiful.css"
import Logo from "../Images/Logo.png"
import ADV from "../Images/ADV.jpg"
import Job from "../Images/Job.png"
import Prog1 from "../Images/1.jpg"
import Prog2 from "../Images/2.jpg"
import Prog3 from "../Images/3.jpg"

const Beautiful =()=> {

    //Функция перехода на страницу опроса
    const history = useHistory()
    async function  passing(){
        history.push('/Interview')
    }
    return(
        <>
        <body>
        <div className="heder-logo">
        <img className="logo" src={Logo} alt="logo"/>
        <div className="circle-1"/>
        <div className="circle-2"/>
        <div className="circle-3"/>
        <p className="Almoki">Alm<span className="o">o</span>ki</p>
        </div>
        
        <div className="Letter">
            <h1 className="Letter-big">
            <span className="We">Мы</span> делаем 
            <br/>рекламу, чтобы <br/> 
            <span className="You">Вас
            </span> заметили!</h1>

            <h3 className="Letter-small">
                Более 100 успешно <br/>
                проведённых <br/>
                мероприятий
            </h3>

            <button className="button"><strong>Написать нам!</strong></button>
        </div>

        <div className="poster">
            <img className="ADV" src={ADV} alt="ADV"/>
        </div>

        <div className="worker">
            <button className="work-button" onClick={passing}>Хочу быть в команде!</button> 
        </div>
        <img className="Job" src={Job} alt="Job"/>
        </body>
        <hr/>
        <h1 className="Comm">Разработчики</h1>

        <div className="card-1">
            <img className="Prog1" src={Prog1} alt="Prog1"/>
            <p><strong>Алексеенко Екатерина</strong></p>
            <p><strong>Дизайнер</strong></p>
        </div>

        <div className="card-2">
            <img className="Prog2" src={Prog2} alt="Prog2"/>
            <p><strong>Киселева Виктория</strong></p>
            <p><strong>Дизайнер</strong></p>
        </div>

        <div className="card-3">
            <img className="Prog3" src={Prog3} alt="Prog3"/>
            <p><strong>Моргун Сергей</strong></p>
            <p><strong>Frontend разработчик</strong></p>
        </div>


        </>
    )
}
export default Beautiful
