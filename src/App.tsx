import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { About,HomeLayout,Landing,Error,Newsletter,Cocktail,SinglePageError } from './pages'
import {loader as landingLoader} from './pages/Landing'
import {loader as cocktailLoader} from './pages/Cocktail'
import { action as newsletterAction } from './pages/Newsletter'
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 1000*60*5
    }
  }
}
)
const route = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        loader:landingLoader(queryClient),
        errorElement:<SinglePageError/>,
        element:<Landing/>,
      },
      {
        path:'/cocktail/:id',
        loader:cocktailLoader(queryClient),
        errorElement:<SinglePageError/>,
        element:<Cocktail/>
      },
      {
        path:'/newsletter',
        action:newsletterAction,
        element:<Newsletter/>
      },
      {
        path:'/about',
        element:<About/>
      },
    ]
  }
])
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={route}/>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}
export default App