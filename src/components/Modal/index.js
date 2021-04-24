import { useRef } from 'react';
import ModalContainer from './styles'

const Modal = ({ setIsVisible, children }) => {


  return (
    <ModalContainer onClick={() => setIsVisible(false)} >
      <div className="container" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={() => setIsVisible(false)}>&times;</button>
        <div className="content">
          {children}
        </div>
      </div>
    </ModalContainer>
  );

};
export default Modal;