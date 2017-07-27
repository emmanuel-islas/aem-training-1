<%--

  Tableau

--%><%
%><%@include file="/libs/foundation/global.jsp"%><%
%><%@page session="false" %>

<script type="text/javascript" 
	    src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script>


<script type="text/javascript">
    "use strict";
    

    $(document).ready(function (){

		console.log("jquery load");

        initViz();
        loadViewName()
	});


    function initViz() {
            var containerDiv = document.getElementById("vizContainer"),
                url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms",
                options = {
                    hideTabs: true,
                    onFirstInteractive: function () {
                        console.log("Run this code when the viz has finished loading.");
                    }
                };

             var viz = new tableau.Viz(containerDiv, url, options); 
            // Create a viz object and embed it in the container div.
    }



    function loadViewName() {

        var CONST = {
            PROP_VIEW_NAME: "jcr:viewName",
            CUSTOM_VIEW_NAME: "viewName"
        };

        var viewSelected = {};



        viewSelected.text = granite.resource.properties[CONST.CUSTOM_VIEW_NAME]
                            || wcm.currentPage.properties[CONST.PROP_VIEW_NAME];


        console.log("viewName: " + viewSelected.text);

        return viewSelected;

    }


</script>


<div id="vizContainer" style="width:800px; height:700px;"></div>