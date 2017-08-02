"use strict";

use(function () {
    var CONST = {
        CUSTOM_TITLE: "custom-title",
        CUSTOM_CONTENT: "custom-textarea",
    }

    var params = {};

    params.title = resource.properties[CONST.CUSTOM_TITLE];
    params.content = resource.properties[CONST.CUSTOM_CONTENT];

    return params;
});