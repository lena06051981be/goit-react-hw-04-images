import PropTypes from 'prop-types';
import { useEffect } from 'react';

import {createPortal} from 'react-dom'; //делаем запись в public <div id="modal-root"></div>

import { Overlay, ModalWrap } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root')

export default function Modal({onClose, children})  {

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
        window.removeEventListener('keydown', handleKeyDown);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = event => {
    // console.log('Кликнули в бекдроп');
    // console.log('Кликнули в currentTarget: ', event.currentTarget);
    // console.log('Кликнули в target: ', event.target);

    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  
    return createPortal(
      <Overlay onClick={handleBackdropClick}>
        <ModalWrap>{children}</ModalWrap>
      </Overlay>,
      modalRoot,
    )      
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};