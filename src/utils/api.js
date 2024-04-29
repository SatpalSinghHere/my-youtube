const API_KEY = "AIzaSyCXRKD60YR2SVpO5WX--R3fdGVgHzGiHnE"

export const VIDEO_LIST_API = 
    "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&key="+API_KEY+"&maxResults=";

export const CHANNEL_LOGO_API =
    "https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&key="+API_KEY+"&id=";

export const VIDEO_DETAILS_API =
    "https://www.googleapis.com/youtube/v3/videos?part=id,snippet&key="+API_KEY+"&id=";

export const VIDEO_COMMENTS_API = 
    "https://www.googleapis.com/youtube/v3/commentThreads?part=id,replies,snippet&key="+API_KEY+"&videoId=";