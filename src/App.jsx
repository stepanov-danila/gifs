import React, { useEffect, useState } from 'react'
import { data } from './data';
import GiftDayGrid from './components/GiftDayGrid';

const App = () => {
  const [giftDays, setGiftDays] = useState([]);

  useEffect(() => {
    setGiftDays(data);
  }, []);  

  return (
    <main>
      <GiftDayGrid giftDays={giftDays} />
    </main>
  )
}

export default App