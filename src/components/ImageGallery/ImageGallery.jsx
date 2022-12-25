import PropTypes from 'prop-types';
import {GalleryList} from './ImageGallery.styled'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";


export const ImageGallery = ({ images, onSelect }) => {
  return (
    <div className="gallery">
      <GalleryList>     
          <ImageGalleryItem images={images} onSelect={onSelect} />
      </GalleryList>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};