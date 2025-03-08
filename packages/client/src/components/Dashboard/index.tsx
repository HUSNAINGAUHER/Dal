import { Spin } from 'antd';
import { useTransactions } from '../../hooks/useTransactions';
import { RefreshIcon } from '@/assets/icons/Refresh';
import { TransactionList } from './TransactionList';

const Dashboard = () => {
  const { data: transactions, refetch, isLoading, error } = useTransactions();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Transactions</h1>
          <button
            onClick={() => refetch()}
            disabled={isLoading}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg
                     flex items-center gap-2 hover:bg-primary/90 transition-colors
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? <Spin /> : <RefreshIcon className="w-4 h-4" />}
            Refresh
          </button>
        </div>

        {(error as any) && (
          <div className="bg-red-100 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error as any}
          </div>
        )}

        <TransactionList />

        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <Spin />
          </div>
        )}

        {/* Transactions List */}
        {!isLoading && transactions?.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No transactions found
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
