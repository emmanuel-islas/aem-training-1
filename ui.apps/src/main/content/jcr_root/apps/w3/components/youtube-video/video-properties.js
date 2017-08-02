"use strict";

  use(function () {
      var CONST = {
          CUSTOM_URL: "custom-url",
					CUSTOM_PROVIDER: "custom-provider",
          CUSTOM_ASPECT: "custom-aspect"
      }

      var params = {};
			var urlProvider = '';
			/*
			params.provider = resource.properties[CONST.CUSTOM_PROVIDER];
			params.aspectRadio = resource.properties[CONST.CUSTOM_ASPECT];
			*/
			params.provider = 'youtube';
			params.aspectRadio = '4by3';
			params.urlID = 'qkIvs6Z-5Ms';

			switch (params.provider) {
				case 'youtube':
					urlProvider = 'https://www.youtube.com/embed/';
					break;
				case 'vimeo':
				 urlProvider = 'https://player.vimeo.com/video/';
				 break;
			};

			params.url = urlProvider + params.urlID;
      return params;
  });
