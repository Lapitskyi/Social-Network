import React from 'react';
import s from "./Users.module.css"
import * as axios from "axios";
import userPhoto from "../../assets/images/userPhoto.svg"
import {NavLink} from "react-router-dom";


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setUserTotalCount(response.data.totalCount)
        });
    }

    onPageChanged =(pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        return (
            <>
                <ul className={s.list__pagination}>
                    {pages.map((page) => {
                        return (
                            <li className={ this.props.currentPage === page && s.active || s.list__paginationItem }

                                key={page.id}
                                onClick={(e) => {this.onPageChanged(page);}}>
                                {page}
                            </li>
                        )
                    })}


                </ul>

                <div className={s.inner}>
                    {
                        this.props.users.map(u =>
                            <div className={s.items} key={u.id}>
                                <div>
                                    <img className={s.img} src={u.photos.small != null ? u.photos.small : userPhoto}
                                         alt=""/>
                                    {u.followed
                                        ? <button className={s.btn} onClick={() => {
                                            this.props.unfollov(u.id)
                                        }}>Unfollow</button>
                                        : <button className={s.btn} onClick={() => {
                                            this.props.follov(u.id)
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
}


export default Users;