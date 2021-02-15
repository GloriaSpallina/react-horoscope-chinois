import { useState, useEffect } from 'react';

import SignesChinoisCards from '../Components/SignesChinoisCards';

const HoroscopeChinois = () => {
  const [allSign, setAllSign] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ltruchot/es3-to-esnext-challenges/master/011-horoscope_chinois/signes.json')
      .then((res) => res.json())
      .then((data) => setAllSign(data));
  }, []);

  return (
    <div className="pt-12">
      <SignesChinoisCards data={allSign} />
    </div>
  );
};

export default HoroscopeChinois;
