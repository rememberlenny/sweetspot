var app = app || {};

app.PhotoView = Backbone.View.extend({
    initialize: function() {
        app.router.navigate('/photo/' + this.model.get('id'));
        this.listenTo(this.model, "change:showBack", this.showBack);
        this.render();
    },
    className: "story-image",
    template: _.template("<div class='story-image-control <% if(!story.showBack) { %>hide <% } %>'><div class='back-button'></div></div><% if(story.titleScreen) {%> <div class='story-info'><h1 class'story-title'> <%=info.name%></h1><h3><%=info.blurb%></h3><h3><%=info.byline%></h3></div><% } %><img src='<%= story.image_url %>' >"),
    sweetspotTemplate: _.template("<div data-destination='<%= destination%>' class='hotspot' style='left: <% print(Math.round(coordinates[1] * 100)) %>%; top: <% print(Math.round(coordinates[0] * 100)) %>%;'></div>"),
    render: function() {
        var info = app.storyData.story;
        console.log(info);
        this.$el.html(this.template({story: this.model.toJSON(), info: info}));
        this.renderSweetspots();
        return this;
    },
    renderSweetspots: function() {
        var _this = this;
        _.each(this.model.get("sweetspots"), function(sweetspot) {
            console.log(sweetspot);
            _this.$el.append(_this.sweetspotTemplate(sweetspot));
        });
    },
    events: {
        "click .hotspot": "onSweetspotClick",
        "click .back-button": "onBackClick",
    },
    onSweetspotClick: function(e) {
        $target = $(e.currentTarget);

        //find oldImage data and story it in array
        var oldImgName = this.model.get('id');
        var oldStoryImage = this.model;

        var newImgName = $target.data('destination');
        Backbone.trigger("show:image", $target.data('destination'));
        console.log(newImgName);


    },

    onBackClick: function() {
        Backbone.trigger("goBack");
    },
    showBack: function() {
        if (this.model.get("showBack")) {
            this.$('.story-image-control').removeClass('hide');
        } else {
            this.$('.story-image-control').addClass('hide');
        }
    }
});
