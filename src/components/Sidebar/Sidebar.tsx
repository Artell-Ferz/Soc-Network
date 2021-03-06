import React from "react";
import styles from './Sidebar.module.css'
import {NavLink} from 'react-router-dom';

const Sidebar = (props:any) => {
    return (
        <nav className={styles.sidebar}>
            <div className={styles.item}><NavLink to={'/profile'} activeClassName ={styles.activeLink}>Profile</NavLink></div>
            <div className={styles.item}><NavLink to={'/dialogs'} activeClassName ={styles.activeLink}>Messages</NavLink></div>
            <div className={styles.item}><NavLink to={'/news'} activeClassName ={styles.activeLink}>News</NavLink></div>
            <div className={styles.item}><NavLink to={'/music'} activeClassName ={styles.activeLink}>Music</NavLink></div>
            <div className={styles.item}><NavLink to={'/settings'} activeClassName ={styles.activeLink}>Settings</NavLink></div>
        </nav>
    )
}

export default Sidebar