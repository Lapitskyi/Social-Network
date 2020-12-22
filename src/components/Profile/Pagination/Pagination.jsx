import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Pagination.module.css"



const PaginationItem = (props) => {

    let path = "/profile/" + props.link;
    return (
        <li className={s.paginationItem}>
            <NavLink to={path} className={s.paginationLink} activeClassName={s.active}  >
                <span>{props.page}</span>
            </NavLink>
        </li>
    )
}

const Pagination = (props) => {
    return (
        <div className={s.pagination}>
            <ul className={s.paginationList}>

                <PaginationItem page="prev" link="prev" />
                <PaginationItem page="1" link="page1" />
                <PaginationItem page="2" link="page2" />
                <PaginationItem page="next" link="next" />


            </ul>
        </div>
    )
}


export default Pagination;