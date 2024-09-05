function path(root, sublink) {
  return `${root}/${sublink}`;
}

export const BACKEND_URL = process.env.REACT_APP_API_URL;

export function pathToBackend(sublink) {
  return `${BACKEND_URL}/${sublink}`;
}

const USERS_URL = path(BACKEND_URL, "users");
const AUTH_URL = path(BACKEND_URL, "auth");
const ASSETS_URL = path(BACKEND_URL, "assets");
const POST_URL = path(BACKEND_URL, "posts");
const OCCUPATION_URL = path(BACKEND_URL, "occupations");
const CHAT_URL = path(BACKEND_URL, "chats");
const MESSAGE_URL = path(BACKEND_URL, "messages");
const DEALS_URL = path(BACKEND_URL, "deals");
const REQUIREMENTS_URL = path(BACKEND_URL, "requirements");
const WORKERS_URL = path(BACKEND_URL, "workers");
export const BACKEND_URL_PATHS = {
  posts: {
    get: (userId) => `${POST_URL}/${userId}`,
    create: path(POST_URL, "create"),
    like: (postId) => `${POST_URL}/${postId}/like`,
    delete: (postId, userId) => `${POST_URL}/${postId}/${userId}`,
    comment: (postId) => `${POST_URL}/${postId}/comment`,
    comment_delete: (postId, commentId) =>
      `${POST_URL}/${postId}/comment/${commentId}`,
    getOne: (postId) => `${POST_URL}/getOne/${postId}`,
    getAllOccupationPosts: (occupationId) =>
      `${POST_URL}/getAllOccupationPosts/${occupationId}`,
  },
  assets: {
    cv: path(ASSETS_URL, "cv"),
    picture: path(ASSETS_URL, "picture"),
    occupationPicture: (name) =>
      `${path(ASSETS_URL, "occupationPicture")}/${name}`,
  },
  auth: {
    login: path(AUTH_URL, "login"),
    register: path(AUTH_URL, "register"),
    workerRegister: path(AUTH_URL, "worker/register"),
  },
  user: {
    search: path(USERS_URL, "search"),
    update: path(USERS_URL, "updateEmailPhone"),
    get: (userId, this_user) => `${USERS_URL}/${userId}/${this_user}`,
    blockUser: path(USERS_URL, "blockUser"),
    unblockUser: path(USERS_URL, "unblockUser"),
    delete: (userId) => `${USERS_URL}/${userId}`,
    getAll:path(USERS_URL, ""),
  },
  worker: {
    searchByField: (selectedOccupation) =>
      `${path(WORKERS_URL, "searchByField")}/${selectedOccupation.join(",")}`,
    rate: (userId) => `${WORKERS_URL}/rate/${userId}`,
    addMonthSubscription: (userId) => `${WORKERS_URL}/${userId}/subscription`,
  },
  occupation: {
    get: path(OCCUPATION_URL, "getAll"),
    create: path(OCCUPATION_URL, "create"),
    suggest: path(OCCUPATION_URL, "suggest"),
    getSuggestOccupations: path(OCCUPATION_URL, "getSuggestOccupations"),
    deleteSuggestions: path(OCCUPATION_URL, "deleteSuggestions"),
    delete: (occupationId) =>
      `${OCCUPATION_URL}/deleteOccupationById/${occupationId}`,
    update: (occupationId) =>
      `${OCCUPATION_URL}/updateOccupationById/${occupationId}`,
    gallery: {
      get: (occupationId) => `${OCCUPATION_URL}/${occupationId}/gallery`,
      add: (occupationId) => `${OCCUPATION_URL}/${occupationId}/gallery`,
      delete: (occupationId, itemId) =>
        `${OCCUPATION_URL}/${occupationId}/gallery/${itemId}`,
    },
  },
  chats: {
    get: (userId) => `${CHAT_URL}/${userId}`,
    getCreateChat: path(CHAT_URL, "getCreateChat"),
  },
  messages: {
    fileMsg: path(MESSAGE_URL, "fileMsg"),
  },
  deals: {
    get: (userId) => `${DEALS_URL}/${userId}`,
    getCreateDeal: path(DEALS_URL, "getCreateDeal"),
    createMessageRequirement: path(DEALS_URL, "createMessageRequirement"),
    signContract: path(DEALS_URL, "signContract"),
    rejectToSignContract: path(DEALS_URL, "rejectToSignContract"),
    requestChangePrice: path(DEALS_URL, "requestChangePrice"),
    acceptPriceChange: path(DEALS_URL, "acceptPriceChange"),
    rejectPriceChange: path(DEALS_URL, "rejectPriceChange"),
  },
  requirements: {
    get: (dealId) => `${REQUIREMENTS_URL}/${dealId}`,
    createMessageRequirement: path(
      REQUIREMENTS_URL,
      "createMessageRequirement"
    ),
    toggleAgree: path(REQUIREMENTS_URL, "toggleAgree"),
  },
};
