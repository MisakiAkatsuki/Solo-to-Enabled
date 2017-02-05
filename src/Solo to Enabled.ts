/// <reference path="C:\Users\RUI\OneDrive\lib\aftereffects.d.ts\ae.d.ts"/>

(function () {
  const isCompActive = function (comp: CompItem): boolean {
    if (!(comp && comp instanceof CompItem)) {
      return false;
    } else {
      return true;
    }
  }

  const isLayerSelected = function (layers: Layer[]): boolean {
    if (layers.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  const main = function (): number {
    const actComp: CompItem = <CompItem>app.project.activeItem;
    if (!isCompActive(actComp)) {
      return 0;
    }

    const selLayers: Layer[] = <Layer[]>actComp.selectedLayers;

    if (isLayerSelected(selLayers)) {
      for (let i = 0; i < selLayers.length; i++) {
        selLayers[i].enabled = selLayers[i].solo;
        if (selLayers[i].enabled) {
          selLayers[i].solo = false;
        }
      }
    } else {
      for (let i = 1; i <= actComp.layers.length; i++) {
        actComp.layer(i).enabled = actComp.layer(i).solo;
        if (actComp.layer(i).enabled) {
          actComp.layer(i).solo = false;
        }
      }
    }

    return 0;
  }

  app.beginUndoGroup("Solo to Enabled");
  main();
  app.endUndoGroup();

  return 0;
}).call(this);
