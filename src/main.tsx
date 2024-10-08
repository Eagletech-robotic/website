import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Root from './Root'
import Post, { loader as postLoader } from './pages/Post/index'

import 'katex/dist/katex.min.css'
import './styles/reset.css'
import Home from './pages/Home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'blog',
                children: [
                    {
                        path: '',
                        element: <Blog />,
                    },
                    {
                        path: 'posts/:postId',
                        element: <Post />,
                        loader: postLoader,
                    },
                ],
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
