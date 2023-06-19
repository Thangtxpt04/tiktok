import useModal from '~/hooks/useModal';
import LoginModal from '~/components/Modals/LoginModal';
import { createContext, useRef } from 'react';

export const ModalContextKey = createContext();
function ModalContext({ children }) {
    const [LoginModalComponent, loginModalShow] = useModal(LoginModal);

    const contextValue = useRef({
        loginModalShow,
    });
    return (
        <ModalContextKey.Provider value={contextValue.current}>
            {children}
            <LoginModalComponent />
        </ModalContextKey.Provider>
    );
}

export default ModalContext;
