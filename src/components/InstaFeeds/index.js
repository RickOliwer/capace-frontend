import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Feed from './Feed'
const InstaFeeds = ({token, ...props}) => {
    const [feeds, setFeedsData] = useState([])
    const tokenProp = useRef(token)
    tokenProp.current = token

    useEffect(() => {
        const aboutController = new AbortController()

        async function fetchIstagramPost () {
            try {
                axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${tokenProp.current}`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                })
            } catch (error) {
                console.log('error', error);
            }
        }

        fetchIstagramPost()

        return () => {
            aboutController.abort()
        }
    }, [props.limit])
    return (
        <div className='contain layout-top'>
            <h2>INSTAGRAM.</h2>
            <div className='insta-container'>

                {feeds.map((feed) => (
                    <Feed key={feed.id} feed={feed} />
                ))}
            </div>
        </div>
    );
}
 
export default InstaFeeds;