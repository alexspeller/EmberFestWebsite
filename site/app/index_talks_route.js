Emberfest.IndexTalksRoute = Ember.Route.extend( {
    setupController: function(controller, model) {
        this._super(controller, model);
        _gaq.push(['_trackPageview', "/talks"]);

        document.title = 'Talks - Ember Fest';
    },


    renderTemplate: function() {
        this._super();
        Emberfest.set('lastTransition', new Date().getTime());
        Ember.run.schedule('afterRender', this, function(){
            document.getElementById('talks').scrollIntoView();
        });
    }
});