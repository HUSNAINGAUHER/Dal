import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Dashboard />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
