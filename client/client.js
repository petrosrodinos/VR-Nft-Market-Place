import { ReactInstance, Location, Surface, Module } from "react-360-web";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [new surfaceModule()],
    ...options,
  });

  r360.renderToLocation(
    r360.createRoot("ConnectedNftModel"),
    new Location([0, 0, -1])
  );

  const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-0.5, 0);
  r360.renderToSurface(r360.createRoot("ConnectedLeftPanel"), leftPanel);

  const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(0.5, 0);
  r360.renderToSurface(r360.createRoot("ConnectedRightPanel"), rightPanel);

  const createNftPanel = new Surface(800, 400, Surface.SurfaceShape.Flat);
  createNftPanel.setAngle(-1.6, -0.1);
  r360.renderToSurface(r360.createRoot("CreateNftPanel"), createNftPanel);

  nftGallery = new Surface(800, 400, Surface.SurfaceShape.Flat);
  nftGallery.setAngle(1.6, 0.1);
  r360.renderToSurface(r360.createRoot("NftGalleryPanel"), nftGallery);

  r360.compositor.setBackground(r360.getAssetURL("background.jpg"));
}

class surfaceModule extends Module {
  constructor() {
    super("surfaceModule");
  }

  changeSurfaceType() {
    //nftGallery.resize(600, 300);
    nftGallery.setShape(Surface.SurfaceShape.Cylinder);
  }
}

window.React360 = { init };
