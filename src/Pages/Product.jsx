// import React, { useContext, useState } from 'react'
// import { ShopContext } from '../Context/ShopContext';
// import { useParams } from 'react-router-dom';
// import Breadcrumbs from '../Components/Breardcrumbs/Breadcrumbs';
// import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

// const Product = () => {
//   const {all_product} = useContext(ShopContext);
//   const {productId} = useParams(); 
//   const product = all_product.find((e)=>e.id === Number(productId));
//   return (
//     <div>
//       <Breadcrumbs product={product}/>
//       <ProductDisplay products= {product}/>
//     </div>
//   )
// }

// export default Product;


import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  // Use useContext to get the data from ShopContext
  const { all_product } = useContext(ShopContext);
  
  // Extract the productId from URL parameters
  const { productId } = useParams(); 

  // Find the product based on the productId
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      {/* Pass the product data to the Breadcrumbs component */}
      <Breadcrumbs product={product} />
       <ProductDisplay products= {product}/>

    </div>
  );
}

export default Product;
