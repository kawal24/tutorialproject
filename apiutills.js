import Axios from "axios";
import { parse } from "qs";
// import { history } from 'umi';
export const hostname = () => {
  let hostUrl = "http://localhost:8000";

  return hostUrl;
};

const hostUrl = hostname();
export const makeUrl = ({ uri = "", pathParams }, host) =>
  `${host || hostUrl}${uri
    .split("/")
    .map((param) =>
      param.charAt(0) === ":" ? encodeURI(pathParams[param.slice(1)]) : param
    )
    .join("/")} : ''}`;
export const getDefaultHeaders = (multipart) => {
  if (localStorage.accessToken) {
    return {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": multipart ? "multipart/form-data" : "application/json",
    };
  }
  return { "Content-Type": "application/json" };
};

function getPageQuery() {
  return parse(window.location.href && window.location.href.split("?")[1]);
}
/**
 * Returns true if the input apiResponse has errors.
 * @param {*} apiResponse
 */
export const hasErrors = (apiResponse) => {
  const { error } = apiResponse;
  if (error) {
    return true;
  }
  return false;
};
/**
 * Generic utility method that should be called when invoking any REST API
 *
 * This function streamlines the functionality to make api calls,
 * and carries easy management for controlling versions of the apis
 *
 * @since 1.0.0
 *
 * @todo all the incoming values for the APIParamaters.pathParams and APIParamaters.query
 * should be uri encoded.
 * @alias callAxios
 * @memberof apiUtils
 * @param {Object} APIParamaters - Set of objects required to make the api call.
 * @param {Object} APIParamaters.uriEndPoint - Endpoint object as described in apiEndPoints.js.
 * @param {String} APIParamaters.uriEndPoint.api - Path to your endpoint
 * @param {String} APIParamaters.uriEndPoint.method - POST/GET/PUT/DELETE etc.
 * @param {String} APIParamaters.uriEndPoint.version - Versioning of your api
 * @param {Object} APIParamaters.uriEndPoint.headerProps - Object of headers you want to pass.
 * @param {Object} APIParamaters.pathParams - Path parameters. Example :id in the path,
 * then pathParams object will be {id:value}.
 * @param {Object} APIParamaters.query - GET/POST/PUT/DELETE Endpoint.
 * @param {Object} APIParamaters.body - Body of the request.
 * @returns {Promise<object>} Body Data from the server.
 */
const callAxios = ({
  uriEndPoint,
  pathParams,
  query,
  body,
  apiHostUrl,
  multipart,
}) => {
  console.log(makeUrl({ ...uriEndPoint, pathParams, query }, apiHostUrl));
  return Axios({
    method: uriEndPoint.method,
    url: makeUrl({ ...uriEndPoint, pathParams, query }, apiHostUrl),
    headers: {
      ...getDefaultHeaders(multipart),
      ...uriEndPoint.headerProps,
    },
    data: body || {},
  });
};

/**
 * Extract the error messages from a failed API response.
 * @param {} apiResponse
 */
// const extractErrors = () => {};
/**
 * Generic utility method that should be called when invoking any REST API
 *
 * This function streamlines the functionality to make api calls,
 * and carries easy management for controlling versions of the apis
 *
 * @since 2.0.0
 *
 * @todo all the incoming values for the APIParamaters.pathParams and APIParamaters.query
 * should be uri encoded.
 * @alias callApi
 * @memberof apiUtils
 * @param {Object} APIParamaters - Set of objects required to make the api call.
 * @param {Object} APIParamaters.uriEndPoint - Endpoint object as described in apiEndPoints.js.
 * @param {String} APIParamaters.uriEndPoint.api - Path to your endpoint
 * @param {String} APIParamaters.uriEndPoint.method - POST/GET/PUT/DELETE etc.
 * @param {String} APIParamaters.uriEndPoint.version - Versioning of your api
 * @param {Object} APIParamaters.uriEndPoint.headerProps - Object of headers you want to pass.
 * @param {Object} APIParamaters.pathParams - Path parameters. Example :id in the path,
 * then pathParams object will be {id:value}.
 * @param {Object} APIParamaters.query - GET/POST/PUT/DELETE Endpoint.
 * @param {Object} APIParamaters.body - Body of the request.
 * @returns {Promise<object>} Body Data from the server.
 */
export const callApi = ({
  uriEndPoint = { uri: "", method: "", version: "", headerProps: {} },
  pathParams,
  query,
  body,
  apiHostUrl,
  multipart,
}) =>
  new Promise((resolve, reject) => {
    callAxios({
      uriEndPoint,
      pathParams,
      query,
      body,
      apiHostUrl,
      multipart,
    })
      .then((response) => {
        resolve(response.data);
        localStorage.setItem("timer", 1800);
      })
      .catch((err) => {
        if (!err.response) {
          if (!getPageQuery().redirect) {
            // history.push(
            //   `/server-unreachable?${stringify({
            //     redirect: window.location.href,
            //   })}`,
            // );
          }
          return;
        }
        // if (err?.response?.status === 401) {
        //   history.push(
        //     `/user/login?${stringify({
        //       redirect: window.location.href,
        //     })}`,
        //   );
        //   // unauthorized
        //   clearLocalStroage();
        //   reject(err.response);
        // }
        if (err?.response) {
          reject(err.response);
        }
      });
  });
