import styled from '@emotion/styled';
import React from 'react';
import GiftDay from './GiftDay';

const GiftDayContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  padding: 10px;
` 

const GiftDayGrid = ({ giftDays }) => {
  return (
    <GiftDayContainer>
      {giftDays.map(
        (giftDay) => (
          <GiftDay
            {...giftDay}
          />
        )
      )}
    </GiftDayContainer>
  )
}

export default GiftDayGrid