import { fetchCustomers } from '@/app/lib/data';
import { CustomerField } from '@/app/lib/definitions';
import { CustomerDetail } from '@/app/ui/customer-details';

export interface customObj {
    [key: string]: Promise<unknown>
}

const dbCustomers = ['Steph Dietz', 'Lee Robinson', 'Michael Novotny','Steven Tey'];
let c = 0;
function createPromise(name: string) {
    const somePromise = new Promise((resolve, reject) => {
        console.log("First Promise");
        const obj = {
            [name]: `${name} ${c++}`
        }
        resolve(obj);
        // setTimeout((name: string) => resolve(name), 3000)
    })
    return somePromise;
}

export default function Page() {
const obj: customObj = {};
    for(const name of dbCustomers) {
        obj[name] = createPromise(name);
    }

    // const custName = dbCustomers[0]
    // console.log("OBJe", obj);
  return (
    <div>
      {dbCustomers.map((custName) => (
        <CustomerDetail key={custName} dataObj={obj} someName={custName}/>
      ))}
    </div>
  );
}

/**
 * you have to pass unresolved promise to a component
 * you need to create an object with db customer name and assign the unresolved promise to that
 */
