export const getToken = async () => {
    const token = await fetch("https://accounts.spotify.com/api/token",
        {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
        }
    )
    
    console.log(token)
}

export const getFeaturedPlaylists = async () => {
    const playlists = await fetch("https://api.spotify.com/v1/browse/featured-playlists?limit=5")
}