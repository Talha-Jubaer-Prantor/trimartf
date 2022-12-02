import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({product, handleAddToCart}) => {
    const { name, img, price ,category} = product;
    
  



    
    return (
        <div >
            
  <Link style={{color:"black",textDecoration:"none"}} to='/productdetails' state={product}>
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p><b>Price: <span style={{"color":"red"}}>{price} </span></b><span style={{"color":"#03c703"}}>BDT</span></p>
                <p style={{"fontSize":"15px"}}>Category: {category}</p>
            </div>

        </div>
        </Link>

        </div>
    );
};

export default Product;