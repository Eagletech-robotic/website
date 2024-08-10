import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Root from './Root'
import Post, { loader as postLoader } from './pages/Post/index'

import 'katex/dist/katex.min.css'
import './styles/reset.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/blog/posts/:postId',
                element: <Post />,
                loader: postLoader,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
