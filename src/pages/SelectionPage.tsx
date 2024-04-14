import { useState } from 'react';
import CollaboratorsForm from './CollaboratorsForm';
import AdoptionForm from './AdoptionForm';

function SelectionPage() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  const handleSelectChange = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  return (
    <div className='w-full flex flex-col items-center justify-center'>
       <div className='flex items-center justify-around w-full my-8 border border-pink-500'>
        <label>Seleccione el formulario:</label>
        <select className='p-2 my-4 text-xl bg-green-300' value={opcionSeleccionada} onChange={handleSelectChange}>
        <option value="">Selecciona una opción</option>
        <option value="COLABORADORES">COLABORADORES</option>
        <option value="ADOPCIONES">ADOPCIONES</option>
        <option value="NOTICIAS">NOTICIAS</option>
      </select>
        </div> 

      {opcionSeleccionada === 'COLABORADORES' && <CollaboratorsForm />}
      {opcionSeleccionada === 'ADOPCIONES' && <AdoptionForm />}
      {opcionSeleccionada === 'NOTICIAS' && <CollaboratorsForm />}
    </div>
  );
}

export default SelectionPage;
