import React, { useCallback, useEffect, useState } from 'react'
import { data } from './data';
import GiftDayGrid from './components/GiftDayGrid';
import _ from 'lodash';
import styled from '@emotion/styled';
import Light from './components/Light';

const AppContainer = styled.main`
  position: relative;
` 

const App = () => {
  const [giftDays, setGiftDays] = useState([]);

  const handleLock = useCallback(
    (id) => {
      const cloned = _.clone(giftDays);

      const index = cloned.findIndex((item) => item.id === id);

      
      if (index !== -1) {
        cloned[index].locked = false;
        setGiftDays(cloned);
        localStorage.setItem("gifts", JSON.stringify(cloned));
      }
    },
    [giftDays],
  );

  const handleRecieve = useCallback(
    (id) => {
      const cloned = _.clone(giftDays);

      const index = cloned.findIndex((item) => item.id === id);

      if (index !== -1) {
        cloned[index].recieved = true;
        setGiftDays(cloned);
        localStorage.setItem("gifts", JSON.stringify(cloned));
      }
    },
    [giftDays],
  );
  
  useEffect(() => {   
    const storaged = localStorage.getItem("gifts");
    if (storaged) {
      setGiftDays(JSON.parse(storaged));
    } else {
      setGiftDays(data);
      localStorage.setItem("gifts", JSON.stringify(data));
    }
  }, []);  

  return (
    <AppContainer>
      <Light />
      <GiftDayGrid
        giftDays={giftDays}
        handleLock={handleLock} 
        handleRecieve={handleRecieve}         
      />
    </AppContainer>
  )
}

export default App