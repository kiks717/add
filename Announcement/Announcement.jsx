import React from 'react'
import styled from 'styled-components'
const AnnContainer = styled.div`
  height:30px;
  background:var(--color-golden);
  color: #fff;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:500;

`
/*  position:fixed;
  z-index:2;
  width:100%;
  height:100%; */
const Announcement = () => {
  return (
    <div>
      <AnnContainer>
      Super Deal! Free shiping on Orders Over $50!
      </AnnContainer>
    </div>
  )
}

export default Announcement
