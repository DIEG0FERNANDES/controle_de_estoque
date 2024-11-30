import styles from "./styles.module.css";
const Formulario = () => {
  return (
    <div>
      <form action="" className={styles.formulario}>
        <label htmlFor="codigo">Código</label>
        <input type="text" name="" id="" />
        <label htmlFor="descricao">Descrição</label>
        <input type="text" name="" id="" />
        <label htmlFor="preco">Preço</label>
        <input type="number" name="" id="" />
        <label htmlFor="quantidadeEstoque">Quantidade em Estoque</label>
        <input type="number" name="" id="" />
        <input type="submit" value="Cadastras produto" />
      </form>
    </div>
  );
};
export default Formulario;
