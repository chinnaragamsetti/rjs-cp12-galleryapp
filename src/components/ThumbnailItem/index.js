// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imagedetails, changeimage,isActive} = props
  const {
    id,
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = imagedetails
const activetab=isActive?'blurredimage'
  const onchangeimage = () => {
    changeimage(imageUrl, imageAltText)
  }
  return (
    <li className={`eachlistimagecontainer ${activetab}`}>
      <button className="buttton" type="button" onClick={onChangeimage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="eachlistimage"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
