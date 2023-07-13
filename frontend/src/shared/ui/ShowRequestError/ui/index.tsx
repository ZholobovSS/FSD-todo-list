import { QueryObserverBaseResult } from '@tanstack/react-query'
import classNames from 'classnames'
import { FC } from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import { getMessageFromError } from 'shared/lib'
import styles from './styles.module.scss'

interface ShowRequestErrorProps extends Pick<QueryObserverBaseResult, 'refetch'> {
  error: unknown
}

export const ShowRequestError: FC<ShowRequestErrorProps> = ({ error, refetch }) => {
  return (
    <div className={classNames('p-4', styles.wr)}>
      <FiAlertCircle size={48} className='mb-3' />
      <p className='text-secondary-emphasis mb-2'>Network error</p>
      <p className='mb-4 h5'>{getMessageFromError(error)}</p>
      <button type='button' className='btn btn-primary' onClick={() => refetch()}>
        Попробовать снова
      </button>
    </div>
  )
}
