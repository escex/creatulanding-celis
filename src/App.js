import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import ItemListContainer from './components/ItemListContainer';

import Alina from './imagenes/alina.jpg';
import Domingo from './imagenes/domingo.jpg';
import Lafi from './imagenes/lafi.jpg';
import Milu from './imagenes/milu.jpg';
import Impostor from './imagenes/impostor.jpg';

function App() {

  const [showItemList, setShowItemList] = useState(false);

  const handleCartClick = () => {
    setShowItemList(!showItemList);
  };

  return (
    <div className="App AppStyle">
        <Header title="Perritos" onCartClick={handleCartClick}/>
        {showItemList && <ItemListContainer title="Item List" description="This is the item list container." />}
      <div className='CardStyle'>
        <ProfileCard titulo="Alina" descripcion="Loca, energetica, tierna" img={Alina} />
        <ProfileCard titulo="Domingo" descripcion="Tranquilo, Jugueton, T.E.A." img={Domingo} />
        <ProfileCard titulo="Lafi" descripcion="Regalona, Cuidadora, Dormilona" img={Lafi} />
        <ProfileCard titulo="Milú" descripcion="Regalona, Pacifica, Asustadiza" img={Milu} />
        <ProfileCard titulo="Tigere" descripcion="Tierno, Hambriento, Alegre" img={Impostor} /> 
      </div>
    </div>
  );
}

export default App;
