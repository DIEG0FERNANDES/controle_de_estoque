import Formulario from "../../components/formulario";
import { useState } from "react";
const Home = () => {
  const [produtos, setProdutos] = useState('');
  const addProdutos = (produto) => {
    setProdutos([...produtos, produto]);
  };
  return (
    <>
      <div>
        <Formulario />
      </div>
    </>
  );
};

export default Home;
