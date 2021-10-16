import {useState, useEffect} from 'react'
import Axios from 'axios'

export default function GetCards( page) {
    
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [cards, setCards] = useState([])
    const [hasMore, setHasMore] = useState(true)

    // useEffect(() => {
    //     setCards([])
    // }, [query])

    useEffect(() => {
        async function getData() {
            setLoading(true)
            setError(false)
            for(let i = 1; i <= 10 && hasMore; i++) {
                await Axios.get(`https://bandori.party/api/cards/?page=${10*page+i}`)
                    .then(res => {
                    setCards(prevCards => {
                        return [...prevCards, ...res.data.results]
                    })
                    setHasMore(res.data.results.length > 0)
                    setLoading(false)
                }).catch(e => {
                    setError(true)
                })
            }
        }
        getData()
    }, [page, hasMore])
    
    
    return { loading, error, cards, hasMore}
}

