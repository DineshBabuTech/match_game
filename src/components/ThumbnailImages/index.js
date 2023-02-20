import './index.css'

const ThumbnailImages = props => {
  const {imgDetails, checkWithImg} = props
  const {thumbnailUrl, imageUrl} = imgDetails

  const clickedThumbnail = () => {
    checkWithImg(imageUrl)
  }

  return (
    <li className="thum-list-item">
      <button onClick={clickedThumbnail} type="button" className="thum-btn">
        <img className="thumb-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailImages
