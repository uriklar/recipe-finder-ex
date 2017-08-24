import React from 'react';

import loaderGif from '../../assets/images/loader.gif';
import '../../assets/stylesheets/components/common/loader.css';

const Loader = ({ loaded }) => {
  if (loaded) {
    return null;
  }

  return (
    <div className="loader">
      <img src={ loaderGif } alt=""/>
    </div>
  );
};

export default Loader;
