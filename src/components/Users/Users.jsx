import React from 'react';
import s from "./Users.module.css"
import * as axios from "axios";
import userPhoto from "../../assets/images/userPhoto.svg"


const Users = (props) => {

    if(props.users.length===0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
            props.setUsers(response.data.items)
        });
    }


    return (<div className={s.inner}>

            {
                props.users.map(u =>
                    <div className={s.items} key={u.id}>
                        <div>
                            <img className={s.img} src={u.photos.small!=null ? u.photos.small : userPhoto} alt=""/>
                            { u.followed
                                ? <button className={s.btn} onClick={()=>{props.unfollov(u.id)}}>Unfollow</button>
                                : <button className={s.btn} onClick={()=>{props.follov(u.id)}}>Follow</button>
                            }
                        </div>

                        <ul className={s.list}>
                            <li className={s.list__item}>{u.name}</li>
                            <li className={s.list__item}>{u.status}</li>
                            <li className={s.list__item}>{"u.location.city"}</li>
                            <li className={s.list__item}>{"u.location.country"}</li>
                        </ul>

                    </div>)
            }
        </div>


    )
}

export default Users;