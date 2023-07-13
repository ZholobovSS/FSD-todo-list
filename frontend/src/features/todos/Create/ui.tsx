import { FC, FormEvent, useState } from 'react'
import { useCreateMutation } from './api'

export const Create: FC = () => {
  const [input, setInput] = useState('')

  const { mutateAsync, isLoading } = useCreateMutation()

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const title = input.trim()

    if (title) {
      try {
        await mutateAsync({ title })
        setInput('')
      } catch (error) {
        console.log({ error })
      }
    }
  }

  return (
    <div className='d-flex justify-content-center mb-4'>
      <form onSubmit={submitHandler}>
        <div className='mb-3'>
          <input
            type='text'
            value={input}
            placeholder='Todo title here...'
            onChange={(e) => setInput(e.target.value)}
            className='form-control'
          />
        </div>

        <div className='d-flex justify-content-center'>
          <button type='submit' disabled={isLoading} className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
