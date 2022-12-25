import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Searchbar } from "components/Searchbar/Searchbar";
import { Component } from "react";
import { getImagesApi } from '../../services/ApiService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "components/Loader/Loader";
import Button from "components/Button/Button";
import Container from './App.styled';
import Modal from "components/Modal/Modal";



export class App extends Component {
  state = {
    images: [],
    query: null,
    page: 1,  
    totalPages: null,
    loading: false,
    selectedImg: null,
    modalImgAlt: '',
  };

  async componentDidUpdate(_, prevState) {
    const { query, page, totalPages, images } = this.state;

    // console.log('prevState.page: ', prevState.page);
    // console.log('this.state.page: ', this.state.page);

    // console.log('prevState.query: ', prevState.query);
    // console.log('this.state.query: ', this.state.query);         

    if (prevState.page !== page && page !== 1) {
      this.setState({ loading: true });
      const res = await getImagesApi(query, page);
      console.log(res);

      this.setState(({ images }) => ({
        images: [...images, ...res.hits],
        loading: false,
      }));

      setTimeout(() => this.scroll(), 1);
    }

    if (page >= totalPages && images !== prevState.images && images.length !== 0 ) {
      toast.warning(
        "We're sorry, but you've reached the end of search results."
      );
    }
  }

  onSubmit = async evt => {
    evt.preventDefault();
    const input = evt.target.elements.search;
    const value = input.value.trim();
    const page = 1;

    if (value === '') {
      toast.success('Please, enter another search value!');
      this.setState({ images: [] });
      return;
    }

    this.setState({ loading: true });
    const res = await getImagesApi(value, page);
    console.log(res);
    this.setState({ loading: false });

    if (res.hits.length === 0) {
      toast.success(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      this.setState({ images: [] });
      return;
    }

    const totalPages = Math.floor(res.totalHits / 12);

    this.setState({
      images: res.hits,
      query: value,
      page,
      totalPages: totalPages,
    });
  };  

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,      
    }));
  };

  scroll = () => {
    const { clientHeight } = document.documentElement;
    window.scrollBy({
      top: clientHeight - 180,
      behavior: 'smooth',
    });
  }; 

  selectImg = (largeImageURL, altTag) => {
    this.setState({ selectedImg: largeImageURL, modalImgAlt: altTag });    
  };

  closeModal = () => {
    this.setState({
      selectedImg: '',
      modalImgAlt: '',
    });
  };

  render() {
    const { images, loading, totalPages, page, selectedImg, modalImgAlt } = this.state;
    const checkEndList = page < totalPages;
    const checkGalleryImg = images.length !== 0;
    

    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />
        {checkGalleryImg && <ImageGallery
              images={images}
              onSelect={this.selectImg}
        ></ImageGallery> } 
        {loading ? (
          <Loader />
        ) : (
          checkGalleryImg && checkEndList && <Button onClick={this.loadMore} />
        )}

        {selectedImg && (
          <Modal onClose={this.closeModal}>
            <img src={selectedImg} alt={modalImgAlt} />
          </Modal>
        )}
        <ToastContainer autoClose={2000} position="top-center" theme="light" />
      </Container>
    )
  }
}
