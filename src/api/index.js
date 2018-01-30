export const proxyUrl = "https://cors-anywhere.herokuapp.com/";
export const baseUrl = "https://api-staging.sweetskies.com/";
export const token =
  "nH7cL10uTd0nYWFd6CS4ooFw_51DKqv2iBbSdF8ZBI-dTFa9nuthLJCUroBSt2oecwI8u-jFB9vnx-SQRXGcQgrhA7z5HyG5aD-Z6QU8iMd8yFwXpMxZuSFtf4NMezuEYodztzCjn-gRhklhxMElRnfgaaQkH5tkfFYxhNcFzeoQqgB2UNeJv-IZC__hTRJ9PiUS9kuPMsro3f-lVb6P27_jUo8Ic48hXdNLV9TxvKDPgsHkoJGcH7C82SMmyj4ogmUtsTxIJoVAXVYHPx7MnwTPLHAASQrGB7R7rpmVtE3yllqNMP1IlyHYLZ6XyWCn073qQmKV9hd49VIUdgGLVVo0bEKsWxqFbWtGvqzdCSI0wnFxrdVWhoHmidMlk6jK9DhDFpfW7SAym3NCtbyjGUjqOWRPUjXcldxeoP5zzKLFRALLBqIj9E7XBiDdcVugGjmstN8sZTstAveeQY0OQNhftW_93ic_G4OzR159Y94JQcErQRBZ1f1kESVYc0uIbOneXonEgo1ZaR6Bt1ShbCiYwyg5h0aTwhIxF4tIu-PaK7aB";

const _fetch = (uri, options, json) => {
  const url = proxyUrl + baseUrl + uri;
  options.headers = options.headers || {};
  options.headers["Authorization"] = "bearer " + token;
  options.headers["content-type"] = "application/json";
  options.headers["Accept"] = "application/json";
  options.mode = "cors";
  if (json) {
    options.body = JSON.stringify(json);
  }
  return fetch(url, options);
};

export const get = uri => {
  return _fetch(uri, { method: "GET" })
    .then(
      res => {
        return res.json();
      },
      err => {
        console.log(err);
      }
    )
    .catch(err => {
      console.log(err);
    });
};

export const post = (uri, json) => {
  return _fetch(uri, { method: "POST" }, json).then(res => {
    return res.json();
  });
};
