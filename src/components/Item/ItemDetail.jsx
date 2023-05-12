
const ItemDetail = ({product}) => {
  return (
    <div>
        <img src={product.img} alt={product.title} />
      <h1>
        {product.title}
      </h1>

    </div>
  )
}

export default ItemDetail