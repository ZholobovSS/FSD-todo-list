import { createBrowserRouter } from 'react-router-dom'
import { App } from 'app/App'
import { MainPage } from 'pages/Main'
import { TodoDetailPage } from 'pages/TodoDetail'
import { TodosPage } from 'pages/Todos'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'todos',
        element: <TodosPage />,
      },
      {
        path: 'todos/:id',
        element: <TodoDetailPage />,
      },
    ],
  },
])
