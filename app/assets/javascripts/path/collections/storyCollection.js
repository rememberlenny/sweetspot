var app = app || {};

app.StoryCollection = Backbone.Collection.extend({
    initialize: function() {
        this.listenTo(Backbone, "show:image", this.onShowImage);
        this.listenTo(Backbone, "route:home", this.showFirstImage);
        this.listenTo(Backbone, "route:photo", this.onShowImage);
        this.listenTo(Backbone, "goBack", this.onBack);
    },
    model: app.StoryModel,
    setFirstImage: function() {
        this.selectedPhoto = this.findWhere({id: app.storyData.story.first_slide});
        if (this.selectedPhoto == undefined) {
            this.selectedPhoto = this.models[0];
        }
    },
    showFirstImage: function() {
        this.selectedPhoto.set({isActive: true});
    },
    onShowImage: function(idNum) {
        idNum = parseInt(idNum);
        //set old model to inactive
        var oldModel = this.findWhere({isActive: true});
        if (oldModel !== undefined) {
            oldModel.set({isActive: false});
            this.previousImages.push(oldModel);
        }
        //set new model to active
        this.findWhere({id: idNum}).set({isActive: true});
    },
    
    onBack: function(){
        this.findWhere({isActive: true}).set({isActive: false});
        this.previousImages.pop().set({isActive: true});
    },

    previousImages: []
});
