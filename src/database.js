const accessKeyId = "AKIAI7ZI6R5D6X44EADA";
const secretAccessKey = "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";
const AWS = require("aws-sdk");
AWS.config.update({
  region: "us-west-2",
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey
});

const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

const params = {
  TableName: "messages"
};

export const queryTable = callback => {
  ddb.scan(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      const chatHistory = [];
      console.log(data.Items);
      data.Items.forEach(function(element, index, array) {
        if (
          !chatHistory.some(chatElement => {
            return chatElement.sponsored === element.destPhone.S;
          })
        ) {
          try {
            const item = {
              id: chatHistory.length,
              sponsor: element.sourcePhone.S,
              sponsored: element.destPhone.S,
              messages: data.Items.filter(
                dataItem => dataItem.destPhone.S === element.destPhone.S
              ).map(dataItem => {
                return {
                  hashCode: dataItem.hashCode.S,
                  from: dataItem.sourcePhone.S,
                  message: dataItem.textMessage.S,
                  moderationNeeded: dataItem.moderate.BOOL
                };
              })
            };
            chatHistory.push(item);
          } catch (exception) {
            console.log(exception);
          }
        }
      });
      console.log(chatHistory);
      callback(chatHistory);
    }
  });
};
