import React from 'react'
import styled from 'styled-components';
import Context from './context/Context';

const Button = styled.div`
color:blue;
cursor:pointer;
font-size:20px;
`
const Center = styled.div`
display:grid;
justify-content:center;
`

export default function Favorite() {
  return (
   <Context.Consumer>
    {({ConfirmFavorites}) => 
     <Center>
       <Button onClick={ConfirmFavorites}>
        Confirmar Favoritos
       </Button>
     </Center>
  }
   </Context.Consumer> 
  )
}

