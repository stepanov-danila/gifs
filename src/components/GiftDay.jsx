import styled from '@emotion/styled'
import { CardGiftcard, Lock, LockOpen } from '@mui/icons-material';
import { Button as MuiButton, Card as MuiCard, Dialog, Typography as MuiTypography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Typography = styled(MuiTypography)`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
`
const GetText = styled(MuiTypography)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%, 50%);
  color: white;
  font-size: 14px;
  width: 100%;
`

const Card = styled(MuiCard)`
  height: 400px;
  width: 400px;  
`
const RecievedText = styled(MuiTypography)`
  color: white;
  font-weight: bold;
  font-size: 24px;
  line-height: 1.2; 
  margin: 0;
  border: 4px solid white;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-25deg);
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
`

const LockIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;  
`

const GiftIcon = styled.div`
  svg {
    height: 80px;
    width: 80px;
  }
`

const GiftDay = ({
  date,
  gift,
  background,
}) => {
  const [open, setOpen] = useState(false);
  const [locked, setLocked] = useState(true);
  const [recieved, setRecieved] = useState(false);

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

    console.log(gitfDayDate);

    const gitfDayDateDay = gitfDayDate.getDate();
    const gitfDayDateMonth = gitfDayDate.getMonth();
    const gitfDayDateYear = gitfDayDate.getFullYear();

    if (
      todayDay >= gitfDayDateDay
      && todayMonth >= gitfDayDateMonth
      && todayYear >= gitfDayDateYear
    ) {
      setTimeout(() => {
        setLocked(false)
      }, 1000);
    } else {
      setTimeout(() => {
        setLocked(true)
      }, 1000);
    }
  }, [date]);  

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
            <>
              <LockIcon>
                {locked ? <Lock /> : <LockOpen />}
              </LockIcon>
              <GiftIcon>
                <CardGiftcard />
              </GiftIcon>
              
              {
                !locked && (
                  <GetText>Получить подарок</GetText>
                )
              } 
            </>       
          )
        }
      </GiftDayContainer>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <Card>
          <Typography>{gift}</Typography>
          <MuiButton onClick={() => {
            handleClose();            
            setTimeout(() => {
              setRecieved(true);
            }, 500);
          }}>OK</MuiButton>
        </Card>
      </Dialog>
    </>
  )
}

export default GiftDay