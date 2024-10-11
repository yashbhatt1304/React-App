import { apiGetRequest } from './ordersUtils';
import { apiPostRequest} from './ordersUtils';

function getOrder(id) {
  console.log('Request for order details with order number: ' + id);
  return apiGetRequest('GET', 'orders/' + id);
}

function postOrder(orderDetails) {
  console.log('Request for new order creation: '+ JSON.stringify(orderDetails));
  return apiPostRequest('POST', 'orders/' , orderDetails);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getOrder, postOrder};