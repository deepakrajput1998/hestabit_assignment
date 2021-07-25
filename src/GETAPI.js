let baseurl = process.env.REACT_APP_BASE_URL;

const GETApiCall = {
  getrequesturl: (url, token) => {
    return fetch(baseurl + url, {
      method: "GET",
    //   headers: {
    //     Authorization: "Bearer " + token,
    //   },
    });
  },
};
export default GETApiCall;
