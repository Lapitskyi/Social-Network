import React from 'react';
import s from './Form.module.css';



let inputs = [
    { id: 'mail', label: " Электронный адрес или номер телефона" },
    { id: 'password', label: " Пароль" },
]


const Input = (props) => {
    return (
        <label className={s.form__label}>
            {props.label}
            <input className={s.form__input} type="text" id={props.id} />
        </label>
    )
};

let inputsArray = inputs.map((input) => <Input label={input.label} id={input.id} />)


const Form = (props) => {
    return (
        <form className={s.form} action="/" method="POST" >
            {inputsArray}
            <button className={s.form__btn} type="submit">Вход</button>
        </form>
    )
};



export default Form;