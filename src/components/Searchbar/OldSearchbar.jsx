import { FcSearch } from "react-icons/fc";
import PropTypes from 'prop-types';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled'


export const Searchbar = ({ onSubmit  }) => {
  return (
    <SearchBarHeader className="searchbar">
      <SearchForm onSubmit={onSubmit }>
        <SearchFormBtn type="submit" >                 
            <FcSearch style={{ width: 24, height: 24 }} /> Search                  
        </SearchFormBtn>

        <SearchFormInput          
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
      </SearchForm>
    </SearchBarHeader>
)}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};