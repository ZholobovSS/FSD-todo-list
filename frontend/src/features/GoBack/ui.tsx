import { FC, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export const GoBack: FC = () => {
  const navigate = useNavigate()

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    navigate('..', { relative: 'path' })
  }

  return (
    <button type='button' onClick={clickHandler} className='btn btn-dark mx-1'>
      Go Back
    </button>
  )
}
