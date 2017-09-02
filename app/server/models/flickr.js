const JSONP = require('node-jsonp');
const dummy = require('../photos.json');

class Flickr {
  constructor() {
    this.BASE_URL = "https://api.flickr.com";
    this.PUBLIC_ENDPOINT = "/services/feeds/photos_public.gne";
  }

  get(tag=null) {
    return new Promise((resolve, reject) => {
      let params = {
        format: 'json'
      };

      if (tag) {
        params.tags = tag;
      }

      JSONP(`${this.BASE_URL}${this.PUBLIC_ENDPOINT}`, params, 'jsoncallback', (json) =>{
        resolve(json);
      });
    });
  }

}

module.exports = new Flickr();
