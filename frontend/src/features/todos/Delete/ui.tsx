import { FC, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Todo } from 'shared/model'
import { useDeleteTodo } from './api'

interface DeleteProps extends Pick<Todo, 'id'> {
  goBack?: boolean
}

export const Delete: FC<DeleteProps> = ({ id, goBack }) => {
  const { mutateAsync } = useDeleteTodo()
  const navigate = useNavigate()
  const clickHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    await mutateAsync({ id })
    if (goBack) {
      navigate('..', { relative: 'path' })
    }
  }

  return (
    <button type='button' onClick={clickHandler} className='btn btn-danger mx-1'>
      Delete
    </button>
  )
}
