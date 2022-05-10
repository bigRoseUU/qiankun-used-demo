import { registerMicroApps, start } from "qiankun";
import { DEFAULT_APP_CONTAINER } from "@root/const/qiankun";

async function bootstrap() {
  registerMicroApps([
    {
      name: "app-1",
      activeRule: "#/app-1",
      container: `#${DEFAULT_APP_CONTAINER}`,
      entry: "//localhost:9001",
    },
  ]);

  start();
}

export default bootstrap;
