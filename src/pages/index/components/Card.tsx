import styles from './Card.module.scss'

function Card() {
    const openDialog = () => {
        console.log('open dialog')
    }

    return (
        <div className={styles.card} onClick={openDialog}>
            <img src="" className={styles.card__image} />
        </div>
    )
}

export default Card