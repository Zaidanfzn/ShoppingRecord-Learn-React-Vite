import { useState } from "react";

export default function Form({ onAddItem }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if(!name) return;
  
      const newItem = {name, quantity, checked: false, id: Date.now() } //Ini sebenarnya artinya nama properti nya name, ambil data dari value nya name, lalu quantity juga begitu. newItem ini adalah sebuah object karena newItem = {} begitu. Checked default nya false atau belum kecoret.
      onAddItem(newItem);
      // console.log(newItem);
      setName('');
      setQuantity(1);
  
    }
  
    const quantityNum =[...Array(20)].map((_, i) => (
      <option value={i+1} key={i+1}>{i+1}</option>
    ));
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What are you going to spend today?</h3>
        <div>
          <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>{quantityNum}</select>
          {/* Bagian setQuantity dikasih Number supaya memaksa dia menjadi number, bukan string lagi. */}
          <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button>Add</button>
      </form>
    );
  }