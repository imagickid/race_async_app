import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import { CarProvider } from './contexts/CarContext';

import AppLayout from './ui/AppLayout';
import Garage from './pages/Garage';
import Winners from './pages/Winners';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <CarProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="garage" />} />
            <Route path="/" element={<AppLayout />}>
              <Route path="garage" element={<Garage />} />
              <Route path="winners" element={<Winners />} />
            </Route>
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '18px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: '#12dae5',
              color: '#0d8830',
            },
          }}
        />
      </CarProvider>
    </QueryClientProvider>
  );
}

export default App;
