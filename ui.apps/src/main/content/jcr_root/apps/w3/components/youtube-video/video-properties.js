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
			params.aspectRadio = '16by9';
			params.url = 'OYjZK_6i37M?list=RDEMvzkIsCGpImNWH3Tfp-h1LQ';

			switch (params.provider) {
				case 'youtube':
					urlProvider = 'http://www.youtube.com/watch?v=';
					break;
				case 'vimeo':
				 urlProvider = 'https://vimeo.com/';
				 break;
			};

			params.url = urlProvider + params.url;
      return params;
  });
