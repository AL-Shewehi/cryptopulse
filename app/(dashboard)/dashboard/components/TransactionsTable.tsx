import React from "react";

const transactions = [
  {
    id: "#12345",
    date: "2023-06-01",
    type: "Deposit",
    amount: "$100",
    status: "completed",
  },
  {
    id: "#12346",
    date: "2023-06-02",
    type: "Withdrawal",
    amount: "$50",
    status: "pending",
  },
  {
    id: "#12347",
    date: "2023-06-03",
    type: "Deposit",
    amount: "$200",
    status: "completed",
  },
  {
    id: "#12348",
    date: "2023-06-04",
    type: "Withdrawal",
    amount: "$75",
    status: "completed",
  },
  {
    id: "#12349",
    date: "2023-06-05",
    type: "Deposit",
    amount: "$150",
    status: "cancelled",
  },
];

export default function TransactionsTable() {
  return (
    <div className="bg-card/50 backdrop-blur-md border border-border p-6 rounded-2xl shadow-sm w-full">
      <div className=" mb-6">
        <h3 className="text-lg font-bold">Transactions</h3>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full text-center">
          <thead className="text-sm text-muted-foreground uppercase border-b border-border">
            <tr className="text-muted-foreground">
              <th className="p-2">ID</th>
              <th className="p-2">Date</th>
              <th className="p-2">Type</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id}>
                <td className="p-2">{tx.id}</td>
                <td className="p-2 whitespace-nowrap">{new Date(tx.date).toLocaleDateString("en-US")}</td>
                <td className="p-2">{tx.type}</td>
                <td className="p-2">{tx.amount}</td>
                <td
                  className={`p-2 capitalize ${
                    tx.status === "completed"
                      ? "text-blue-500"
                      : tx.status === "pending"
                        ? "text-yellow-500"
                        : tx.status === "cancelled"
                          ? "text-red-500"
                          : ""
                  }
                  `}
                >
                  {tx.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
