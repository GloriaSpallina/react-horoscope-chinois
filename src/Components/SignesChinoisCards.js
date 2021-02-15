// import signes from '../data/signes';
import PropTypes from 'prop-types';
import SigneChinoisCard from './SigneChinoisCard';

function SignesChinoisCards({ data }) {
  return (
    <div className="flex flex-wrap">
      {data.map((el) => (
        <SigneChinoisCard
          nom={el.nom}
          description={el.description}
          img={el.img}
          key={data.id}

        />
      ))}

    </div>
  );
}
SignesChinoisCards.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,

};
export default SignesChinoisCards;
