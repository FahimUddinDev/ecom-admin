import appConfig from ".";

// api constants for api route strings
const ABOUT_US = "about-us";
const CONTACT_US = "contact-us";
const SUBSCRIBE_REQUEST = "subscribe-request";
const SEND_CONTACT_MESSAGE = "send-contact-message";
const STORE_REGISTER = "store-register";
const STORE_LOGIN = "store-login";
const USER_VERIFICATION = "user-verification";
const RESEND_REGISTER_CODE = "resend-register-code";
const SEND_FORGET_PASSWORD = "send-forget-password";
const UPDATE_PASSWORD = "user/update-password";
const STORE_RESET_PASSWORD = "store-reset-password";
const USER_DASHBOARD = "user/dashboard";
const USER_MY_PROFILE = "user/my-profile";
const WISHLISTS = "user/wishlist";
const ADD_TO_WISHLIST = "user/add-to-wishlist";
const REMOVE_FROM_WISHLIST = "user/remove-wishlist";
const CLEAR_WISHLIST = "user/clear-wishlist";
const ADD_TO_CART = "add-to-cart";
const REMOVE_CART_ITEM = "cart-item-remove";
const CLEAR_CART = "cart-clear";
const INCREMENT_QUANTITY = "cart-item-increment";
const DECREMENT_QUANTITY = "cart-item-decrement";
const PRODUCTS = "product";
const SEARCH_PRODUCT = "search-product";
const REPORT_PRODUCT = "user/product-report";
const APPLY_COUPON = "apply-coupon";
const PRODUCT_REVIEW = "user/store-product-review";
const GET_REVIEW = "user/review";
const BLOG_COMMENT = "blog-comment";
const BLOGS = "blog";
const DELETE_USER = "user/remove-account";

const MESSAGE_WITH_SELLER = "user/message-with-seller";
const SEND_MESSAGE_TO_SELLER = "user/send-message-to-seller";
const LOAD_ACTIVE_SELLER_MESSAGE = "user/load-active-seller-message";
const ADDRESS = "user/address";
const GET_GUEST_CHECKOUT_DATA = "user/checkout/guest/without-token";
const GET_CHECKOUT_DATA = "user/checkout";
const CASH_ON_DELIVERY = "user/checkout/cash-on-delivery";
const CASH_ON_DELIVERY_GUEST = "user/checkout/guest/cash-on-delivery";
const STRIPE_PAY_GUEST = "user/checkout/guest/pay-with-stripe";
const STRIPE_PAY = "user/checkout/pay-with-stripe";
const BANK_PAYMENT = "user/checkout/pay-with-bank";
const BANK_PAYMENT_GUEST = "user/checkout/guest/pay-with-bank";
const RAZORPAY_ORDER = "user/checkout/razorpay-order";
const RAZORPAY_ORDER_GUEST = "user/checkout/guest/razorpay-order";
const DRAFT_ORDER = "user/checkout/store-draft-order";
const DRAFT_ORDER_GUEST = "user/checkout/guest/store-draft-order";
const ORDERS = "user/order";
const ORDER_DETAILS = "user/order-show";
const ORDER_TRACK = "track-order-response";
const COMPARE = "user/compare-product";
const ADD_PRODUCT_FOR_COMPARE = "user/add-compare-product";
const REMOVE_COMPARE_ITEM = "user/delete-compare-product";
const WEBSITE_SETUP = "website-setup";
const LOGOUT = "user/logout";
const FAQ = "faq";
const FLASH_SALE = "flash-sale";
const SELLER_TERMS_CONDITION = "seller-terms-conditoins";
const PRIVACY_POLICY = "privacy-policy";
const SELLERS = "sellers";
const TERMS_CONDITION = "terms-and-conditions";
const GOOGLE_LOGIN = "login/google";
const FACEBOOK_LOGIN = "login/facebook";
const GET_COUNTRY_LIST = "user/address/create";
const GET_COUNTRY_LIST_GUEST = "user/country-list";
const GET_STATE_LIST = "user/state-by-country";
const GET_CITY_LIST = "user/city-by-state";
const UPDATE_PROFILE = "user/update-profile";
const LIVE_TRACK_ORDER = "live-track-order";
const SELLER_REQUEST = "user/seller-request";
const GOOGLE_CALLBACK = "callback/google";
const FACEBOOK_CALLBACK = "callback/facebook";
const TWITTER_CALLBACK = "callback/twitter";

/**
 * Function to combine the base url with the api url
 * @param {string} url
 * @returns {string}
 */
const combinedUrl = (url) => {
  const baseUrl = appConfig.BASE_URL + "api/";
  const margeUrl = baseUrl + url;
  return margeUrl;
};

// api routes
const apiRoutes = {
  // shopo
  shopo: combinedUrl(""),
  about: combinedUrl(ABOUT_US),
};

export default apiRoutes;
