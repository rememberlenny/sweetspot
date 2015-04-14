var app = app || {}

app.StoryModel = Backbone.Model.extend({
    defaults: {
        isActive: false,
        showBack: false
    },
    initialize: function() {
        this.on("change:isActive", this.onChangeActive);
    },
    onChangeActive: function() {
        if (this.collection.previousImages.length > 0) {
            console.log("more than 0")
            this.set({showBack: true});
        } else {
            this.set({showBack: false});
        }
    }
})
