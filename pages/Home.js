import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [invoices, setInvoices] = useState([]);
  const navigate = useNavigate();

  // Fetch invoices from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/invoices")
      .then(res => setInvoices(res.data))
      .catch(err => console.error(err));
  }, []);

  // Delete invoice
  const deleteInvoice = (id) => {
    axios
      .delete(`http://localhost:5000/invoices/${id}`)
      .then(() => {
        setInvoices(invoices.filter(inv => inv.id !== id));
      });
  };

  return (
    <div>
      <h2>Invoices</h2>
      <button onClick={() => navigate("/invoice")}>Add Invoice</button>

      <table border="1">
        <thead>
          <tr>
            <th>Invoice No</th>
            <th>Client</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(inv => (
            <tr key={inv.id}>
              <td>{inv.invoiceNumber}</td>
              <td>{inv.clientName}</td>
              <td>{inv.amount}</td>
              <td>{inv.status}</td>
              <td>
                <button onClick={() => deleteInvoice(inv.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
