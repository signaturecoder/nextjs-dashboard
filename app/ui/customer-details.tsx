import { customObj } from '../dashboard/customers/page';
import { fetchCustomers } from '../lib/data';

interface CustomerDetailProps {
  someName: string;
  dataObj: customObj
}

export const CustomerDetail = async ({ dataObj, someName }: CustomerDetailProps) => {
  const customers = await Promise.all(Object.values(dataObj));
  const finalCustomers = customers.reduce((acc, customer) => {
    const key = Object.keys(customer)[0];
    const value = customer[key];
    acc[key] = value;
    return acc;
  }, {})
//   console.log('Customers', customers);
  console.log('Final Customers', finalCustomers);
  return (
    <>
      <div>
        <h3>Match: {finalCustomers[someName]}</h3>
        {/* <h3>Match 1: {customers[1][someName]}</h3> */}
        <p>{someName}</p>
        {/* <p>{customers.map(custName => custName.name === name ? <span>{custName.name}: {custName.id}</span> : null)}</p> */}

      </div>
    </>
  );
};

/**
 * when you resolved that promise, you need to print the value of that particular customer
 */
