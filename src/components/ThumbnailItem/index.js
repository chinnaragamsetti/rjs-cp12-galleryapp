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
    <li className={`eachlistimagecontainer ${activetab}`}>
      <button type="button" className="button" onClick={onChangeimage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="eachimagelist"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
