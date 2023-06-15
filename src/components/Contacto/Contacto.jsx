import { useState } from "react";

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
    Swal.fire({
      title: "Mensaje Enviado",
      icon: "success",
      confirmButtonText: "Continuar",
    })
  };

  const classLabel = "block text-md font-bold text-gray-700";
  const classInput =
    "w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500";

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className={classLabel}>
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={classInput}
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className={classLabel}>
            Correo electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={classInput}
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className={classLabel}>
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            className={classInput}
            value={message}
            onChange={handleChange}
            rows={10}
            required
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:ring-indigo-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactComponent;