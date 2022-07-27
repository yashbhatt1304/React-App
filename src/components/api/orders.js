import { apiGetRequest } from './utils';
import { apiPostRequest} from './utils';

function getOrder(id) {
  console.log('in orders.js    orders/' + id);
  return apiGetRequest('GET', 'orders/' + id);
}

function postOrder(orderDetails) {
  console.log('in orders.js    orders/'+orderDetails);
  return apiPostRequest('POST', 'orders/' , orderDetails);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getOrder, postOrder};