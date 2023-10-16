import Product from "./Components/Product";

import Shop from "./Components/Shop";

import Count from "./Components/Count";

function App() {

  const shopStore = [
        
    {goodsName:"Biscuit", name:"Orio", importFrom:"USA"},
    {goodsName:"Noodles", name:"Magie", importFrom:"Russia"},
    {goodsName:"Ice Cream", name:"Polar", importFrom:"Iceland"},
    {goodsName:"Milk", name:"Dano", importFrom:"New Zealand"},
    {goodsName:"Date", name:"Azua", importFrom:"Saudi Arabia"},
]
  return (


    <div className="">
        <Product title = "I phone 7" price = "1000" city="Dhaka"></Product>
        <Product title = "I phone 8" price = "1500" city="Khulna"></Product>
        <Product title = "I phone 13" price = "3000" city="Faridpur"></Product>
        {
            shopStore.map(shop => <Shop shop={shop}></Shop>)

        }
        <Count></Count>
    </div>
  );
}

export default App;