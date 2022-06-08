import React from 'react'
import ProductItem from './ProductItem'
import data from './data';

const Products = () => {
  return (
    <div className='container'>
        <div className="row">
            {data.productData.map((deyer)=>{
                return(
                    <ProductItem
                    sekil={deyer.img}
                    basliq={deyer.title}
                    aciqlama={deyer.desc}
                    qiymet={deyer.price}
                    />
                )
            })}
           
          
        </div>
    </div>
  )
}

export default Products