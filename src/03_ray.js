(function (exports) {

    exports.RayNS=exports.RayNS || {};

    var Ray=function(eventsToListen) {
        this.eventsToListen=eventsToListen || {document:'DOMContentLoaded', window:'load'};
        this.raydocument=new RayNS.Document(this.eventsToListen);
    };

    Ray.prototype.begin=function() {
        this.raydocument.begin();
        this.raydocument.ready(function(){
            new RayNS.Watcher();
        });
    };

    Ray.prototype.end=function() {
        this.raydocument.end();
    };

    exports.RayNS.Ray=Ray;
})(window);

