import "module-alias/register";
import chalk from "chalk";
import app from "./app";
import CONFIG from "./config";

const server = app.listen(CONFIG.PORT, () => {
  console.log(
    chalk.green.bold(`App is running at `) +
      chalk.cyan.underline(`http://${CONFIG.HOST}:${CONFIG.PORT}`) +
      chalk.yellowBright.bold(` in MODE=${CONFIG.NODE_ENV}`)
  );
  console.log(
    chalk.magentaBright.bold(
      "---------------------------------------------------"
    )
  );
  console.log(
    chalk.red.bold("Stop the server by pressing "),
    chalk.red.underline.bold("CTRL-C")
  );
  console.log(
    chalk.magentaBright.bold(
      "---------------------------------------------------"
    )
  );
});

export default server;
