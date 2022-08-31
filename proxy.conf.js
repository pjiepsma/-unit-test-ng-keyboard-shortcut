require("dotenv").config();

const PROXY_CONFIG = [
  {
    context: ["/sa-agenda/api/**"],
    target: process.env.PP_SERVER,
    secure: false,
    changeOrigin: true,
    logLevel: "debug",
    headers: {
      "pp-cluster": process.env.PP_CLUSTER,
      "pp-identity": process.env.PP_IDENTITY,
      pp_token: process.env.PP_TOKEN,
    },
  },
];

module.exports = PROXY_CONFIG;
