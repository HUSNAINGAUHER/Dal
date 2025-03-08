import { useTransactions } from '@/hooks/useTransactions';
import { formatCurrency } from '@/utils/formatters';
import { Transaction } from '@dal/common/entity';
import { TransactionType } from '@dal/common/entity/Transaction';

export const TransactionList = () => {
  const { data: transactions, isLoading } = useTransactions();
  return (
    !isLoading &&
    !!transactions?.length && (
      <div className="bg-card rounded-xl shadow-sm divide-y divide-border">
        {transactions?.map(transaction => (
          <TransactionCard transaction={transaction} />
        ))}
      </div>
    )
  );
};

export const TransactionCard = ({
  transaction,
}: {
  transaction: Transaction;
}) => {
  return (
    <div
      key={transaction.ID}
      className="p-4 hover:bg-accent/50 transition-colors"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center
          ${
            transaction.type === TransactionType.CREDIT
              ? 'bg-green-100 text-green-600'
              : 'bg-red-100 text-red-600'
          }`}
          >
            {transaction.type === TransactionType.CREDIT ? '↓' : '↑'}
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              {new Date(transaction.timestamp).toLocaleString()}
            </p>
          </div>
        </div>
        <p
          className={`font-semibold ${
            transaction.type === TransactionType.CREDIT
              ? 'text-green-600'
              : 'text-red-600'
          }`}
        >
          {transaction.type === TransactionType.CREDIT ? '+' : '-'}{' '}
          {formatCurrency(transaction.amount)}
        </p>
      </div>
    </div>
  );
};
