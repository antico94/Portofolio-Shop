import React from 'react';
import {ProductList} from '../index';

const ProductListManager = ({data}) => {
  return(
      data.map(product => {
            return (
                <ProductList
                    ProductId={product.productId}
                    Key={product.productId}
                    Title={product.title}
                    Price={product.price}
                    Description = {product.description}
                    Image={require("../../../../images/"+
            product.imageName)}
                    Id={product.productId}
                />);
          }))
};

export default ProductListManager;
