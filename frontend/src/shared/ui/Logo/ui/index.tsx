import classNames from 'classnames'
import { FC } from 'react'
import styles from './styles.module.scss'

type LogoSizeTypes = 'L' | 'M' | 'S'

interface LogoProps {
  size: LogoSizeTypes
}

export const Logo: FC<LogoProps> = ({ size }) => {
  return <div className={classNames(styles.logoWr, styles[`size_${size}`])}>let&apos;s do</div>
}
