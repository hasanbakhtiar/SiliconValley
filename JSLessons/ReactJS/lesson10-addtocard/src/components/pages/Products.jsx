import React from 'react'
import ProductItem from './ProductItem'
import data from '../../data/data';

const Products = () => {
  return (
    <div className='container'>
        <div className="row">
            {data.productData.map((deyer,acar)=>{
                return(
                    <ProductItem
                    sekil={deyer.img}
                    basliq={deyer.title}
                    aciqlama={deyer.desc}
                    qiymet={deyer.price}
                    item={deyer}
                    key={acar}

                    />
                )
            })}
           
          
        </div>
    </div>
  )
}

export default Products