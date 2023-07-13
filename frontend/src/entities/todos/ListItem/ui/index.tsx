import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Todo } from 'shared/model'
import styles from './styles.module.scss'

interface ListItemProps extends Todo {
  index: number
  actions?: ReactNode
}

export const ListItem: FC<ListItemProps> = ({ id, status, title, index, actions }) => {
  return (
    <Link to={id}>
      <li className={classNames('list-group-item', styles.wr)}>
        <div className={classNames(styles.info, 'lead')}>
          <span className='text-muted'>{index + 1}.&nbsp;</span>
          <span className={classNames({ [styles.done]: status })}>{title}</span>
        </div>
        <div>{actions}</div>
      </li>
    </Link>
  )
}
