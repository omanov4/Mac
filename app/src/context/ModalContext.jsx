import { createContext, useState } from "react";

export const ModalContext = createContext(null);

const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});
  const openModal = (productItem) => {
    setOpen(true);
    setProduct(productItem);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <ModalContext.Provider value={{ openModal, closeModal, open, product }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
