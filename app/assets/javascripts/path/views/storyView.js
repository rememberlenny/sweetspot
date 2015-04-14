app = app || {}

app.StoryView = Backbone.View.extend({

    initialize: function() {
        this.listenTo(this.collection, "change:isActive", this.onActiveChange);
    },

    render: function() {
        this.showPhoto();
    },

    showPhoto: function(storyModel) {
        this.photoView = new app.PhotoView({model: storyModel});
        this.$el.html(this.photoView.el);
    },

    onShowImage: function(idNum) {
        var newImageModel = this.collection.findWhere({id: idNum});
        this.showPhoto(newImageModel);
    },

    onActiveChange: function(changedModel) {
        if (changedModel.get("isActive")) {
            this.showPhoto(changedModel);
        } else {
            this.photoView.remove();
        }
    }

    

})
