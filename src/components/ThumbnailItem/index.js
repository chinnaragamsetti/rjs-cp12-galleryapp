// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imagedetails, changeimage, isActive} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = imagedetails
  const activetab = isActive ? 'blurredimage' : ''
  const onChangeimage = () => {
    changeimage(imageUrl, imageAltText)
  }
  return (
    <li
      className={`eachlistimagecontainer ${activetab}`}
      onClick={onChangeimage}
    >
      <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
        className="eachimagelist"
      />
    </li>
  )
}

export default ThumbnailItem
