function FeatchData(props,fn) {
    fetch(`${props}`, {
      "headers": {
        "accept": "application/json",
        "accept-language": "ar,en-US;q=0.9,en;q=0.8,he;q=0.7,nb;q=0.6",
        "authorization": "Bearer eZ9mtnBy78PFJLCJkQwXA0TYfY7rCB69udaxIzNB",
      },
      "referrer": "https://control.predicthq.com/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "sort": "-country",
      "method": "GET",
      "mode": "cors",
      "credentials": "include"
    }).then(res => { return res.json(); }).then(res => {fn(res);});
}

export default FeatchData

