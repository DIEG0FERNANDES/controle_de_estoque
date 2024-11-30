import styles from "./styles.module.css";
const Formulario = () => {
  const [codigo, setCodigo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco,setPreco] = useState('');
  const [quantidadeProdutos, setQuantidadeProdutos] = useState('');

  const handleSubmit = (e) => {
    e.preventDeafult();
    addProdutos({codigo, descricao,preco,quantidadeProdutos});
    setCodigo();
    setDescricao();
    setPreco();
    setQuantidadeProdutos();
  }

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
        <input type="submit" value="CADASTRAR PRODUTO" />
      </form>
    </div>
  );
};
export default Formulario;
