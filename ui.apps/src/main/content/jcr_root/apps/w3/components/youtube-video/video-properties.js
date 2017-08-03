'use strict';

use(function() {
    var params = {
        video_id: granite.resource.properties["url-video"],
        provider: granite.resource.properties["platform"],
        size: granite.resource.properties["type"]
    };
    var urlProvider = '';
    if(params.provider == '1') {
        params.urlVideo = 'https://www.youtube.com/embed/' + params.video_id;
    } else {
       params.urlVideo = 'https://player.vimeo.com/video/' + params.video_id;
    }

    return params;
});
