import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './common.css';
import './index.css';
import WeatherBlock from './WeatherBlock';
import PrefModal from './prefModal';



const Main = ()=>{

  const [lat,changeLat] = useState('35.616900');
  const [lon,changeLon] = useState('139.740739');
  const [prefName,changePref] = useState('東京');
  const [modalState,changeState] = useState(false);

  const openModal = (()=>{
    changeState(true);
  });

  const closeModal = (()=>{
    changeState(false);
  })
  


  return(
    <>
    <WeatherBlock
      lat={lat}
      lon={lon}
      name={prefName}
      state={openModal}
    />

    <PrefModal
      state={modalState}
      changeState={closeModal}
      changeLat={changeLat}
      changeLon={changeLon}
      changePref={changePref}
    />



    </>
  );

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);