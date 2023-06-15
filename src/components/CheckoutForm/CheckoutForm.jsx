import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createOrderWithStockUpdate } from "../Services/firebase";
import { cartContext } from "../../context/cartContext";



function CheckoutForm() {
  const { cart, countTotalPrice, clearCart } = useContext(cartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigateTo = useNavigate();

  async function handleConfirm(e) {
    e.preventDefault();
    const order = {
      items: cart,
      buyer: {
        name: name,
        phone: phone,
        email: email,
      },
      date: new Date(),
      price: countTotalPrice(),
    };


    try {
      const id = name && phone && email ? await createOrderWithStockUpdate(order) : null;

      id
        ? (clearCart(), navigateTo(`/order-confirmation/${id}`))
        : Swal.fire({
            title: "Faltan Completar Datos",
            icon: "error",
            confirmButtonText: "Continuar",
          });
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="mx-auto max-w-md rounded bg-white p-8 shadow">
      <h2 className="mb-4 text-center text-2xl font-extrabold">
        Generar Orden
      </h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-bold">
     S       Nombre y Apellido
          </label>
          <input
            type="text"
            id="name"
            placeholder="Juan Pérez"
            className="w-full rounded border border-gray-300 px-3 py-2"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-bold">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            placeholder="juanperez@mail.com"
            className="w-full rounded border border-gray-300 px-3 py-2"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="mb-2 block text-sm font-bold">
            Celular
          </label>
          <input
            type="tel"
            id="telefono"
            placeholder="15-1111-1111"
            className="w-full rounded border border-gray-300 px-3 py-2"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
        </div>
        <div className="text-center">
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
            onClick={handleConfirm}
          >
            Crear Orden de Compra
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
