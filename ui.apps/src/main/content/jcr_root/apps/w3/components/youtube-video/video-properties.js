'use strict';

use(function() {
    var params = {};
    var urlProvider = '';

    if(granite.resource.properties["urlVideo"]) {
      params.video_id = granite.resource.properties["urlVideo"];
      params.provider = granite.resource.properties["platform"];
      params.size = granite.resource.properties["type"];

      if(params.provider == '1') {
          params.urlVideo = 'https://www.youtube.com/embed/' + params.video_id;
      } else {
         params.urlVideo = 'https://player.vimeo.com/video/' + params.video_id;
      }
    }
    return params;
});
