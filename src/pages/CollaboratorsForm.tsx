import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CollaboratorsForm = () => {
  const [name, setName] = useState("");
  const [collaboratorImg, setCollaboratorImg] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !collaboratorImg) {
      setError(true);
      return;
    }
    setError(false);
    setSuccess(true);
    setTimeout(() => {
      navigate("/");
    }, 1000);
};

  return (
    <div className="w-full flex flex-col justify-center items-center  px-6">
      <form
        className="flex w-full flex-col items-center  sm:w-[80%] xl:w-[50%] sm:pt-3 "
        onSubmit={onSubmit}
      >
        <label
          className="w-full flex justify-start text-lg md:text-2xl "
          htmlFor="name"
        >
          Nombre del colaborador
        </label>
        <input
          type="text"
          className="w-full flex h-10 md:h-14 md:text-xl border rounded-2xl px-5 border-black  "
          id="name"
          name="name"
          placeholder="Inserte el nombre del colaborador"
          onChange={(e) => setName(e.target.value)}
        />
        <label
          className="w-full flex justify-start text-lg md:text-2xl "
          htmlFor="user_avatar"
        >
          Ingresar imagen del colaborador
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
          accept="image/*"
          onChange={(e) => setCollaboratorImg(e.target.files[0])}
        />

        {collaboratorImg && (
          <button type="button" onClick={() => setCollaboratorImg(null)}>
            Eliminar imagen
          </button>
        )}
        <button
          type="submit"
          className="mt-4 bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-3 px-10 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Ingresar Colaborador
        </button>
        {
            error && <p className="text-red-500">Por favor completar todos los datos necesarios.</p>
        }
        {
            success && <p className="text-green-500">Ingreso realizado!</p>
        }
      </form>
    </div>
  );
};

export default CollaboratorsForm;
