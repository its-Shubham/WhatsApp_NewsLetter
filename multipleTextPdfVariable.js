module.exports = function (phNumber, date) {
    const axios = require("axios");
    let data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: `${phNumber}`,
        type: "template",
        template: {
            name: "variable_message",
            language: {
                code: "en_US",
            },
            components: [
                {
                    type: "header",
                    parameters: [
                        {
                            type: "document",
                            document: {
                                link: "https://www1.nseindia.com/invest/resources/download/Basics_of_finmkts.pdf",
                                filename: `News letter ${date}`
                            },
                        },
                    ],
                },
                {
                    type: "body",
                    parameters: [
                        {
                            type: "date_time",
                            date_time: {
                                fallback_value: `${date}`,
                            },
                        },
                    ],
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
};
