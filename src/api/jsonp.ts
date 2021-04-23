/** @format */

const jsonp = (url: string, data: any) => {
  if (!url) {
    throw new Error("url is necessary");
  }
  const callback: string = "CALLBACK" + Math.random().toString().substr(9, 18);
  const JSONP = document.createElement("script");
  JSONP.setAttribute("type", "text/javascript");

  const headEle = document.getElementsByTagName("head")[0];

  let ret = "";
  if (data) {
    if (typeof data === "string") {
      ret = "&" + data;
    }
    else if(typeof data === 'object') {
      for (let key in data) {
        ret += "&" + key + "=" + encodeURIComponent(data[key]);
      }
    }
    ret += "&_time=" + Date.now();
  }
  JSONP.src = `${url}?callback=${callback}${ret}`;
  return new Promise((resolve, reject) => {
    <any>window[<any>callback] = (r: any) => {
      resolve(r);
      headEle.removeChild(JSONP);
      delete (<any>window)[callback];
    };
    headEle.appendChild(JSONP);
  });;
};;

export default jsonp;
