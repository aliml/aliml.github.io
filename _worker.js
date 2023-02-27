var nodeList = [
        "lu.sharecentre.online",
        "kr.sharecentre.online",
        "kh.sharecentre.online",
        "ca1.sharecentre.online",
        "jp1.sharecentre.online",
        "sg-1.sharecentre.online",
        "uk-1.sharecentre.online",
        "uk-2.sharecentre.online",
        "hk-2.sharecentre.online",
        "de-1.sharecentre.online",
        "de-2.sharecentre.online",
        "sgvu.sharecentre.online",
        "us-dp.sharecentre.online",
        "buyvm.sharecentre.online",
        "opc-jp.sharecentre.online",
        "aws-jp.sharecentre.online",
        "us-dp2.sharecentre.online",
        "buyvm-ny.sharecentre.online",
        "hk-gcore.sharecentre.online",
        "sg-gcore.sharecentre.online"
];
export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/')) {
      url.hostname = nodeList[Math.floor(Math.random()*nodeList.length)];
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};