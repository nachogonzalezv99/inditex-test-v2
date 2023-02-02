import React from 'react';
import { HiChevronRight } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

export function Breadcrumbs() {
    const location = useLocation();

    const isLastBreadcrumb = (index, array) => array.length - 1 === index
    const isFirstItem = (index) => index === 0

    const calculateUrl = (index, array) => {
        return array.slice(0, index + 1).join("/")
    }

    return (
        <div className={styles.breadcrumbs}>

            {location.pathname.split('/').map((item, index, array) => {
                if (location.pathname === '/') {
                    return <p key={index} className={styles.breadcrumbs__active}>{isFirstItem(index) ? 'All products' : item}</p>
                } else if (!isLastBreadcrumb(index, array)) {
                    return <React.Fragment key={index}>
                        <Link to={calculateUrl(index, array)}>{isFirstItem(index) ? 'All products' : item}</Link>
                        <HiChevronRight className={styles.breadcrumbs__icon} />
                    </React.Fragment>
                } else {
                    return <p key={index} className={styles.breadcrumbs__active}> {isFirstItem(index) ? 'All products' : item}</p>
                }
            })}


        </div >

    )
}