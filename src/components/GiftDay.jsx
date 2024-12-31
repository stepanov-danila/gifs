import styled from '@emotion/styled'
import { Button as MuiButton, Card as MuiCard, Dialog, Typography as MuiTypography, IconButton, TextField } from '@mui/material';
import React, { memo, useEffect, useState } from 'react';
import { MdClose, MdOutlineLockClock } from "react-icons/md";
import { IoMdGift } from "react-icons/io";
import Light from './Light';


const Typography = styled(MuiTypography)`
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: white;
  font-family: 'Yatra One', sans-serif;
  font-size: 20px;
  line-height: 1;
`

const Card = styled(MuiCard)`
  background: #fff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  p {
    font-family: 'Yatra One', sans-serif;
    font-size: 16px;
    line-height: 1.4;
    text-wrap: balance;
    text-align: center;
    margin: 0;
  }

  

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
  font-family: 'Yatra One', sans-serif;
  
  &.Mui-disabled {
    color: #fff;
  }
`

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 5px;
  right: 5px;
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
  const [giftName, setGiftName] = useState("");

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
      handleLock(id);
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
          <CloseButton onClick={handleClose}><MdClose /></CloseButton>
            <img src={'https://psv4.userapi.com/s/v1/d/Ryr09VVH0fpPw7k5nklmTE-Gy_zu3b3BWWvnzgx5IqsdeMc07krKKpXeTZLDhfc02SsTrZWfGdjuuQ5A7cjO8_n6xkq56-xh7Wwrd7SyNE1G0EkjPd6OKA/frame.png'} />
        </Card>
      </Dialog>
    </>
  )
}

export default memo(GiftDay)