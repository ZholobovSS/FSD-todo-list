import classNames from 'classnames'
import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from 'shared/ui'

import styles from './styles.module.scss'

export const Header: FC = () => (
  <>
    <header className={styles.headerWr}>
      <Link to='/'>
        <Logo size='L' />
      </Link>
      <div className='ms-auto'>
        <NavLink
          className={({ isActive }) => classNames({ [styles.isActive]: isActive })}
          to='/todos'
        >
          Todos
        </NavLink>
      </div>
    </header>
    <hr />
  </>
)
