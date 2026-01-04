import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InvoiceForm() {
  const [invoice, setInvoice] = useState({
    invoiceNumber: "",
    clientName: "",
    date: "",
    amount: "",
    status: ""
  });

  const navigate = useNavigate();

  const submitInvoice = () => {
    if (Object.values(invoice).includes("")) {
      alert("All fields are required");
      return;
    }

    axios
      .post("http://localhost:5000/invoices", invoice)
      .then(() => navigate("/home"))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Add Invoice</h2>

      <input
        placeholder="Invoice Number"
        onChange={e => setInvoice({ ...invoice, invoiceNumber: e.target.value })}
      />

      <input
        placeholder="Client Name"
        onChange={e => setInvoice({ ...invoice, clientName: e.target.value })}
      />

      <input
        type="date"
        onChange={e => setInvoice({ ...invoice, date: e.target.value })}
      />

      <input
        placeholder="Amount"
        onChange={e => setInvoice({ ...invoice, amount: e.target.value })}
      />

      <select
        onChange={e => setInvoice({ ...invoice, status: e.target.value })}
      >
        <option value="">Select Status</option>
        <option>Paid</option>
        <option>Unpaid</option>
        <option>Pending</option>
      </select>

      <button onClick={submitInvoice}>Save Invoice</button>
    </div>
  );
}
