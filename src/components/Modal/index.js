import ModalContainer from'./styles'

const Modal = ({setIsVisible, children}) => {

    const handleOutSideClick = (e) => {
        if(e.target.id == 'modal') onClose();
    }

    const onClose = setState => setState(false)
    
    return( 
        <ModalContainer id="modal" onClick={handleOutSideClick} >
            <div className="container">
                <button className="close" onClick={() => onClose(setIsVisible)}>&times;</button>
                <div className="content">
                    {children}
                </div>
            </div>
        </ModalContainer>
    );

};
export default Modal;

// import React, {useState} from 'react';
// import Modal from './Modal'

// export function modal(){
//     const[isModalVisible, setIsModalVisible] = useState(false);
//     return(
//         <div className="modal">
//             <button onClick={() => setIsModalVisible(true)}></button>
//             {isModalVisible? 
//             <Modal>
                
//             </Modal> : null}

//         </div>
//     );
// }