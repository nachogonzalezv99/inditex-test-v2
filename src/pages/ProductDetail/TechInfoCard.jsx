import styles from './Accordion.module.scss'

export function TechInfoCard({ icon, title, subtitle }) {
    return (
        <div className={styles.accordion__description}>
            <div className={styles.accordion__icon} >
                {icon}
            </div>

            <p className={styles.accordion__key}>{title}</p>
            <p className={styles.accordion__value}>{subtitle}</p>
        </div>
    )
}