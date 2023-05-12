import Item from "./item"

const ItemList = ({products}) => {

  return (
    <div className="flex flex-wrap justify-center">
    {products.map((item) => (
      <Item
        key={item.id}
        {...item}
      />
    ))}
  </div>
  )
}

export default ItemList