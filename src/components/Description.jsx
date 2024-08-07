export default function Description({ items }) {

    if(items.length === 0) return <div className="stats">Your shopping list is still empty. Let`s go shopping!</div>
  
    const totalItems = items.length;
    const checkedItems = items.filter((item) => item.checked).length;
    const percentage = Math.round((checkedItems / totalItems) * 100);
  
    return (
      <div className="stats">
        There are {totalItems} items on the grocery list, {checkedItems} items have been purchased ({percentage}%)
      </div>
    );
  }