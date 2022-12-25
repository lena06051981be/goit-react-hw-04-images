import { 
  GalleryItem,
  GalleryImage,
  GalleryInfo,
  GalleryInfoItem,
} from './ImageGalleryItem.styled';
import { FcLike } from "react-icons/fc";
import { ImEye } from "react-icons/im";
import { FaComments } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images, onSelect }) => {
  return images.map((image) => (
      <GalleryItem className="photo-card" key={image.id}>        
          <GalleryImage
          className='image'
          src={image.webformatURL}
          alt={image.tags}
          onClick={() => onSelect(image.largeImageURL, image.tags)}
          loading="lazy"
          />
          <GalleryInfo class='info'>
            <GalleryInfoItem class='info__item'>
              <b>Likes</b>
              <FcLike style={{ width: 14, height: 14 }} />              
              {image.likes}
            </GalleryInfoItem>
            <GalleryInfoItem class='info__item'>
              <b>Views</b>
              <ImEye style={{ width: 14, height: 14, color: "lightgreen"}} />              
              {image.views}
            </GalleryInfoItem>
            <GalleryInfoItem class='info__item'>
              <b>Comments</b>
              <FaComments style={{ width: 14, height: 14, color: "lightblue"}} />              
              {image.comments}
            </GalleryInfoItem>
            <GalleryInfoItem class='info__item'>
              <b>Downloads</b>
              <MdOutlineFileDownload style={{ width: 14, height: 14, color: "yellow"}} />              
              {image.downloads}
            </GalleryInfoItem>
          </GalleryInfo>        
      </GalleryItem>  
  ));
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};