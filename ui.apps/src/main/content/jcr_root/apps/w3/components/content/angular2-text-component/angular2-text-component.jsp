<%--

  Angular 2 Text Component .
 
  this is demo component
 
--%><%
%><%@include file="/libs/foundation/global.jsp"%><%
%><%@page session="false" %><%
%><%
    // TODO add you code here
%>
<cq:include script="/libs/wcm/core/components/init/init.jsp"/>
<cq:include path="par" resourceType="foundation/components/parsys"/>
<cq:includeClientLib categories="app.angular2-demo"/>
<head>
    <title>Hello World</title>
    <script>
      System.config({
        transpiler: 'typescript',
        typescriptOptions: { emitDecoratorMetadata: true },
        packages: {'app': {defaultExtension: 'ts'}},
          map: { 'app': '/apps/w3/components/content/angular2-text-component/ts' }
      });
        System.import('app/environment_main')
            .then(null, console.error.bind(console));
    </script>
  </head>

<body>
<my-app>Loading...</my-app>
</body>