/**
 *  http://localhost:3000/stories/:id/path
 *
 */

var app = app || {};

(function(){


    //listen for turbolink page change to kick to kick off app
    $(document).on("page:change", function() {
        if($('.path-type').length > 0){
            app.init();
        }
    });


    //function to kick off the app
    app.init = function(){
        $(".navbar").hide();
        $container = $('.container');
        $container.empty();
        var data_url = window.location.href.replace('/path', '.json');
        $.getJSON(data_url, function(data) {
            app.storyData = data;
            app.storyCollection = new app.StoryCollection(app.storyData.photos);
            app.storyCollection.setFirstImage();
            app.storyView = new app.StoryView({collection: app.storyCollection, el: $container});

            Backbone.history.start();

        });
    }

})();
