import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getIdxSign from '../Components/GetIdxSign';
import Modal from '../Components/Modal';

import './home.css';

const Home = () => {
  const date = new Date();
  const year = date.getFullYear();
  const input = useRef();
  const [index, setIndex] = useState(0);
  const [sign, setSign] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [allSign, setAllSign] = useState([]);
  const idxSignYear = getIdxSign(year);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ltruchot/es3-to-esnext-challenges/master/011-horoscope_chinois/signes.json')
      .then((res) => res.json())
      .then((data) => setAllSign(data));
  }, []);

  const getSign = () => {
    const idx = getIdxSign(input.current.value);
    setIndex(idx);
    setSign(allSign[idx].nom);
    setModalVisible(true);
  };
  return (
    <div className="margin">
      <h1 className="title-home">Chinois {year}</h1>

      {allSign[idxSignYear]
        ? (
          <div className="flex-wrap-around">
            <div className="intro">
              <p>Connaissez-vous le zodiaque chinois ? Il comprend douze signes
                comme en astrologie occidentale,mais les symboles sont différents
                : on ne parle pas de bélier ou de gémeaux, mais de dragon, de singe, de coq etc.
                Selon les interprétations, certains animaux sont variables :
                le buffle est aussi parfois appelé boeuf, on parle de chat,
                de lapin ou de lièvre,
                le bouc est la chèvre ou le mouton selon les cas, et le
                cochon et le sanglier partagent
                également un même signe. Autre point distinctif, chaque
                signe dure une année entière.
                Les signes chinois sont yin ou yang, et se combinent
                également avec cinq éléments :
                bois, feu, terre, métal et feu, eux aussi
                spécifiques à chaque année de naissance,
                ce qui donne des compositions du type “rat de bois” ou “cochon de métal”.
              </p>
            </div>
            <div className="horoscope-year">
              <p>
                En {year}, c&apos;est l&apos;année du <span>{allSign[idxSignYear].nom}</span> !
              </p>
              <p>
                {allSign[idxSignYear].description}
              </p>
            </div>
            <div>
              <img
                className="img-home"
                src={`img/${allSign[idxSignYear].img}`}
                alt="Horoscope de l'année"
              />
            </div>
          </div>
        ) : null}

      <div className="test margin">
        <form>
          <label htmlFor="year">Si vous voulez connaitre votre signe Chinois,
            entrez votre année de naissance :
          </label>
          <input type="number" id="year" ref={input} placeholder="Ex : 1991" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline" />
          <button
            type="button"
            onClick={getSign}
            className="p-2 text-center border-t-8 border-red-500 w-24 rounded-tr-full rounded-br-lg shadow-md hover:shadow-lg focus:outline-none"
          >Entrer
          </button>
        </form>
        <Link to="/horoscope_chinois"><button className="button-link" type="button">Tous les signes</button></Link>
      </div>
      {allSign[index]
        ? (
          <Modal title="Vous êtes : " visible={modalVisible} closeModal={() => setModalVisible(false)}>
            <h2>{sign}</h2>
            <p>{allSign[index].description}</p>
          </Modal>
        ) : null}
    </div>
  );
};

export default Home;
