import React, { useState } from 'react';

export const Context = React.createContext<any>({});

export const ContextProvider = (props: any) => {
  const [players, setPlayers] = useState(-1);
  const [gaps, setGaps] = useState(-1);
  const [openConfig, setOpenConfig] = useState(false);

  return <Context.Provider value={{ players, setPlayers, openConfig, setOpenConfig, gaps, setGaps }}>{props.children}</Context.Provider>;
};
