import React, {useContext} from 'react'
import Layout from '../components/Layout/Layout'
import '../styles/Cart.css';
import { Cartcontext } from '../context/Context';

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
const state = Globalstate.state;
const dispatch = Globalstate.dispatch;

const total= state.reduce((total,menu)=>{
  return(total+menu.price*menu.quantity)
},0)

  return (
    <Layout>
       <div className='cart'>
       {state.map((menu, index)=>
         {
  
           return(<div className='card' key={index}>
         <img src={menu.image} alt="" />
         <p>{menu.name}</p>
          <p>{menu.quantity*menu.price}</p>
          <div className='quantity'>
            <button onClick={()=>dispatch ({type: 'INCREASE', payload: menu})}>+</button>
             <p>{menu.quantity}</p>
             <button 
             onClick={()=>{
              if(menu.quantity>1){
                dispatch ({type: 'DECREASE', payload: menu});
              }else{
                dispatch({type:'REMOVE', payload: menu});
              }
             }
             }>
              -
             </button>

          </div>
          <h2 onClick={()=>dispatch({type:'REMOVE', payload: menu})}>x</h2>

 </div>
       );

        } )}
        {state.length>0&& <div className='total'>
          <h2>{total}
          </h2>
          </div>
        }
       </div>
    </Layout>
  )
};

export default Cart