describe("Ray Sim", function() {

    var raySim;

    beforeEach(function() {
        raySim=new RaySimNS.RaySim();
    });

    afterEach(function() {
        raySim.end();
    });

    it("should exec Ray on start call", function() {
        var INITIAL_HTML=function(){/*
         <img data-ray-component="ChangeImageSrcComponent" src="images/test1.jpg">
         */};
        var EXPECTED_HTML=function(){/*
         <img data-ray-component="ChangeImageSrcComponent" src="images/test2.jpg" data-ray-component-executed>
         */};

        window.ChangeImageSrcComponent=function(data) {
            var image=data.DOMElement;
            image.setAttribute("src","images/test2.jpg");
        };

        raySim.setHtml(INITIAL_HTML);

        raySim.start();
        expect(raySim.hasHTML(EXPECTED_HTML)).toBeTruthy();
    });

    it("should not exec Ray if start is not called", function() {
        var INITIAL_HTML=function(){/*
         <img data-ray-component="ChangeImageSrcComponent" src="images/test1.jpg">
         */};

        window.ChangeImageSrcComponent=function(data) {
            var image=data.DOMElement;
            image.setAttribute("src","images/test2.jpg");
        };

        raySim.setHtml(INITIAL_HTML);

        expect(raySim.hasHTML(INITIAL_HTML)).toBeTruthy();
    });

});
