import React from 'react';
import s from "./Users.module.css"

const Users = (props) => {


    return (<div className={s.inner}>
            {

                props.users.map(users =>
                    <div className={s.items} key={users.id}>
                        <div>
                            <img className={s.img} src={users.photoUrl} alt="foto"/>
                            {users.followed
                                ?<button className={s.btn} onClick={()=>{props.unfollow(users.id)}}>Unfollow</button>
                                :<button className={s.btn} onClick={()=>{props.follow(users.id)}}>Follow</button>
                            }

                        </div>

                        <ul className={s.list}>
                            <li className={s.list__item}>{users.fullname}</li>
                            <li className={s.list__item}>{users.status}</li>
                            <li className={s.list__item}>{users.location.city}</li>
                            <li className={s.list__item}>{users.location.country}</li>
                        </ul>

                    </div>)
            }
        </div>


    )
}

export default Users;