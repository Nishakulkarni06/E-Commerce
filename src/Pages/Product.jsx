import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProducts/RelatedProduct';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams(); 
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      {/* Pass the product data to the Breadcrumbs component */}
      <Breadcrumbs product={product} />
       <ProductDisplay products= {product}/>
        <DescriptionBox/>
        <RelatedProduct/>
    </div>
  );
}

export default Product;
