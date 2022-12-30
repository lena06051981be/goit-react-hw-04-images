import { FcSearch } from "react-icons/fc";
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled'
import { useState } from "react";


export default function Searchbar ({ onFormSubmit  }) {
  const [query, setQuery] = useState('');

  const handleValueChange = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // here we can make any checks of input.value , if require ;)

    onFormSubmit(query.toLowerCase());
  };

  return (
    <SearchBarHeader className="searchbar">
      <SearchForm onSubmit={handleSubmit }>
        <SearchFormBtn type="submit" >                 
            <FcSearch style={{ width: 24, height: 24 }} /> Search                  
        </SearchFormBtn>

        <SearchFormInput          
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          value={query}
          onChange={handleValueChange}
        />
      </SearchForm>
    </SearchBarHeader>
)}

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};