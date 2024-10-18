import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Input = ({ className, ...props }) => (
  <input className={`border rounded px-2 py-1 w-full ${className}`} {...props} />
);

const Button = ({ className, children, ...props }) => (
  <button className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${className}`} {...props}>
    {children}
  </button>
);

const Checkbox = ({ id, label, checked, onChange }) => (
  <div className="flex items-center mb-2">
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
      className="mr-2 h-4 w-4"
    />
    <label htmlFor={id} className="select-none">{label}</label>
  </div>
);

const Select = ({ options, value, onChange, label }) => (
    <div className="mb-2">
      <label className="block mb-1">{label}</label>
      <select 
        value={value} 
        onChange={onChange}
        className="border rounded px-2 py-1 w-full"
      >
        <option value="">Seleccionar...</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );


const InterfazSeleccion = () => {
  const [busqueda, setBusqueda] = useState('');
  const [aplicacionesSeleccionadas, setAplicacionesSeleccionadas] = useState([]);
  const [areasSeleccionadas, setAreasSeleccionadas] = useState([]);
  const [tipoAplicacion, setTipoAplicacion] = useState('');

  const aplicaciones = [
    { id: 1, nombre: 'Outlook' },
    { id: 2, nombre: 'Teams' },
    { id: 3, nombre: 'Metro.com' },
    { id: 4, nombre: 'Wong.com' },
    { id: 5, nombre: 'Wong APP' },
    { id: 6, nombre: 'Wong.com.pe' },
    { id: 7, nombre: 'Outlook.com' },
    { id: 8, nombre: 'www.outlook.com' },

  ];

  const areas = [
    { id: 1, nombre: 'Cuentas Metro' },
    { id: 2, nombre: 'Data' },
    { id: 3, nombre: 'Social Media' },
  ];

  const tiposAplicacion = ['Productiva', 'No productiva', 'Neutra'];

  const aplicacionesFiltradas = aplicaciones.filter(app =>
    app.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const toggleSeleccionApp = (id) => {
    setAplicacionesSeleccionadas(prev =>
      prev.includes(id) ? prev.filter(appId => appId !== id) : [...prev, id]
    );
  };

  const toggleSeleccionArea = (id) => {
    setAreasSeleccionadas(prev =>
      prev.includes(id) ? prev.filter(areaId => areaId !== id) : [...prev, id]
    );
  };

  const handleAsignar = () => {
    if (aplicacionesSeleccionadas.length > 0 && areasSeleccionadas.length > 0) {
      console.log('Asignando:', { aplicaciones: aplicacionesSeleccionadas, areas: areasSeleccionadas });
      alert('Asignación realizada con éxito!');
    } else {
      alert('Por favor, selecciona al menos una aplicación y un área');
    }
  };

  return (
    <div style={{padding: '1rem', maxWidth: '64rem', margin: '0 auto'}}>
      <h1 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>Selección de Aplicaciones y Áreas</h1>
      <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <div>
          <div style={{marginBottom: '1rem', position: 'relative'}}>
            <Input
              type="text"
              placeholder="Buscar aplicación..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{paddingLeft: '2.5rem'}}
            />
            <Search style={{position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'gray'}} size={20} />
          </div>
          <div style={{border: '1px solid gray', padding: '1rem', height: '16rem', overflowY: 'auto'}}>
            {aplicacionesFiltradas.map(app => (
              <Checkbox
                key={app.id}
                id={`app-${app.id}`}
                label={app.nombre}
                checked={aplicacionesSeleccionadas.includes(app.id)}
                onChange={() => toggleSeleccionApp(app.id)}
              />
            ))}
          </div>
        </div>
         
        <div>
          <h2 style={{fontSize: '1.25rem', fontWeight: 'semibold', marginBottom: '0.5rem'}}>Áreas</h2>
          <div style={{border: '1px solid gray', padding: '1rem', height: '16rem', overflowY: 'auto'}}>
            {areas.map(area => (
              <Checkbox
                key={area.id}
                id={`area-${area.id}`}
                label={area.nombre}
                checked={areasSeleccionadas.includes(area.id)}
                onChange={() => toggleSeleccionArea(area.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
          <Select
            options={tiposAplicacion}
            value={tipoAplicacion}
            onChange={(e) => setTipoAplicacion(e.target.value)}
            label="Tipo de Aplicación"
          />
      </div>

      <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'flex-end'}}>
        <Button
          onClick={handleAsignar}
          disabled={aplicacionesSeleccionadas.length === 0 || areasSeleccionadas.length === 0}
        >
          Asignar
        </Button>
      </div>
    </div>
  );
};


export default InterfazSeleccion;