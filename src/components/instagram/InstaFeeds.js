const getInstaFeed = async () => {
    try {
        const res = await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=12&access_token=${process.env.REACT_APP_INS_TOKEN}`)
        const data = await res.json()
        return data
    } catch (error) {
        console.error("ERROR =>",error)
    }
}
 
export default getInstaFeed;