import EachProduct from "../components/EachProduct";

const Products = ({ data, ff }) => {
  console.log(ff, data);
  return (
    <div className="flex flex-col flex-wrap mx-auto md:w-4/5 items-center justify-center md:flex-row sm2:flex-row">
      {ff.length !== 0
        ? ff.map((product) => <EachProduct name={product.name} />)
        : data.map((product) => <EachProduct name={product.name} />)}

     
    </div>
  );
};

export default Products;
