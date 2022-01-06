import * as React from 'react';
import { navigate } from 'gatsby';

const Redirect = () => {
  React.useEffect(() => {
    navigate('/');
  }, []);
  return null;
};

export default Redirect;
