import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import { Todo } from 'shared/model'
import styles from './styles.module.scss'

interface DetailProps extends Todo {
  actions?: ReactNode
}

export const Detail: FC<DetailProps> = ({ status, title, actions }) => {
  return (
    <div className={classNames(styles.wr)}>
      <div className={classNames('card', styles.content)}>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{status ? 'Выполнено' : 'Не выполнено'}</p>
          <div className={styles.actionsWr}>{actions}</div>
        </div>
      </div>
    </div>
  )
}
