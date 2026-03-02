import { Button, Typography, Container } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../hooks/reduxHooks'
import { increment } from '../store/exampleSlice'

export default function Home() {
  const value = useAppSelector((state) => state.example.value)
  const dispatch = useAppDispatch()

  return (
    <Container style={{ textAlign: 'center', marginTop: '20vh' }}>
      <Typography variant="h3">🚀g</Typography>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Counter: {value}
      </Typography>
      <Button variant="contained" sx={{ mt: 3 }} onClick={() => dispatch(increment())}>
        Increment
      </Button>
    </Container>
  )
}
