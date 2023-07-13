import { FC, MouseEvent } from 'react'
import { Todo } from 'shared/model'
import { useChangeStatus, UseChangeStatusParams } from './api'

type ChangeStatusProps = Pick<Todo, 'id' | 'status'> & UseChangeStatusParams

export const ChangeStatus: FC<ChangeStatusProps> = ({ id, status, invalidateQueriesKeys }) => {
  const { mutateAsync } = useChangeStatus({ invalidateQueriesKeys })
  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    mutateAsync({ id, status: !status })
  }

  return (
    <button type='button' onClick={clickHandler} className='btn btn-primary mx-1'>
      {status ? 'Undone' : 'Done'}
    </button>
  )
}
