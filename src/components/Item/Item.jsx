import ItemCount from "./ItemCount";

const item = ({ cantidad, setCantidad, title, img, price, stock }) => {
    
    const add = () => setCantidad(cantidad + 1);
    const substract = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <>
            <div className="block w-1/3 h-auto m-4">
                <div className="text-center">
                    <div>
                        <img src={img} alt="" className="aspect-square object-cover" />
                    </div>
                    <h1 className="font-black">{title}</h1>
                    <h3>{price}</h3>
                </div>

            <ItemCount
             stock={stock}
            />
            </div>

        </>
    );
};

export default item;
