var app = app || {};

var appRouter = Backbone.Router.extend({
    routes: {
        "": "home",
        "_": "home",
        "photo/:id": "photo"
    },

    home: function() {
        Backbone.trigger("route:home");
    },

    photo: function(id) {
        console.log('photo route');
        Backbone.trigger('route:photo', id);
    }
});

app.router = new appRouter();
