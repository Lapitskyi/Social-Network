import React from 'react';
import s from "./Users.module.css"

import userPhoto from "../../assets/images/userPhoto.svg"
import {NavLink} from "react-router-dom";

import {followAPI} from "../../API/api";
import {toggleProgressIsFollow} from "../../redux/users-reducer";


const Users = (props) => {

    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <>
            <ul className={s.list__pagination}>
                {pages.map((page) => {
                    return (
                        <li className={(props.currentPage === page && s.active) || s.list__paginationItem}

                            key={page.id}
                            onClick={(e) => {
                                props.onPageChanged(page);
                            }}>
                            {page}
                        </li>
                    )
                })}

            </ul>

            <div className={s.inner}>
                {
                    props.users.map(u =>
                        <div className={s.items} key={u.id}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={s.img} src={u.photos.small != null ? u.photos.small : userPhoto}
                                         alt=""/>
                                </NavLink>
                                {u.followed
                                    ? <button disabled={props.isFollow.some(id=>id===u.id)} className={s.btn} onClick={() => {
                                        props.toggleProgressIsFollow(true,u.id)
                                        followAPI.deleteFollow(u.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollov(u.id)
                                                }
                                                props.toggleProgressIsFollow(false,u.id)
                                            });
                                    }}>Unfollow</button>

                                    : <button disabled={props.isFollow.some(id=>id===u.id)} className={s.btn} onClick={() => {
                                        props.toggleProgressIsFollow(true,u.id)
                                        followAPI.postFollow(u.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.follov(u.id)
                                                }
                                                props.toggleProgressIsFollow(false,u.id)
                                            });
                                    }}>Follow</button>
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
        </>

    )

}


export default Users;