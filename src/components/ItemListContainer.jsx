const ItemListContainer = ({ greeting }) => {
  const userName = "User Name"

  return (
    <div>
      <h1 className="text-center font-black">{greeting} {userName}</h1>
    </div>
  );
};

export default ItemListContainer;
