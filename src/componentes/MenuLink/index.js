import {  NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({children, to}) {
    

    return (
        <NavLink to={to}
            className={({isActive, isPending}) =>
            isPending ? `${styles.link}` : isActive ? `${styles.linkDestacado} ${styles.link}` : `${styles.link}`
        }
        >
            {children}
        </NavLink>
    )
}