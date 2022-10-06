import styles from './cards.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';


const Cards = () => {
    const [comics, setComics] = useState([])
    const filas = (comic) => {
        console.log(comic)
        return (
            <div className={styles.cardsContainer}>
                <img src={comic.picture} className={styles.picture} alt="description of image"></img>
                <div className={styles.comicDetails}>
                    <p>{comic.title}</p>
                    <p>{comic.description}</p>
                    <p>Price: 
                        {comic.price}</p>
                </div>
            </div>
        )
    }
    useEffect(
        ()=>{getComics()}
        ,[comics]
        )
    async function getComics() {
        try {
            const response = await axios.get(
                'https://inove-marvel-backend.herokuapp.com/ecommerce/comics/get', {
                headers: {
                    "X-Api-Key": "qAfJeAlP.yEfX551phd52P36aF5OJHmPbyzlOOIsl",
                }
            })
            setComics(response.data)
            console.table(comics)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.caja} onClick={getComics}>
            {comics.map((comic) => filas(comic))}
        </div>
    )

}

export default Cards;
