import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

type TransactionProps = {
  type: boolean
  title: string;
  datetime: string;
  amount: number;
};

export default function CardTransacoes({ type, title, datetime, amount }: TransactionProps) {

  return (
    <div className="bg-[#1E1E2D] p-4 rounded-md flex justify-between items-center">
      <div className="flex items-start gap-3">
        <div className={`rounded-full p-1 ${!type ? 'bg-green-700' : 'bg-red-700'}`}>
          {!type ? (
            <ArrowDownCircle className="text-white w-5 h-5" />
          ) : (
            <ArrowUpCircle className="text-white w-5 h-5" />
          )}
        </div>
        <div>
          <p className="text-white font-medium">{title}</p>
          <p className="text-gray-400 text-sm">{datetime}</p>
        </div>
      </div>
      <div className={`font-semibold ${type ? 'text-green-400' : 'text-red-400'}`}>
        {!type ? `+${amount}` : `-${amount}`}
      </div>
    </div>
  );
}
