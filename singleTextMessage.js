module.exports = function (phNumber) {
    const axios = require("axios");
    let data = JSON.stringify({
        messaging_product: "whatsapp",
        to: `${phNumber}`,
        type: "template",
        template: {
            name: "single_text",
            language: {
                code: "en_US",
            },
        },
    });

    let config = {
        method: "post",
        url: "https://graph.facebook.com/v14.0/104393579078676/messages",
        headers: {
            Authorization:
                "Bearer EAAImgY5dCb0BAL5owTMRRpPPrjnkVibmpIjEZBHOaKMtWNszyWUbt2QAJZCfyWJkiquggjlVuQn4bUcTHoHUPCPrpXKtIMEZAXpTvZBHSoILzGb9upAaMZAKbvZBFMVRggv7YrzILXZBMdAbecn4J0MGXUT0DaZBk8l8wZADcXra16xnh1UgyihCOWL7uanOa72j4ZBZBNhn9oSRTKZCd9WhKFXLwJss1eQG2CAZD",
            "Content-Type": "application/json",
        },
        data: data,
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}
