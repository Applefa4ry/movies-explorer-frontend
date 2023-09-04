import React from "react";
import Pass from "../../images/Pass.svg";
import Fail from "../../images/Fail.svg";
import './InfoToolTip.css'

function InfoToolTip(props){
  
  return (
    <div className={`popup ${props.isOpen?"popup_opened":"" }`}> 
      <div className={`popup__container popup__sign-container`}>
        <img className="popup__sign-picture" src={props.setIsPass?Pass:Fail} alt={props.setIsPass?"Pass":"Fail"} />
        <h2 className="popup__title">{props.setIsPass?"Всё прошло успешно!":"Что-то пошло не так!\nПопробуйте ещё раз."}</h2>
      </div>
      <button onClick={props.onClose} type="button" className="popup__close"></button>
    </div>
  )
}

export default InfoToolTip;