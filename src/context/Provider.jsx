import { useState, useMemo, useEffect } from 'react';
import { node } from 'prop-types';
import LaContext from './LaContext';

export default function ContextProvider({ children }) {
  const accountInfo = { name: '', email: '', password: '', phone: 0 };

  const [isAuth, setAuth] = useState(false);
  const [formInfo, setForm] = useState(accountInfo);


  const contextValue = useMemo(() => (
    {
      isAuth,
      setAuth,
      formInfo,
      setForm,
    }), [isAuth, formInfo]);

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const apiResponse = await fetchPlanets();
  //     apiResponse?.forEach((planet) => {
  //       delete planet.residents;
  //     });
  //     setAllPlanets(apiResponse);
  //     setPlanets(apiResponse);
  //   };
  //   fetchApi();
  // }, []);

  return (
    <LaContext.Provider value={ contextValue }>
      {children}
    </LaContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: node.isRequired,
};