import { FC } from 'react'

export const Footer: FC = () => (
  <footer className='mt-auto mb-3'>
    <hr />
    <div className='text-secondary'>&copy; Copyright: {new Date().getFullYear()}</div>
  </footer>
)
