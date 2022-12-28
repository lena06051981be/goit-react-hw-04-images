import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Searchbar } from "components/Searchbar/Searchbar";
import React, { useState } from "react";
import { getImagesApi } from '../../services/ApiService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "components/Loader/Loader";
import Button from "components/Button/Button";
import Container from './App.styled';
import Modal from "components/Modal/Modal";
import {FiArrowUpCircle} from "react-icons/fi"
import ScrollToTop from 'react-scroll-up';

export function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedImg] = useState(null);
  const [modalImgAlt] = useState('');


  // async componentDidUpdate(_, prevState) {
  //   const { query, page, totalPages, images } = this.state;

  //   // console.log('prevState.page: ', prevState.page);
  //   // console.log('this.state.page: ', this.state.page);

  //   // console.log('prevState.query: ', prevState.query);
  //   // console.log('this.state.query: ', this.state.query);         

  //   if (prevState.page !== page && page !== 1) {
  //     this.setState({ loading: true });
  //     const res = await getImagesApi(query, page);
  //     console.log(res);

  //     this.setState(({ images }) => ({
  //       images: [...images, ...res.hits],
  //       loading: false,
  //     }));

  //     setTimeout(() => this.scroll(), 1);
  //   }

  //   if (page >= totalPages && images !== prevState.images && images.length !== 0 ) {
  //     toast.warning(
  //       "We're sorry, but you've reached the end of search results."
  //     );
  //   }
  // }

  const onSubmit = async evt => {
    evt.preventDefault();
    const input = evt.target.elements.search;
    const value = input.value.trim();
    const page = 1;

    if (value === '') {
      toast.success('Please, enter another search value!');
      setImages([]);
      return;
    }

    setLoading(true);
    const res = await getImagesApi(value, page);
    toast.success(`We found ${res.totalHits} images and photos`)
    console.log(res);
    setLoading(false);

    if (res.hits.length === 0) {
      toast.success(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      setImages([]);
      return;
    }

    const totalPages = Math.floor(res.totalHits / 12);
    
      setImages(res.hits);
      setQuery(value);
      setPage(page);
      setTotalPages(totalPages);    
  };  

  const loadMore = () => {
    setPage(prevPage => prevPage + 1); 
  };

  const scroll = () => {
    const { clientHeight } = document.documentElement;
    window.scrollBy({
      top: clientHeight - 180,
      behavior: 'smooth',
    });
  }; 

  const selectImg = (largeImageURL, altTag) => {
    this.setState({ selectedImg: largeImageURL, modalImgAlt: altTag });    
  };

  const closeModal = () => {
    this.setState({
      selectedImg: '',
      modalImgAlt: '',
    });
  };

  
    // const { images, loading, totalPages, page, selectedImg, modalImgAlt } = this.state;
    const checkEndList = page < totalPages;
    const checkGalleryImg = images.length !== 0;
    

    return (      
      <Container>        
        <Searchbar onSubmit={onSubmit} />
        {checkGalleryImg && <ImageGallery
              images={images}
              onSelect={selectImg}
        ></ImageGallery> } 
        {loading ? (
          <Loader />
        ) : (
          checkGalleryImg && checkEndList && <Button onClick={loadMore} />
        )}

        {selectedImg && (
          <Modal onClose={closeModal}>
            <img src={selectedImg} alt={modalImgAlt} />
          </Modal>
        )}
        
        <ScrollToTop showUnder={160} topPosition={0}> {/* https://www.npmjs.com/package/react-scroll-up/v/1.4.0 */}      
          <FiArrowUpCircle style={{ width: 50, height: 50, color: "#3f51b5" }} />           
        </ScrollToTop>  
        
        <ToastContainer autoClose={2000} position="top-left" theme="dark" />
      </Container>
    )
  
}
