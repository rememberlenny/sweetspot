var app = app || {}

app.StoryModel = Backbone.Model.extend({
    defaults: {
        isActive: false,
        showBack: false,
        titleScreen: false
    },
    initialize: function() {
        this.on("change:isActive", this.onChangeActive);
    },
    onChangeActive: function() {

        //check to see if the back button should be enabled
        if (this.collection.previousImages.length > 0) {
            this.set({showBack: true});
        } else {
            this.set({showBack: false});
        }

        //check to see if this should be treated as title slide
        
        if (this.collection.selectedPhoto == this) {
            this.set({titleScreen: true});
        }

    }
})
