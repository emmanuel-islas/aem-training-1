"use strict";

use(function () {

	console.log("loading properties video");

	loadURLVideo();

}


function loadURLVideo() {
    
    var CONST = {
        PROP_VIEW_NAME: "jcr:viewName",
        CUSTOM_VIEW_NAME: "viewName"
    };
    
    var urlVideo = {};
    
    
    urlVideo.text = granite.resource.properties["urlVideo"];
    			//|| wcm.currentPage.properties[CONST.PROP_VIEW_NAME];
    
    console.log("urlVideo: " + urlVideo.text);
    
    return urlVideo;
    
}

