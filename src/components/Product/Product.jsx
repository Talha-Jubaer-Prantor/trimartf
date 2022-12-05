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
                <p  className='product-name'>{name}</p>
                <p style={{"color":"white"}}><b>Price: <span>{price} </span></b><span>BDT</span></p>
                <p style={{"fontSize":"15px","color":"white"}}>Category: {category}</p>
            </div>

        </div>
        </Link>

        </div>
    );
};

export default Product;