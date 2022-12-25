import { ButtonLoadMore } from "./Button.styled";
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
    return (
      <ButtonLoadMore onClick={onClick} type="button">
        Load more
      </ButtonLoadMore>
    );
};
  
export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};