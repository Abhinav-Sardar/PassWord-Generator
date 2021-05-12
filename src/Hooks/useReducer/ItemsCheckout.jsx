import userEvent from '@testing-library/user-event';
import React, { useReducer } from 'react'

function ItemsCheckout() {
    function reducer(state , action){
        if(state.count === 0 && action === 'decrement'){
            return state; 
        }
        else if(action === 'increment'){
            let {price , count , total} = {...state} ; 
            // console.log(price , count , total) ; 
            count += 1 ; 
            total = count * price ; 
            console.log(price, count , total) ; 
            return {price:price , count:count , total:total} ;
            
        }
        else if(action === 'decrement'){
            let {price , count , total} = {...state} ; 
            // console.log(price , count , total) ; 
            count -= 1 ; 
            total = count * price ; 
            console.log(price, count , total) ; 
            return {price:price , count:count , total:total} ;
            
        }


}
    
    let [chairPrice , dispatchChairPrice] = useReducer(reducer , {price:10 , count:1 , total:10}) ; 
    let [iphonePrice , dispatchIphonePrice] = useReducer(reducer , {price:1000 , count:1 , total:1000}) ; 
    let [pencilPrice , dispatchPencilPrice] = useReducer(reducer , {price:0.5 , count:1 , total:0.5}) ; 
    return (
        <div>
        <center>
            <div>
                <h1>Chair:10$</h1>
                <button onClick = {()=>dispatchChairPrice("increment")}>Increment</button>
                <button onClick = {() => dispatchChairPrice("decrement")}>Decrement</button>
                <h3>{chairPrice.count}</h3>
            </div>
            <div>
                <h1>
                    Iphone:1000$
                </h1>
                <button onClick = {() => dispatchIphonePrice('increment')}>Increment</button>
                <button onClick = {() => dispatchIphonePrice('decrement')}>Decrement</button>
                <h3>{iphonePrice.count}</h3>
            </div>
            <div>
                <h1>Pencil:0.5$</h1>

                <button onClick = {() => dispatchPencilPrice('increment')}>Increment</button>
                <button onClick = {() => dispatchPencilPrice('decrement')}>Decrment</button>
               <h3> {pencilPrice.count}</h3>
            </div>
            <h1>Total:{chairPrice.total + pencilPrice.total+ iphonePrice.total}</h1>   
        </center>
        </div>
    )

    }
export default ItemsCheckout
