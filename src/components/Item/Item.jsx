import ItemCount from "./ItemCount";

const item = ({ cantidad, setCantidad, title, img, price, stock }) => {
    
    return (
        <>
            <div className="block  h-auto m-4 mb-4  my-auto">
                <div className="text-center">
                    <div>
                        <img src={img} alt="" className="aspect-square object-cover" />
                    </div>
                    <h1 className="font-black">{title}</h1>
                    <h3>${price}</h3>
                </div>

            <ItemCount
             stock={stock}
            />
            </div>

        </>
    );
};

export default item;
