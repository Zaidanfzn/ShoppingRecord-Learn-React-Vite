import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Description from "./Description";
import Footer from "./Footer";

const groceryItems = [
  {
    id: 1,
    name: 'Sushi',
    quantity: 24,
    checked: false,
  },
  {
    id: 2,
    name: 'Indomie',
    quantity: 14,
    checked: false,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 22,
    checked: false,
  },
];


export default function App() {
  const [items, setItems] = useState(groceryItems); //Ini hooks nya bisa kosong artinya catatan awal kosong gitu, atau diisi pakai data dummy yang sudah ada juga bisa, yaitu groceryItems.

  function handleAddItem(item) { //Sebuah fungsi untuk menangani ketika ada item baru yang masuk ke array items atau setItems. 
    setItems([...items, item]); //Ini buat array baru atau immutability
  }

  function handleDeleteItem(id) { //Yang unik yaitu ID, jadi ketika diceklis (ada id nya), itu yang akan dihapus.
    setItems((items) => items.filter((item) => item.id !== id)); //Ini maksudnya kembalikan nilai array kecuali yang lagi diclick atau yang ada id nya.
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? {...item, checked: !item.checked} : item )); //Ini array nya 5 tetep 5 gitu misalnya, jadi butuh nya map, kalau di handleDeleteItem make filter karna dikurangin array nya. ...Item itu maksudnya bikin object baru. lalu kondisi check saat ini itu item.checked tinggal di not kan. Kecuali nya ya kembalikkan saja item nya.
    //Sempet kehapus semua karena else nya { item }, harusnya jangan dijadikan object, harusnya item aja.
  }

  function handleClearItems() { //Ini clearItems pakai s karena ingin clear langsung semuanya.
    setItems([]);
  }

  return (
  <>
    <Header />
    <div className="app">
      <Form onAddItem={handleAddItem} />
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={ handleClearItems} />
      <Description items={items} />
    </div>
    <Footer />
  </>
  );
}