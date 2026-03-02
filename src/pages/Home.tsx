import { Button, Typography, Container } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../hooks/reduxHooks'
import { increment } from '../store/exampleSlice'
import { reset } from '../store/corruptionSlice'

export default function Home() {
  const value = useAppSelector((state) => state.corruption.value)
  const dispatch = useAppDispatch()

  return (
    <Container style={{ textAlign: 'center', marginTop: '20vh' }}>
      <Typography variant="h3">🚀</Typography>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Corruption: {value}%
      </Typography>
      <Button variant="contained" sx={{ mt: 3 }} onClick={() => dispatch(reset())}>
        Reset
      </Button>
    </Container>
  )
}
