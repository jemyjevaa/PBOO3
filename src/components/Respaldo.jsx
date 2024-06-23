import React, { useState } from "react";
import Sidebar from './Barra.jsx';
import Respaldo1 from './Respaldo1';
import UserBadge from './Icono.jsx';

const CustomButton = ({ children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="Button"
      style={{
        width: 350,
        height: 50,
        background: isHovered ? '#002761' : '#fff',
        color: isHovered ? '#FFFFFF' : '#000000',
        border: '0.5px solid #425466',
        borderRadius: 10,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 700,
        wordWrap: 'break-word',
        transition: 'background 0.3s, color 0.3s',
        textDecoration: 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick} // Aquí se llama la función onClick pasada desde el componente principal
    >
      <a
        href="/Respaldo"
        style={{
          textDecoration: 'none',
          color: isHovered ? '#FFFFFF' : '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </a>
    </div>
  );
};

const Respaldo = () => {
  const [backupMessage, setBackupMessage] = useState('');

  const handleBackup = async () => {
    try {
      const response = await fetch('http://localhost:3000/backup', {
        method: 'POST'
      });
      const data = await response.json();
      console.log('Respuesta del servidor:', data);
      setBackupMessage(data.message);
    } catch (error) {
      console.error('Error al realizar la solicitud de respaldo:', error);
      setBackupMessage('Error al realizar la solicitud de respaldo');
    }
  };

  return (
    <div>
      <UserBadge  />
      <Sidebar />
      <Respaldo1 />
      <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '300px', marginTop: '40px' }}>
        <CustomButton style={{ padding: '50px 80px' }} onClick={handleBackup}>Realizar Respaldo</CustomButton>
      </div>
      <div>{backupMessage}</div>
    </div>
  );
};

export default Respaldo;
