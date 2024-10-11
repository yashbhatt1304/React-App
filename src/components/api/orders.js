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

function getProduct(id) {
  console.log('in orders.js    products/' + id);
  return apiGetRequest('GET', 'products/' + id);
}

function postProduct(productDetails) {
  console.log('in orders.js    products/'+productDetails);
  return apiPostRequest('POST', 'products/' , productDetails);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getOrder, postOrder, postProduct, getProduct};