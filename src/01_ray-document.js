(function(exports) {

    exports.RayNS=exports.RayNS || {};



    var Document=function(eventsToListen){
        this.callbacks=[];
        this.eventsToListen=eventsToListen;
        var self=this;
        this._notified=false;

        this.listener = function () {
            self._notifyReady(self.callbacks);
        };
    };

    Document.prototype.begin=function() {
        document.addEventListener(this.eventsToListen.document, this.listener);
        window.addEventListener(this.eventsToListen.window, this.listener);
    };

    Document.prototype.end=function() {
        this._notified=false;
        document.removeEventListener(this.eventsToListen.document, this.listener);
        window.removeEventListener(this.eventsToListen.window, this.listener);
    };


    Document.prototype.ready=function(callback) {
        //if (this._documentIsReady()) {
        //    callback();
        //} else {
            this.callbacks.push(callback);
        //}
    };

    Document.prototype._notifyReady=function(callbacks) {
        if (this._notified) return;
        this._notified=true;
        callbacks.forEach(function(callback){
            callback();
        });
        callbacks=[];
    };

    Document.prototype._documentIsReady=function() {
        var readyState = document.readyState;
        var isScrolling = document.documentElement.doScroll;
        var isComplete=readyState === 'complete';
        var isLoading=readyState === 'loading';
        if (isComplete) return true;
        if ( (!isLoading) && (!isScrolling) ) {
            return true;
        }
        return false;
    };


    exports.RayNS.Document=Document;
})(window);




