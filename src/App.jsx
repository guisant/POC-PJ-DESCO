import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'
//import Preview2 from './PDF/model2/Preview2'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import Preview from './PDF/model/Preview'

export default function App() {
  const [profile, setProfile] = useState({
    type: 'Profile',
    name: 'Guilherme',
    profession: 'Estagiario',
    display: true,
    address: 'loremloremlorem'
  })

  const handleChange = (name, value) => {
    setProfile({ ...profile, [name]: value })
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
      }}
    >
      <div style={{ width: '50%' }}>
        <div>
          <label>Nome: </label>
          <Input 
            defaultValue={profile.name}
            name='name'
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
          />
        </div>
        <div>
          <label>Profissão: </label>
          <Input
            name='profession'
            defaultValue={profile.profession}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
          />
        </div>
        <div>
          <label>Endereço: </label>
          <Input
            name='address'
            defaultValue={profile.address}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
          />
        </div>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Pré-Visualizar
        </Button>  
      </div>
      <Drawer
          isOpen={isOpen}
          placement='right'
          size='lg'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <Preview profile={profile} />
          </DrawerContent>
        </Drawer>
    </div>
  )
}
