
import { Container } from '@mui/material'
import './Home.css'
import Shop from '../components/Shop'

export default function Home() {

  return (
    <Container style={{ textAlign: 'center', marginTop: '20vh' }}>
      <Shop></Shop>
    </Container>
  )
}
