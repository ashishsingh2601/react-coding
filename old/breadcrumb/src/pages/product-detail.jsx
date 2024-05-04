import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const ProductDetail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
        setLoading(true);
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();

      setProduct(data);

    } catch (err) {
      console.log(err);
    }finally{
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      <h2>Product Detail Page</h2>
      {product && !loading && (
        <div>
          <img src={product.thumbnail} alt="Product" />
          <h3>{product.title}</h3>
          <h3>$ {product.price}</h3>
          <p>{product.description}</p>
        </div>
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default ProductDetail;