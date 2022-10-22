import React, { useState } from "react";
import {useHistory,Link} from 'react-router-dom'
import { UseContext } from "../Contract/Context";
import Logo from "../Images/Logo.png";
import "./Interview.css"

const Interview =()=> {
    return(
            <div className="body">
                <div className="form">
                <p className="Text">Alm<span className="o">o</span>ki</p>
                <h1>Опрос</h1>
                <div className="form-control">
                    <label>
                        Имя
                    </label><br/>
                    <input placeholder="Введите ваше имя"/>
                </div>
                
                <div className="form-control">
                <label>
                    Почта
                    </label><br/>
                    <input placeholder="Вветиде вашу почту"/>
                </div>

                <div className="form-control">
                    <label>
                        Возраст
                    </label><br/>
                    <input placeholder="Введите ваш возраст"/>
                </div>

                <div className="form-control">
                    <label>
                        Какой статус лучше всего описывает вас?
                    </label><br/>
                    <select>
                        <option>
                            Студент
                        </option>
                        <option>
                            Безработный
                        </option>
                        <option>
                            Работающий
                        </option>
                    </select>
                </div><br/>

                <div className="form-control">
                    <label>
                        Вы знаете о программе Фигма или Тильда?
                    </label><br/>
                    <label>
                    <input type="checkbox"></input> Да <br/>
                    </label>
                    <label>
                    <input type="checkbox"></input> Нет <br/>
                    </label>
                </div>

                <div className="form-control">
                    <label>
                        Какая социальная сеть лучше подходит для рекламного агенства? <br/>
                    </label>
                    <label>
                        <input type="checkbox"></input> VK <br/>
                    </label>
                    <label>
                        <input type="checkbox"></input> Telegram <br/>
                    </label>
                    <label>
                        <input type="checkbox"></input> WhatsApp <br/>
                    </label>
                    <label>
                        <input type="checkbox"></input> Facebook <br/>
                    </label>
                </div>

                <div className="form-control">
                    <label>
                        Работаете ли вы с API Яндекс.Директа / Google Ads? <br/>
                    </label>
                    <lable>
                        <input type="checkbox"></input> Да <br/>
                    </lable>
                    <label>
                        <input type="checkbox"></input> Нет <br/>
                    </label>
                </div>

                <div className="form-control">
                    <label>
                        Где и кем вы видите себя через 5 лет? <br/>
                    </label>
                    <textarea 
                    className="answer-text">
                    </textarea>
                </div>

                <div className="form-control">
                    <label>
                        В чем ваши сильные стороны? <br/>
                    </label>
                    <textarea 
                    className="answer-text">
                    </textarea>
                </div>

                <div className="form-control">
                    <label>
                        В чем ваши слабые стороны? <br/>
                    </label>
                    <textarea 
                    className="answer-text">
                    </textarea>
                </div>

                <button className="submit">Отправить</button>
                </div>
            </div>
    )
}
export default Interview