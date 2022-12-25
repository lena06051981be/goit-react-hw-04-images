import { BallTriangle } from 'react-loader-spinner';
import { LoaderStyle } from './Loader.styled';

 const Loader = () => {
    return (
      <LoaderStyle>
        <BallTriangle color="#3f51b5" height={80} width={80} />
      </LoaderStyle>
    );
  };

export default Loader;