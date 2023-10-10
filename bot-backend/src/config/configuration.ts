import {configDotenv} from "dotenv";

configDotenv();

export default () => ({
    token: process.env.BOT_TOKEN,
    webAppUrl: process.env.WEB_APP_URL,
});
