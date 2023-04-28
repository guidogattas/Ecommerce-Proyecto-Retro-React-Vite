const ItemListContainer = (props) => {
  const userName = "User Name"

  return (
    <div>
      <h1 className="text-center font-black">{props.greeting} {userName}</h1>
    </div>
  );
};

export default ItemListContainer;
