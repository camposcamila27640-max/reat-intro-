import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/global.css'
import App from './App.jsx'
import Hello from './Hello.jsx'
import { Product } from './Product.jsx' 


const DATA= [
{ title: "IPHONE", price: 10000 },
{ title: "XBOX", price: 5000 },
{ title: "Mesa", price: 200 }


]



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hello name="camila" />
    <Hello name="fulano" />
    <Hello name="cigrano" />
    <Hello name= "sei la" /> 
    <Hello />

  {DATA.map( (product) => <Product title={product.title} price={product.price} />)}

<Product title="Monitor Dell" price={200}/>

    </StrictMode>,
)
