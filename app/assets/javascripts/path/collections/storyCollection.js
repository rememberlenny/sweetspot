var app = app || {};

app.StoryCollection = Backbone.Collection.extend({
    initialize: function() {
        
        this.listenTo(Backbone, "show:image", this.onShowImage);
        this.listenTo(Backbone, "route:home", this.setFirstImage);
        this.listenTo(Backbone, "route:photo", this.onShowImage);
    },
    model: app.StoryModel,
    setFirstImage: function() {
        var selectedPhoto = this.findWhere({id: app.storyData.story.first_slide});
        if (!selectedPhoto == undefined) {
            selectedPhoto.set({isActive: true});
        } else {
            this.models[0].set({isActive: true});
        }
    },
    onShowImage: function(idNum) {
        idNum = parseInt(idNum);
        //set old model to inactive
        var oldModel = this.findWhere({isActive: true});
        if (oldModel !== undefined) {
            oldModel.set({isActive: false});
        }
        //set new model to active
        console.log(idNum);
        this.findWhere({id: idNum}).set({isActive: true});
    }
});
