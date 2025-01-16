import './App.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Banner } from './components/Banner';
import { Products } from './components/Products';
import { PopOver } from './components/PopOver';
import { SingleProducts } from './components/SingleProducts';

const queryClient = new QueryClient();

function App() {
 
  return (
    <QueryClientProvider client={queryClient}>
      <Banner />
      <Products />
      <SingleProducts/>
    </QueryClientProvider>
  )
}

export default App
