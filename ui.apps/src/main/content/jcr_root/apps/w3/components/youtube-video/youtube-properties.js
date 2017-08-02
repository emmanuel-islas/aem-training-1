
	loadURLVideo();



function loadURLVideo() {
    
    var CONST = {
        PROP_VIEW_NAME: "jcr:viewName",
        CUSTOM_VIEW_NAME: "viewName"
    };

    var viewSelected = {};

    
    viewSelected.text = granite.resource.properties["urlVideo"];
    			//|| wcm.currentPage.properties[CONST.PROP_VIEW_NAME];
    
    console.log("urlVideo: " + viewSelected.text);
    
    return viewSelected;

}

