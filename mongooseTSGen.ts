import MongooseTsgen from "mongoose-tsgen";

// Define an async function to use await
async function generateMongooseDefinitions() {
  const tsgen = new MongooseTsgen([]);
  const result = await tsgen.generateDefinitions({
    flags: {
      "dry-run": false,
      "no-format": true,
      "no-mongoose": false,
      "no-populate-overload": false,
      debug: true,
      output: "./modelInterfaces.ts",
      project: "./",
    },
    args: {},
  });

  // Assuming result.sourceFile.save() returns a Promise
  await result.sourceFile.save();
}

// Call the async function
console.log("Generating Mongoose definitions...");
generateMongooseDefinitions()
  .then(() => console.log("Mongoose definitions generated successfully."))
  .catch((error) => {
    console.log("Error generating Mongoose definitions:", error, error.stack);
    process.exit(1); // Exit the process with an error code
  });
// mtgen --imports='import {AxiosInstance} from \"axios\"' --imports='import {FilterQuery} from
// \"mongoose\"' --imports='import {Schedule} from \"@rschedule/core/generators\"' --imports='import
// {calendar_v3} from \"googleapis\"' --imports='import {ConversationUserParam,
// CreateFormInstanceWithAnswers, ExpoPushData, FitbitResource, FitbitActivityData,
// FitbitIntradayStepsData, FitbitHRVData, FitbitHeartRateData, FitbitUpdateStatus, MessageData,
// SendSmsMessageParams, StringOrObjectId, SubscriptionItem, UserType, TwilioMessageInstance,
// TwilioWebhookResponse} from \"./interfaces\"' --output=./src/modelInterfaces.ts src/models/
//
//
// && prettier --write ./src/modelInterfaces.ts",
