import styled from '@emotion/styled'
import { Button as MuiButton, Card as MuiCard, Dialog, Typography as MuiTypography } from '@mui/material';
import React, { memo, useEffect, useState } from 'react';
import { MdOutlineLockClock } from "react-icons/md";
import { IoMdGift } from "react-icons/io";


const Typography = styled(MuiTypography)`
  position: absolute;
  top: 15px;
  left: 15px;
  color: white;
  font-family: 'Archivo Black', cursive;
  font-size: 24px;
  line-height: 1;
`

const Card = styled(MuiCard)`

`
const RecievedText = styled(MuiTypography)`
  color: white;
  font-weight: bold;
  font-size: 24px;
  line-height: 1.2; 
  margin: 0;
  border: 4px solid white;
  border-radius: 20px;
  transform: rotate(-25deg);
  padding: 5px 15px;
  text-transform: uppercase;
`

const GiftDayContainer = styled(MuiButton)`
  background: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;  
  position: relative;
  font-family: 'Archivo Black', cursive;
  
  &.Mui-disabled {
    color: #fff;
  }
`
const Icon = styled.div`
  margin-top: 10px;
  svg {
    height: 80px;
    width: 80px;
  }
`

const GiftDay = ({
  id, 
  date,
  gift,
  background,
  locked,
  recieved,
  handleLock,
  handleRecieve
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const today = new Date();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    const gitfDayDate = new Date(date);

    const gitfDayDateDay = gitfDayDate.getDate();
    const gitfDayDateMonth = gitfDayDate.getMonth();
    const gitfDayDateYear = gitfDayDate.getFullYear();

    console.log(locked);
    if (
      locked &&
      todayDay >= gitfDayDateDay
      && todayMonth >= gitfDayDateMonth
      && todayYear >= gitfDayDateYear
    ) {
      setTimeout(() => {
        handleLock(id);
      }, 300);
    } 
  }, [id, date, handleLock, locked]);  

  return (
    <>
      <GiftDayContainer
        style={{ background }}
        onClick={handleClickOpen}
        disabled={recieved || locked}
      >
        <Typography>{new Date(date).toLocaleDateString()}</Typography>
        {recieved ?
          <>
            <RecievedText>Получен</RecievedText>
          </>
          : (
            <Icon>
              {locked ? <MdOutlineLockClock /> : <IoMdGift />}              
            </Icon>       
          )
        }
      </GiftDayContainer>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <Card>
          <Typography>{gift}</Typography>
          <MuiButton variant='contained' onClick={() => {
            handleClose();            
            setTimeout(() => {
              handleRecieve(id);
            }, 500);
          }}>Получить подарок</MuiButton>
        </Card>
      </Dialog>
    </>
  )
}

export default memo(GiftDay)