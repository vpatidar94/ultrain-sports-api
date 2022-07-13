
const ENV_URL = ''; // producation fn

const BASE = ENV_URL + '/api';// + '/api/edu/v1';
const BASE_CORE = ENV_URL + '/core/v1';

// Common operations
const PARTLY_UPDATE = '/partly-update';
const ADD_UPDATE = '/add-update';
const ADD_UPDATE_ALL = '/add-update-all';
const DELETE = '/delete';
const LIST = '/list';
const DETAIL = '/detail';

// ************************************************************************************************
// ***************************************          CORE          **********************************
// ************************************************************************************************
// major operations  api/...
/**
 * END_POINT URL
 */
export const URL = {

    ADD_UPDATE,
    LIST,

    MJR_TX: BASE_CORE + '/tx',
    MJR_VEHICLE: BASE_CORE + '/vehicle',
    MJR_USER: BASE_CORE + '/user',
    MJR_ROUTE_COUNTER: BASE_CORE + '/route-counter',

    VEHICLE_LIST: LIST,
    // ORDER: MJR_TX + '/order',
    // TX_HISTORY: MJR_TX + '/history',
    ORDER_ALL: '/order-all',
    ORDER_BY_NAME: '/order-by-name',

    AUTH: '/authenticate',
    CHANGE_PASSWORD: '/update-password',

    EMP_ADD_UPDATE: '/emp-add-update',
    CUST_ADD_UPDATE: '/cust-add-update',
    EMP_LIST: '/emp-list',
    CUST_LIST: '/cust-list'
};
