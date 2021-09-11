import React, {useEffect, useState, useRef} from 'react'
import './camera-page.css'

const CameraPage = () => {
  const videoRef = useRef(null)
  const photoRef = useRef(null)
  const [hasPhoto, setHasPhoto] = useState(false)
  
  const getVideo = () => {
     navigator.mediaDevices.getUserMedia({
        video: { width: 1920, height: 1080 }
     }).then(stream => {  
        let video: any = videoRef.current
        video.srcObject = stream
        video.play()
     }).catch( error => console.error(error))
  }

  const takePhoto = () => {
     const width = 414
     const height = width / (16/9)

     let video = videoRef.current
     let photo: any = photoRef.current

     photo.width = width
     photo.height = height

     let ctx = photo.getContext('2d')
     ctx.drawImage(video, 0 , 0, width, height)
     setHasPhoto(true)
  }

  const closePhoto = () => {
    let photo: any = photoRef.current
    let ctx = photo.getContext('2d')
    ctx.clearRect(0, 0, photo.width, photo.height)
    setHasPhoto(false)
  }

  useEffect(() => getVideo(), [videoRef])

  return (
    <div>
      <div className="camera">
        <video ref={videoRef}></video>
        <button className='button-camera' onClick={takePhoto}>CAPTURAR</button>
      </div>
      <div className={"result " + (hasPhoto ? 'hasPhoto': '') }>
        <canvas ref={photoRef}></canvas>
        <button className='button-camera' onClick={closePhoto}>CLOSE</button>
      </div>
    </div>
  )
}

export default CameraPage