module.exports = function (phNumber) {
    const axios = require("axios");
    let data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: `${phNumber}`,
        type: "template",
        template: {
            name: "unfinance_text_image",
            language: {
                code: "en",
            },
            components: [
                {
                    type: "header",
                    parameters: [
                        {
                            type: "image",
                            image: {
                                link: "https://i.imgur.com/5EVC9YX.png",
                            },
                        },
                    ],
                },
                {
                    type: "body",
                    parameters: [],
                },
            ],
        },
    });

    let config = {
        method: "post",
        url: "https://graph.facebook.com/v14.0/104393579078676/messages",
        headers: {
            "Content-Type": "application/json",
            Authorization:
                "Bearer EAAImgY5dCb0BAL5owTMRRpPPrjnkVibmpIjEZBHOaKMtWNszyWUbt2QAJZCfyWJkiquggjlVuQn4bUcTHoHUPCPrpXKtIMEZAXpTvZBHSoILzGb9upAaMZAKbvZBFMVRggv7YrzILXZBMdAbecn4J0MGXUT0DaZBk8l8wZADcXra16xnh1UgyihCOWL7uanOa72j4ZBZBNhn9oSRTKZCd9WhKFXLwJss1eQG2CAZD",
        },
        data: data,
    };

    axios(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
}
