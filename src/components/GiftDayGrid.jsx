import styled from '@emotion/styled';
import React, { memo } from 'react';
import GiftDay from './GiftDay';

const GiftDayContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 10px;
  padding: 10px;
` 

const GiftDayGrid = ({ giftDays, handleLock, handleRecieve }) => {
  return (
    <GiftDayContainer>
      {giftDays.map(
        (giftDay) => (
          <GiftDay
            key={giftDay.id}
            {...giftDay}
            handleLock={handleLock}
            handleRecieve={handleRecieve}
          />
        )
      )}
    </GiftDayContainer>
  )
}

export default memo(GiftDayGrid);