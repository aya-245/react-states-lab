import { useState } from 'react'

function App() {
  const [availableItems, setAvailableItems] = useState([
  {
    id: 1,
    name: "Black T shirt",
    price: 5
  },
  {
    id: 2,
    name: "Hanger Set",
    price: 8
  },
  {
    id: 3,
    name: "Thoub",
    price: 12
  },
  {
    id: 4,
    name: "Computer Bag",
    price: 20
  },
  {
    id: 5,
    name: "Couch",
    price: 50
  },
  {
    id: 6,
    name: "Gaming Chair",
    price: 70
  }
])
  const [shoppingCart, setShoppingCart] = useState([])
  const [availableBalance, setAvailablBalance] = useState(100)
  const [warningMesssage, setWarningMessage] = useState('')

  function handleAddToCart(item) {
    const filteredItems = availableItems.filter((oneItem)=>{
      return item.id !== oneItem.id
    })
    if(availableBalance>0 && availableBalance >= item.price){
      setAvailableItems(filteredItems)
      setShoppingCart([...shoppingCart, item])
      setAvailablBalance(availableBalance - item.price)
    } else{
      setWarningMessage('Insuffecient Funds. Your balance is too low to purchase this item.')
      setTimeout(() => {
        setWarningMessage('')
      }, 4000);

    }
  }

  function handleRemoveFromShoppingCart(item){
    const filteredItems = shoppingCart.filter((oenItem)=>{
      return item.id !== oenItem.id
    })
    setShoppingCart(filteredItems)
    setAvailableItems([...availableItems])

  }

  return (
    <>
      <h1>Sayed Hameds Closet</h1>

      <h2>Your Balance: {availableBalance}</h2>
      <p>{warningMesssage}</p>

      <h2>Available Items</h2>
      {availableItems.length === 0 ? 
        <h3>No More Items in Stock</h3> :
        availableItems.map((oneItem)=>
          <div key={oneItem.id}>
            <p>{oneItem.name}</p>
            <p>{oneItem.price}</p>
            <button onClick ={()=>{handleAddToCart(oneItem)}}>Add to Cart</button>
          </div>
      )}

      <h2>Shopping Cart</h2>
      {shoppingCart.length == 0 ? 
      <h3>The Cart is Empty</h3> :
      shoppingCart.map((oneItem)=>
          <div key={oneItem.id}>
            <p>{oneItem.name}</p>
            <p>{oneItem.price}</p>
            <button onClick ={()=>{handleRemoveFromShoppingCart(oneItem)}}>Remove from the Cart</button>

          </div>
      )}

    </>
  )
}

export default App
