import { AppRegistry } from "react-360";
import ConnectedRightPanel from "./components/RightPanel";
import ConnectedLeftPanel from "./components/LeftPanel";
import ConnectedNftModel from "./components/NftModel";
import ConnectedPanel from "./components/CreateNftPanel";
import NftGalleryPanel from "./components/NftGalleryPanel";

AppRegistry.registerComponent("ConnectedLeftPanel", () => ConnectedLeftPanel);
AppRegistry.registerComponent("ConnectedRightPanel", () => ConnectedRightPanel);
AppRegistry.registerComponent("ConnectedNftModel", () => ConnectedNftModel);
AppRegistry.registerComponent("CreateNftPanel", () => ConnectedPanel);
AppRegistry.registerComponent("NftGalleryPanel", () => NftGalleryPanel);
