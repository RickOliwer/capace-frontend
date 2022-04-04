import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Feed from './Feed'
const InstaFeeds = ({token, ...props}) => {
    const [feeds, setFeedsData] = useState([]);
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;
    console.log('the token ====>', token);

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();
        console.log('URL ===>', `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${tokenProp.current}`);
        async function fetchInstagramPost () {
            let config = {
                method: 'get',
                url: `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${tokenProp.current}`,
                responseType: 'stream'
            }
            try{
                // axios
                //     .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${tokenProp.current}`)
                //     .then((resp) => {
                //         setFeedsData(resp.data)
                //     })
                await axios(config).then(function (response) {
                    console.log('my response ===>',response);
                })
            } catch (err) {
                console.log('error', err)
            }
        }

        // manually call the fecth function 
        fetchInstagramPost();
        console.log('FEEDS AFTER TRY CATCH ===>', feeds);
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <div className="container">
            {feeds.map((feed) => {
                console.log('feed component ===>', feed)
                return (
                    <Feed key={feed.id} feed={feed} />
                )
            })}
        </div>
    );
}

export default InstaFeeds;

