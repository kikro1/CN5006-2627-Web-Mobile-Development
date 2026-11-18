import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Welcome from './Myapp.jsx'
import Product from './Product.jsx'
import DiscountCalculator from './DiscountCalculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/*<App/>*/}
    <Welcome name= "James"/>
    <Product productName="Laptop" price={800} />
    <hr />
    <DiscountCalculator productName="Smartphone" price={650} />
  </StrictMode>
)
