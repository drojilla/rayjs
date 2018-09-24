(function (exports) {

    exports.RaySimNS=exports.RaySimNS || {};

    function RaySim() {
        this.EVENT_NAMES_IN_SIM = {
            document: 'DOMContentLoadedTest',
            window: 'loadTest'
        };
        this.fixture=new Spec.HtmlFixture();
        this.fixture.create();
        this.ray=new RayNS.Ray(this.EVENT_NAMES_IN_SIM);
        this.bus=this.ray.eventBus;
    }

    RaySim.prototype._createEvent=function(name) {
        var event = document.createEvent("Event");
        event.initEvent(name, true, true);
        return event;
    };

    RaySim.prototype._fireDOMReady=function() {
        window.document.dispatchEvent(this._createEvent(this.EVENT_NAMES_IN_SIM.document));
        window.dispatchEvent(this._createEvent(this.EVENT_NAMES_IN_SIM.window));
    };

    RaySim.prototype.setHtml=function(html) {
        this.fixture.add(html);
    };

    RaySim.prototype.hasHTML=function(html) {
        return this.fixture.isEqual(html);
    };

    RaySim.prototype.start=function() {
        this.ray.begin();
        this._fireDOMReady();
    };

    RaySim.prototype.end=function() {
        this.ray.end();
        this.fixture.destroy();
    };



    exports.RaySimNS.RaySim=RaySim;
})(window);

