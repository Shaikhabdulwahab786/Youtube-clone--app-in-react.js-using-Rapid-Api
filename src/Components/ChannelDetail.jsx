import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { Videos, ChannelCard } from './'
import { fetchFromApi } from "../utils/fetchFromAPI"

const ChannelDetail = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([])
  const [channelDetail, setChannelDetail] = useState(null)
  console.log(channelDetail, videos)
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then(
      (data) => setChannelDetail(data?.items[0]));
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items));
  }, [id])


  return (
    <Box minHeight="95vh" >
      <Box>
        <div style={{
          background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(190,145,117,1) 52%, rgba(253,187,45,1) 100%)", zindex: '10', height: '300px'
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display='flex' p={2} >

        <Box sx={{ mr:{ sm: '100px' } }} />
        <Videos videos={videos} />

      </Box>
    </Box>
  )
}

export default ChannelDetail