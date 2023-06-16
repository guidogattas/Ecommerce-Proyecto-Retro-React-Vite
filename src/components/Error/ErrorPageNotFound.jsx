import { BackToMain } from "../BackToMain/BackToMain";
export default function ErrorPageNotFound() {
  return (
    <div className="flex flex-col text-center">
      <h1 className="bold p-4 text-4xl text-red-700">ERROR 404</h1>
      <h3>Page Not Found</h3>
      <BackToMain/>
    </div>
  );
}
