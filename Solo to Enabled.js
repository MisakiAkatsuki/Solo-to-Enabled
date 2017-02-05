/// <reference path="C:\Users\RUI\OneDrive\lib\aftereffects.d.ts\ae.d.ts"/>
(function () {
    var isCompActive = function (comp) {
        if (!(comp && comp instanceof CompItem)) {
            return false;
        }
        else {
            return true;
        }
    };
    var isLayerSelected = function (layers) {
        if (layers.length === 0) {
            return false;
        }
        else {
            return true;
        }
    };
    var main = function () {
        var actComp = app.project.activeItem;
        if (!isCompActive(actComp)) {
            return 0;
        }
        var selLayers = actComp.selectedLayers;
        if (isLayerSelected(selLayers)) {
            for (var i = 0; i < selLayers.length; i++) {
                selLayers[i].enabled = selLayers[i].solo;
                if (selLayers[i].enabled) {
                    selLayers[i].solo = false;
                }
            }
        }
        else {
            for (var i = 1; i <= actComp.layers.length; i++) {
                actComp.layer(i).enabled = actComp.layer(i).solo;
                if (actComp.layer(i).enabled) {
                    actComp.layer(i).solo = false;
                }
            }
        }
        return 0;
    };
    app.beginUndoGroup("Solo to Enabled");
    main();
    app.endUndoGroup();
    return 0;
}).call(this);
