const AjaxPromise = require('ajax-promise');
const Promise = require("bluebird");

const Photos = {
  get: (tag=null) => {
    return new Promise((resolve, reject) => {
      AjaxPromise
        .get(`/api/photos${(tag) ? `?tag=${tag}` : ""}`)
        .then((data) => {
          resolve({photos: data.items});
        });
    });
  }
};

export default {
  Photos
};
