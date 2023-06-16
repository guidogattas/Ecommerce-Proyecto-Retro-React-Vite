import { BackToMain } from "../BackToMain/BackToMain";

export default function ErrorProductNotFound() {
  return (
    <div className="flex flex-col text-center">
      <h1 className="bold p-4 text-4xl text-red-700">Producto No Encontrado</h1>
      <BackToMain/>
    </div>
  );
}
