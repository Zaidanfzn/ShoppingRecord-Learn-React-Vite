import { useState } from "react";
import Item from "./Item";

export default function GroceryList({ items, onDeleteItem, onToggleItem, onClearItems }) {

    const [sortBy, setSortBy] = useState('input'); //Untuk sorting tidak perlu di app, karena hanya sort aja di GroceryList saja.
  
    let sortedItems;
  
    // if(sortBy === 'input') {
    //   sortedItems = items;
    // }
    // if(sortBy === 'name') {
    //   sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
    // }
    // if(sortBy === 'checked') {
    //   sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
    // } 
  
    switch(sortBy) {
      case 'name':
        sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'checked':
        sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
        break;
      default:
        sortedItems = items;
        break;
    }
  
    return (
      <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} /> 
          ))}
            {/* <span style={{ textDecoration: "line-through" }}>1 Kopi</span> Ini sumber masalah tidak muncul di halaman web, sampai di inspect ga ada tag elemen lain, bukan cuma di function ini, ngaruh juga ke semuanya, yaitu style nya masih dalam syntax HTML belum ke JavaScript. */}
        </ul>
      </div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="name">Sort by item name order</option>
          <option value="checked">Sort by check order</option>
        </select>
        <button onClick={onClearItems}>Clean up your shopping list</button>
      </div>
      </>
    );
  }