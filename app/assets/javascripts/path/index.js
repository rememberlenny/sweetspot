/**
 *  http://localhost:3000/stories/:id/path
 *
 */

var app = app || {};

(function(){

    
    //listen for turbolink page change to kick off app
    $(document).on("page:change", function() {
        console.log('page change');
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
        if (location.hostname == "localhost") {
            //temp mock data
            app.storyData = {"story":{"name":"SNDMakesDC","created_at":"2015-04-09T19:26:30.402Z","updated_at":"2015-04-10T15:31:25.907Z","blurb":"","byline":"","featured":0,"first_slide":99},"photos":[{"id":23,"title":"","description":"","created_at":"2015-04-09T19:28:01.658Z","updated_at":"2015-04-09T19:28:01.658Z","sweetspots":[{"coordinates":[0.9487,0.0587],"destination":24,"updated_at":"2015-04-09T19:33:36.767Z"},{"coordinates":[0.5917,0.0128],"destination":29,"updated_at":"2015-04-09T19:33:46.442Z"},{"coordinates":[0.621,0.3284],"destination":33,"updated_at":"2015-04-09T19:33:55.448Z"},{"coordinates":[0.6626,0.6349],"destination":37,"updated_at":"2015-04-09T19:34:02.905Z"}],"image_url":"http://www.getsweet.io/attachments/store/a8dea571e5a67c89b0473563b0845d4dd3ec92b8cd07548e602a5f59f8ca/image.jpeg"},{"id":24,"title":"","description":"","created_at":"2015-04-09T19:28:13.583Z","updated_at":"2015-04-09T19:28:13.583Z","sweetspots":[{"coordinates":[0.3765,0.3578],"destination":25,"updated_at":"2015-04-09T19:34:27.927Z"},{"coordinates":[0.577,0.4917],"destination":27,"updated_at":"2015-04-09T19:34:37.246Z"},{"coordinates":[0.5721,0.655],"destination":26,"updated_at":"2015-04-09T19:34:53.712Z"},{"coordinates":[0.3154,0.8606],"destination":30,"updated_at":"2015-04-09T19:35:03.565Z"},{"coordinates":[0.1858,0.7083],"destination":32,"updated_at":"2015-04-09T19:35:11.087Z"}],"image_url":"http://www.getsweet.io/attachments/store/707445887a4b96b389dc4b17bf0a8f83141154ea3564384c6fd61363143d/image.jpeg"},{"id":25,"title":"","description":"","created_at":"2015-04-09T19:29:08.708Z","updated_at":"2015-04-09T19:29:08.708Z","sweetspots":[{"coordinates":[0.7517,0.0887],"destination":26,"updated_at":"2015-04-10T12:18:06.813Z"},{"coordinates":[0.6967,0.9337],"destination":25,"updated_at":"2015-04-10T12:18:13.823Z"}],"image_url":"http://www.getsweet.io/attachments/store/2184c7aa12a6463a89707021fea5f8d718509dca587d8b31cca0d8557616/image.jpeg"},{"id":26,"title":"","description":"","created_at":"2015-04-09T19:29:16.424Z","updated_at":"2015-04-09T19:29:16.424Z","sweetspots":[{"coordinates":[0.8433,0.8638],"destination":29,"updated_at":"2015-04-10T12:19:36.833Z"}],"image_url":"http://www.getsweet.io/attachments/store/e691b73eda5e719b30434de158522894a3ba04d33ed6e2fc4514cf8f70d3/image.jpeg"},{"id":27,"title":"","description":"","created_at":"2015-04-09T19:29:26.740Z","updated_at":"2015-04-09T19:29:26.740Z","sweetspots":[{"coordinates":[0.5867,0.9513],"destination":29,"updated_at":"2015-04-10T12:18:41.254Z"}],"image_url":"http://www.getsweet.io/attachments/store/b6ec2e3d8bac9f125d6f36257474741f4887f0ec62732440ca999300ecb4/image.jpeg"},{"id":28,"title":"","description":"","created_at":"2015-04-09T19:29:37.555Z","updated_at":"2015-04-09T19:29:37.555Z","sweetspots":[{"coordinates":[0.7867,0.7462],"destination":26,"updated_at":"2015-04-10T12:18:59.312Z"}],"image_url":"http://www.getsweet.io/attachments/store/3eb0fe95108f614c90ae05ec4e55e6a8c8d098e075f684762abf52b73766/image.jpeg"},{"id":29,"title":"","description":"","created_at":"2015-04-09T19:29:46.875Z","updated_at":"2015-04-09T19:29:46.875Z","sweetspots":[{"coordinates":[0.4597,0.2734],"destination":30,"updated_at":"2015-04-09T19:35:29.094Z"},{"coordinates":[0.5086,0.3193],"destination":31,"updated_at":"2015-04-09T19:35:36.950Z"},{"coordinates":[0.4792,0.745],"destination":33,"updated_at":"2015-04-09T19:35:43.054Z"}],"image_url":"http://www.getsweet.io/attachments/store/13a8b55e52fbcd64071c73bbd57f8a2e4b3b8d47f5a8635ea755a10460fb/image.jpeg"},{"id":30,"title":"","description":"","created_at":"2015-04-09T19:29:57.804Z","updated_at":"2015-04-09T19:29:57.804Z","sweetspots":[{"coordinates":[0.64,0.5125],"destination":29,"updated_at":"2015-04-10T13:23:01.501Z"}],"image_url":"http://www.getsweet.io/attachments/store/a2761b6ee1ead4b7884c919fdcd3be273f814068c48abb45d47f787e5863/image.jpeg"},{"id":31,"title":"","description":"","created_at":"2015-04-09T19:30:08.411Z","updated_at":"2015-04-09T19:30:08.411Z","sweetspots":[{"coordinates":[0.88,0.5038],"destination":30,"updated_at":"2015-04-10T12:20:11.545Z"}],"image_url":"http://www.getsweet.io/attachments/store/6733331fcb1b2bea75cf1bdfa45ca5d55be7039ff891487adedcd9397fa4/image.jpeg"},{"id":32,"title":"","description":"","created_at":"2015-04-09T19:30:23.356Z","updated_at":"2015-04-09T19:30:23.356Z","sweetspots":[{"coordinates":[0.8467,0.7113],"destination":30,"updated_at":"2015-04-10T12:20:32.461Z"}],"image_url":"http://www.getsweet.io/attachments/store/7a4ee9be9c1512624b0b1f7a61a91529bfab47b2f42810aa4b7aa94a2267/image.jpeg"},{"id":33,"title":"","description":"","created_at":"2015-04-09T19:30:34.311Z","updated_at":"2015-04-09T19:30:34.311Z","sweetspots":[{"coordinates":[0.7433,0.2826],"destination":34,"updated_at":"2015-04-09T19:36:00.346Z"},{"coordinates":[0.2689,0.3835],"destination":35,"updated_at":"2015-04-09T19:36:04.889Z"},{"coordinates":[0.4621,0.7284],"destination":36,"updated_at":"2015-04-09T19:36:09.137Z"},{"coordinates":[0.91,0.5925],"destination":23,"updated_at":"2015-04-10T12:22:29.776Z"}],"image_url":"http://www.getsweet.io/attachments/store/78c2cbfb9923fed652375370e1cffb3eaeb7e8bd53e6bbe3f7a53011443d/image.jpeg"},{"id":34,"title":"","description":"","created_at":"2015-04-09T19:30:47.451Z","updated_at":"2015-04-09T19:30:47.451Z","sweetspots":[{"coordinates":[0.3983,0.9263],"destination":33,"updated_at":"2015-04-10T12:20:59.447Z"}],"image_url":"http://www.getsweet.io/attachments/store/da97bf6a7271c770a733e50fee7619b5ef4392e91c369fb17d1aaaa2e926/image.jpeg"},{"id":35,"title":"","description":"","created_at":"2015-04-09T19:30:57.014Z","updated_at":"2015-04-09T19:30:57.014Z","sweetspots":[{"coordinates":[0.1983,0.9425],"destination":33,"updated_at":"2015-04-10T12:21:13.397Z"}],"image_url":"http://www.getsweet.io/attachments/store/919146b93788fc7248f023641a4bfc392789d533693e51fde0bd3898f1c6/image.jpeg"},{"id":36,"title":"","description":"","created_at":"2015-04-09T19:31:07.055Z","updated_at":"2015-04-09T19:31:07.055Z","sweetspots":[{"coordinates":[0.365,0.06],"destination":33,"updated_at":"2015-04-10T12:21:28.717Z"}],"image_url":"http://www.getsweet.io/attachments/store/99d98a38e006c58b3ea3bb59b5f3e4bc7291d9dd7bd23668d3543ef7c102/image.jpeg"},{"id":37,"title":"","description":"","created_at":"2015-04-09T19:31:18.392Z","updated_at":"2015-04-09T19:31:18.392Z","sweetspots":[{"coordinates":[0.4988,0.5193],"destination":38,"updated_at":"2015-04-09T19:36:21.569Z"},{"coordinates":[0.8283,0.205],"destination":33,"updated_at":"2015-04-10T12:21:55.464Z"}],"image_url":"http://www.getsweet.io/attachments/store/5bd72543c00663ae7e7549984f82579da1a98c6059ade9812f1f247216c7/image.jpeg"},{"id":38,"title":"","description":"","created_at":"2015-04-09T19:31:28.507Z","updated_at":"2015-04-09T19:31:28.507Z","sweetspots":[{"coordinates":[0.1183,0.2162],"destination":37,"updated_at":"2015-04-10T12:22:10.880Z"}],"image_url":"http://www.getsweet.io/attachments/store/8a7316867b70107cad55d32c740cf7adb89d8c28774fe453c1654fba4282/image.jpeg"},{"id":51,"title":null,"description":null,"created_at":"2015-04-10T15:31:25.923Z","updated_at":"2015-04-10T15:31:25.923Z","sweetspots":[],"image_url":null}]};
            app.storyCollection = new app.StoryCollection(app.storyData.photos);
            app.storyCollection.setFirstImage();
            app.storyView = new app.StoryView({collection: app.storyCollection, el: $container});

            Backbone.history.start();

        } else {
            $.getJSON(data_url, function(data) {
                app.storyData = data;
                app.storyCollection = new app.StoryCollection(app.storyData.photos);
                app.storyCollection.setFirstImage();
                app.storyView = new app.StoryView({collection: app.storyCollection, el: $container});

                Backbone.history.start();

            });
        }

    }

})();
