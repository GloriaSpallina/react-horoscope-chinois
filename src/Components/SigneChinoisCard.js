import PropTypes from 'prop-types';
import { useState } from 'react/cjs/react.development';

function SigneChinoisCard({
  nom, description, img,
}) {
  const [descrip, setDescrip] = useState(description.substring(0, 150));
  return (
    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 bg-black text-white">
      <img className="border-solid border-t-2 border-l border-black" src={`img/${img}`} alt={nom} />
      <h2 className="text-center text-3xl">{nom}</h2>
      <p className="text-xl text-justify px-8">{descrip}</p>
      <button className="p-2 px-8 border-2 border-red-600 rounded-lg mb-8 mt-4 ml-8" type="button" onClick={() => { setDescrip(description); }}>Lire la suite</button>
    </div>
  );
}
SigneChinoisCard.propTypes = {
  nom: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,

};
export default SigneChinoisCard;
