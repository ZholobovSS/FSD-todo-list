import { FC } from 'react'

import styles from './styles.module.scss'

export const Spinner: FC = () => (
  <div className='d-flex justify-content-center'>
    <div className={styles['lds-ripple']}>
      <div />
      <div />
    </div>
  </div>
)
