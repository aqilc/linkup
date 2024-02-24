import { registerRootComponent } from "expo";
import App from "./src/index";
import { Asset } from "expo-asset";
import { Assets } from "@react-navigation/elements";

Asset.loadAsync(Assets);
// registerRootComponent(App);
export default App;