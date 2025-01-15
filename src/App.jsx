import './App.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Banner } from './components/Banner';
import { Products } from './components/Products';
import { PopOver } from './components/PopOver';

const queryClient = new QueryClient();

function App() {
 
  return (
    <QueryClientProvider client={queryClient}>
      <Banner />
      <Products />
      <PopOver/>
    </QueryClientProvider>
  )
}

export default App
