/**
 *  http://localhost:3000/stories/:id/path
 *
 */
(function(){

    $(document).ready(function(){
      if($('.path-type').length > 0){
        init();
      }
    });

    var storyData;


    //temp mock data
    // var storyData = {"story":{"name":"Bus Stop","created_at":"2015-04-09T18:17:37.814Z","updated_at":"2015-04-09T18:17:37.814Z","blurb":null,"byline":null},"photos":[{"id":2,"title":"Bus Stop","description":"","created_at":"2015-04-09T18:18:09.418Z","updated_at":"2015-04-09T18:18:09.418Z","sweetspots":[{"coordinates":[0.177,0.6014],"destination":3,"updated_at":"2015-04-09T19:03:52.899Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/9d7cef0be0e6bbd80bc1f53e354500e5ebd5e7d4b2516fdfff67d694fc78/image.jpeg"},{"id":3,"title":"Empty lobby","description":"","created_at":"2015-04-09T18:38:37.176Z","updated_at":"2015-04-09T18:38:37.176Z","sweetspots":[{"coordinates":[0.4456,0.2192],"destination":4,"updated_at":"2015-04-09T19:09:03.647Z"},{"coordinates":[0.46,0.037],"destination":5,"updated_at":"2015-04-09T19:09:44.423Z"},{"coordinates":[0.5195,0.4192],"destination":7,"updated_at":"2015-04-09T19:14:19.773Z"},{"coordinates":[0.4661,0.9452],"destination":15,"updated_at":"2015-04-09T19:23:39.998Z"},{"coordinates":[0.4476,0.7959],"destination":18,"updated_at":"2015-04-09T19:23:51.079Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/2d9d5b6e7530e9134f537c92c562bba628a84f21c4a6c5d0fa37a0bd7939/image.jpeg"},{"id":4,"title":"John Doe 01","description":"","created_at":"2015-04-09T18:41:17.911Z","updated_at":"2015-04-09T18:41:17.911Z","sweetspots":[{"coordinates":[0.8398,0.8589],"destination":7,"updated_at":"2015-04-09T19:32:16.188Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/538155984b1e8ed3c531f7ded05cfc70a1a5badf9f3a60b6a8fed1b2c932/image.jpeg"},{"id":5,"title":"Outside 01 (red sweater)","description":"","created_at":"2015-04-09T18:42:34.507Z","updated_at":"2015-04-09T18:42:34.507Z","sweetspots":[{"coordinates":[0.4887,0.2877],"destination":6,"updated_at":"2015-04-09T19:11:41.786Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/babcd6089cbd29972285f65c366cf5edcfe60dea2c68c3de07e1ad4e63df/image.jpeg"},{"id":6,"title":"Outside 02 (smoker)","description":"","created_at":"2015-04-09T18:43:48.819Z","updated_at":"2015-04-09T18:43:48.819Z","sweetspots":[{"coordinates":[0.3737,0.889],"destination":7,"updated_at":"2015-04-09T19:32:56.667Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/72dc5053059d52c123521d5fd3a4787677ba6c7effaedd1d526a32b87783/image.jpeg"},{"id":7,"title":"Full lobby","description":"","created_at":"2015-04-09T19:13:02.226Z","updated_at":"2015-04-09T19:13:02.226Z","sweetspots":[{"coordinates":[0.7762,0.5301],"destination":8,"updated_at":"2015-04-09T19:22:08.086Z"},{"coordinates":[0.386,0.3699],"destination":9,"updated_at":"2015-04-09T19:22:36.439Z"},{"coordinates":[0.2587,0.9233],"destination":18,"updated_at":"2015-04-09T19:34:34.432Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/b08fe054342b4c1c09fab903abd8145006e709e7edea8f3236c73364c263/image.jpeg"},{"id":8,"title":"John Doe 02","description":"","created_at":"2015-04-09T19:13:28.770Z","updated_at":"2015-04-09T19:13:28.770Z","sweetspots":[{"coordinates":[0.6694,0.2384],"destination":7,"updated_at":"2015-04-09T19:34:20.809Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/f626f45f8b71f1802e8d2daf39493d16fe1194f459b782acb6423c2c6a16/image.jpeg"},{"id":9,"title":"John Doe 03","description":"","created_at":"2015-04-09T19:13:53.123Z","updated_at":"2015-04-09T19:13:53.123Z","sweetspots":[{"coordinates":[0.308,0.4973],"destination":10,"updated_at":"2015-04-09T19:25:11.756Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/9d614dcc5654c394174dc7bff9efc06dfbcc5dad80f3c1a4999ebd52b8cc/image.jpeg"},{"id":10,"title":"Joe Doe 03 - 02","description":"","created_at":"2015-04-09T19:15:07.857Z","updated_at":"2015-04-09T19:15:07.857Z","sweetspots":[{"coordinates":[0.0657,0.9205],"destination":11,"updated_at":"2015-04-09T19:25:49.728Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/6ff4ad06fef13960b39bfbfd565764c4ec40d92ba1a75d8d61ad78a49d2b/image.jpeg"},{"id":11,"title":"Prayer","description":"","created_at":"2015-04-09T19:15:30.179Z","updated_at":"2015-04-09T19:15:30.179Z","sweetspots":[{"coordinates":[0.4148,0.5671],"destination":12,"updated_at":"2015-04-09T19:26:31.377Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/5194d6dec68f2387e31a4b67c3d9085ea6bc4fc982165c44cad090eced3c/image.jpeg"},{"id":12,"title":"Bus line 01","description":"","created_at":"2015-04-09T19:15:58.378Z","updated_at":"2015-04-09T19:15:58.378Z","sweetspots":[{"coordinates":[0.2772,0.937],"destination":13,"updated_at":"2015-04-09T19:26:57.600Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/2c37885aaada0807a60157b4428f29e1f8922ac42513ab4e73cc41b9095d/image.jpeg"},{"id":13,"title":"On the Bus 01 (left)","description":"","created_at":"2015-04-09T19:16:28.035Z","updated_at":"2015-04-09T19:16:28.035Z","sweetspots":[{"coordinates":[0.7741,0.8712],"destination":14,"updated_at":"2015-04-09T19:27:12.994Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/ff9637dc732bedd101e9d0c7ff6a3f389a467f6719e166b8073e645ff36c/image.jpeg"},{"id":14,"title":"On the Bus 02 (right)","description":"","created_at":"2015-04-09T19:17:04.654Z","updated_at":"2015-04-09T19:17:04.654Z","sweetspots":[{"coordinates":[0.8768,0.3233],"destination":22,"updated_at":"2015-04-09T19:30:30.185Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/637df8b5d2bde3fc7a3398d03c6e30cc036e38e27c2ed8f5294c86cb92d5/image.jpeg"},{"id":15,"title":"Pay phones ","description":"","created_at":"2015-04-09T19:17:40.899Z","updated_at":"2015-04-09T19:17:40.899Z","sweetspots":[{"coordinates":[0.7146,0.7],"destination":16,"updated_at":"2015-04-09T19:27:37.009Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/f129121ac01d568502c0d3e71906d7f09448ce6731c3d42957ab10fd3d56/image.jpeg"},{"id":16,"title":"John Doe 04","description":"","created_at":"2015-04-09T19:18:02.365Z","updated_at":"2015-04-09T19:18:02.365Z","sweetspots":[{"coordinates":[0.3347,0.1973],"destination":17,"updated_at":"2015-04-09T19:27:54.962Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/97d987737800df9a7b50c2ad02c856ea3e6d54717bca8a711cd40360d1f9/image.jpeg"},{"id":17,"title":"John Doe 04 - 2","description":"","created_at":"2015-04-09T19:18:29.122Z","updated_at":"2015-04-09T19:18:29.122Z","sweetspots":[{"coordinates":[0.5647,0.1356],"destination":7,"updated_at":"2015-04-09T19:36:07.380Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/8e520a29e5342629711b2c69efa36f4dd64b60334beb59d1ee73334e6f07/image.jpeg"},{"id":18,"title":"Upstairs ","description":"","created_at":"2015-04-09T19:19:08.002Z","updated_at":"2015-04-09T19:19:08.002Z","sweetspots":[{"coordinates":[0.462,0.474],"destination":19,"updated_at":"2015-04-09T19:28:24.037Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/4a6c6e0fa3837d62b1bd922bbf5b95f0d73053f75981a11b98ebc7959dee/image.jpeg"},{"id":19,"title":"Bus Manager 01","description":"","created_at":"2015-04-09T19:19:29.614Z","updated_at":"2015-04-09T19:19:29.614Z","sweetspots":[{"coordinates":[0.8583,0.6096],"destination":20,"updated_at":"2015-04-09T19:28:42.501Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/01d1002e2568a6826a685b00dcb7dc16aa19ec3b94f3bbc330cff5093c72/image.jpeg"},{"id":20,"title":"Bus Manager 02 - (selling tickets)","description":"","created_at":"2015-04-09T19:19:56.931Z","updated_at":"2015-04-09T19:19:56.931Z","sweetspots":[{"coordinates":[0.4251,0.6041],"destination":21,"updated_at":"2015-04-09T19:29:06.219Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/91866d988c15efd123340d1a3b7b14f1c379a5beaacd447054dadff74fa7/image.jpeg"},{"id":21,"title":"Bus line 02 (tix in hand)","description":"","created_at":"2015-04-09T19:20:33.788Z","updated_at":"2015-04-09T19:20:33.788Z","sweetspots":[{"coordinates":[0.5647,0.1205],"destination":11,"updated_at":"2015-04-09T19:30:00.284Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/66425845ef9a1c088c02f0ea6e12ad6100b8dd9fce0cf532a9119a9766b3/image.jpeg"},{"id":22,"title":"Empty","description":"","created_at":"2015-04-09T19:20:53.782Z","updated_at":"2015-04-09T19:20:53.782Z","sweetspots":[{"coordinates":[0.4004,0.3438],"destination":2,"updated_at":"2015-04-09T19:36:42.092Z"}],"image_url":"http://getsweetspot.herokuapp.com/attachments/store/2bc6386d4212b16085fc6e67bb10f774f926a7f8a58a8efdb070770bd023/image.jpeg"}]};


    //global variables

    var $container;

    //array in which to store view images
    var viewedStoryImages = [];


    //function to kick off the app
    function init(){
        $container = $('.container');
        $container.empty();
        var data_url = window.location.href.replace('/path', '.json');
        if (location.hostname == "localhost") {
            //temp mock data
            storyData = {"story":{"name":"SNDMakesDC","created_at":"2015-04-09T19:26:30.402Z","updated_at":"2015-04-10T15:31:25.907Z","blurb":"","byline":"","featured":0,"first_slide":23},"photos":[{"id":23,"title":"","description":"","created_at":"2015-04-09T19:28:01.658Z","updated_at":"2015-04-09T19:28:01.658Z","sweetspots":[{"coordinates":[0.9487,0.0587],"destination":24,"updated_at":"2015-04-09T19:33:36.767Z"},{"coordinates":[0.5917,0.0128],"destination":29,"updated_at":"2015-04-09T19:33:46.442Z"},{"coordinates":[0.621,0.3284],"destination":33,"updated_at":"2015-04-09T19:33:55.448Z"},{"coordinates":[0.6626,0.6349],"destination":37,"updated_at":"2015-04-09T19:34:02.905Z"}],"image_url":"http://www.getsweet.io/attachments/store/a8dea571e5a67c89b0473563b0845d4dd3ec92b8cd07548e602a5f59f8ca/image.jpeg"},{"id":24,"title":"","description":"","created_at":"2015-04-09T19:28:13.583Z","updated_at":"2015-04-09T19:28:13.583Z","sweetspots":[{"coordinates":[0.3765,0.3578],"destination":25,"updated_at":"2015-04-09T19:34:27.927Z"},{"coordinates":[0.577,0.4917],"destination":27,"updated_at":"2015-04-09T19:34:37.246Z"},{"coordinates":[0.5721,0.655],"destination":26,"updated_at":"2015-04-09T19:34:53.712Z"},{"coordinates":[0.3154,0.8606],"destination":30,"updated_at":"2015-04-09T19:35:03.565Z"},{"coordinates":[0.1858,0.7083],"destination":32,"updated_at":"2015-04-09T19:35:11.087Z"}],"image_url":"http://www.getsweet.io/attachments/store/707445887a4b96b389dc4b17bf0a8f83141154ea3564384c6fd61363143d/image.jpeg"},{"id":25,"title":"","description":"","created_at":"2015-04-09T19:29:08.708Z","updated_at":"2015-04-09T19:29:08.708Z","sweetspots":[{"coordinates":[0.7517,0.0887],"destination":26,"updated_at":"2015-04-10T12:18:06.813Z"},{"coordinates":[0.6967,0.9337],"destination":25,"updated_at":"2015-04-10T12:18:13.823Z"}],"image_url":"http://www.getsweet.io/attachments/store/2184c7aa12a6463a89707021fea5f8d718509dca587d8b31cca0d8557616/image.jpeg"},{"id":26,"title":"","description":"","created_at":"2015-04-09T19:29:16.424Z","updated_at":"2015-04-09T19:29:16.424Z","sweetspots":[{"coordinates":[0.8433,0.8638],"destination":29,"updated_at":"2015-04-10T12:19:36.833Z"}],"image_url":"http://www.getsweet.io/attachments/store/e691b73eda5e719b30434de158522894a3ba04d33ed6e2fc4514cf8f70d3/image.jpeg"},{"id":27,"title":"","description":"","created_at":"2015-04-09T19:29:26.740Z","updated_at":"2015-04-09T19:29:26.740Z","sweetspots":[{"coordinates":[0.5867,0.9513],"destination":29,"updated_at":"2015-04-10T12:18:41.254Z"}],"image_url":"http://www.getsweet.io/attachments/store/b6ec2e3d8bac9f125d6f36257474741f4887f0ec62732440ca999300ecb4/image.jpeg"},{"id":28,"title":"","description":"","created_at":"2015-04-09T19:29:37.555Z","updated_at":"2015-04-09T19:29:37.555Z","sweetspots":[{"coordinates":[0.7867,0.7462],"destination":26,"updated_at":"2015-04-10T12:18:59.312Z"}],"image_url":"http://www.getsweet.io/attachments/store/3eb0fe95108f614c90ae05ec4e55e6a8c8d098e075f684762abf52b73766/image.jpeg"},{"id":29,"title":"","description":"","created_at":"2015-04-09T19:29:46.875Z","updated_at":"2015-04-09T19:29:46.875Z","sweetspots":[{"coordinates":[0.4597,0.2734],"destination":30,"updated_at":"2015-04-09T19:35:29.094Z"},{"coordinates":[0.5086,0.3193],"destination":31,"updated_at":"2015-04-09T19:35:36.950Z"},{"coordinates":[0.4792,0.745],"destination":33,"updated_at":"2015-04-09T19:35:43.054Z"}],"image_url":"http://www.getsweet.io/attachments/store/13a8b55e52fbcd64071c73bbd57f8a2e4b3b8d47f5a8635ea755a10460fb/image.jpeg"},{"id":30,"title":"","description":"","created_at":"2015-04-09T19:29:57.804Z","updated_at":"2015-04-09T19:29:57.804Z","sweetspots":[{"coordinates":[0.64,0.5125],"destination":29,"updated_at":"2015-04-10T13:23:01.501Z"}],"image_url":"http://www.getsweet.io/attachments/store/a2761b6ee1ead4b7884c919fdcd3be273f814068c48abb45d47f787e5863/image.jpeg"},{"id":31,"title":"","description":"","created_at":"2015-04-09T19:30:08.411Z","updated_at":"2015-04-09T19:30:08.411Z","sweetspots":[{"coordinates":[0.88,0.5038],"destination":30,"updated_at":"2015-04-10T12:20:11.545Z"}],"image_url":"http://www.getsweet.io/attachments/store/6733331fcb1b2bea75cf1bdfa45ca5d55be7039ff891487adedcd9397fa4/image.jpeg"},{"id":32,"title":"","description":"","created_at":"2015-04-09T19:30:23.356Z","updated_at":"2015-04-09T19:30:23.356Z","sweetspots":[{"coordinates":[0.8467,0.7113],"destination":30,"updated_at":"2015-04-10T12:20:32.461Z"}],"image_url":"http://www.getsweet.io/attachments/store/7a4ee9be9c1512624b0b1f7a61a91529bfab47b2f42810aa4b7aa94a2267/image.jpeg"},{"id":33,"title":"","description":"","created_at":"2015-04-09T19:30:34.311Z","updated_at":"2015-04-09T19:30:34.311Z","sweetspots":[{"coordinates":[0.7433,0.2826],"destination":34,"updated_at":"2015-04-09T19:36:00.346Z"},{"coordinates":[0.2689,0.3835],"destination":35,"updated_at":"2015-04-09T19:36:04.889Z"},{"coordinates":[0.4621,0.7284],"destination":36,"updated_at":"2015-04-09T19:36:09.137Z"},{"coordinates":[0.91,0.5925],"destination":23,"updated_at":"2015-04-10T12:22:29.776Z"}],"image_url":"http://www.getsweet.io/attachments/store/78c2cbfb9923fed652375370e1cffb3eaeb7e8bd53e6bbe3f7a53011443d/image.jpeg"},{"id":34,"title":"","description":"","created_at":"2015-04-09T19:30:47.451Z","updated_at":"2015-04-09T19:30:47.451Z","sweetspots":[{"coordinates":[0.3983,0.9263],"destination":33,"updated_at":"2015-04-10T12:20:59.447Z"}],"image_url":"http://www.getsweet.io/attachments/store/da97bf6a7271c770a733e50fee7619b5ef4392e91c369fb17d1aaaa2e926/image.jpeg"},{"id":35,"title":"","description":"","created_at":"2015-04-09T19:30:57.014Z","updated_at":"2015-04-09T19:30:57.014Z","sweetspots":[{"coordinates":[0.1983,0.9425],"destination":33,"updated_at":"2015-04-10T12:21:13.397Z"}],"image_url":"http://www.getsweet.io/attachments/store/919146b93788fc7248f023641a4bfc392789d533693e51fde0bd3898f1c6/image.jpeg"},{"id":36,"title":"","description":"","created_at":"2015-04-09T19:31:07.055Z","updated_at":"2015-04-09T19:31:07.055Z","sweetspots":[{"coordinates":[0.365,0.06],"destination":33,"updated_at":"2015-04-10T12:21:28.717Z"}],"image_url":"http://www.getsweet.io/attachments/store/99d98a38e006c58b3ea3bb59b5f3e4bc7291d9dd7bd23668d3543ef7c102/image.jpeg"},{"id":37,"title":"","description":"","created_at":"2015-04-09T19:31:18.392Z","updated_at":"2015-04-09T19:31:18.392Z","sweetspots":[{"coordinates":[0.4988,0.5193],"destination":38,"updated_at":"2015-04-09T19:36:21.569Z"},{"coordinates":[0.8283,0.205],"destination":33,"updated_at":"2015-04-10T12:21:55.464Z"}],"image_url":"http://www.getsweet.io/attachments/store/5bd72543c00663ae7e7549984f82579da1a98c6059ade9812f1f247216c7/image.jpeg"},{"id":38,"title":"","description":"","created_at":"2015-04-09T19:31:28.507Z","updated_at":"2015-04-09T19:31:28.507Z","sweetspots":[{"coordinates":[0.1183,0.2162],"destination":37,"updated_at":"2015-04-10T12:22:10.880Z"}],"image_url":"http://www.getsweet.io/attachments/store/8a7316867b70107cad55d32c740cf7adb89d8c28774fe453c1654fba4282/image.jpeg"},{"id":51,"title":null,"description":null,"created_at":"2015-04-10T15:31:25.923Z","updated_at":"2015-04-10T15:31:25.923Z","sweetspots":[],"image_url":null}]};
            firstSlideNum = storyData.story.first_slide;
            firstSlide = _.findWhere(storyData.photos, {id: firstSlideNum});

            renderStoryImage($container, firstSlide);
        } else {
            $.getJSON(data_url, function(data) {
                storyData = data;
                firstSlideNum = storyData.story.first_slide;
                firstSlide = _.findWhere(storyData.photos, {id: firstSlideNum});
                renderStoryImage($container, firstSlide);
            });
        }

    }


    //render an individual hotspot into an element
    function createSweetspot($el, sweetspot) {
        var pcnt_left = Math.round(sweetspot.coordinates[1] * 100);
        var pcnt_top = Math.round(sweetspot.coordinates[0] * 100);
        var sweetspot_template = _.template("<div data-destination='<%= destination%>' class='hotspot' style='left: <%= pcnt_left %>%; top: <%= pcnt_top %>%;'></div>");
        var sweetspot_markup = sweetspot_template({pcnt_left: pcnt_left, pcnt_top: pcnt_top, destination: sweetspot.destination});
        $el.append(sweetspot_markup);
    }

    //render an entire story image with hotspots into an element
    function renderStoryImage($el, storyObj) {
        var isFirst = false;
        if (storyObj.id == storyData.story.first_slide) {
            isFirst = true;
        }
        var template = _.template("<div data-id='<%= story.id %>' class='story-image'><% if (!first) { %><div class='story-image-control'><div class='back-button'>back<img src='' alt=''></div></div><%} else {%> <div class='story-info'><h1 class'story-title'> <%=info.name%></h1><h3><%=info.blurb%></h3><h3><%=info.byline%></h3></div><% } %><img src='<%= story.image_url %>' ></div>");
        var markup = template({story: storyObj, first: isFirst, info: storyData.story});
        $el.append(markup);
        _.each(storyObj.sweetspots, function(sweetspot) {
            createSweetspot($el.find('.story-image'), sweetspot);
        });

        $el.find('.back-button').click(backClick);
        $el.find(".story-image").find(".hotspot").click(hotspotClick);

        // adjustSizeOfImage();
    }

    // function adjustSizeOfImage(){
    //     $( ".story-image img" ).load(function() {
    //         var $image = $('.story-image img');
    //         var wh = $(window).height();
    //         var ww = $(window).width();
    //         var ih = $image.height();
    //         var iw = $image.width();

    //         console.log('wh/ww: ', wh/ww);
    //         console.log('ih/iw: ', ih/iw);

    //         if(wh/ww > ih/iw ){
    //           $image.css('max-height', wh +'px');
    //           $image.css('max-width', '100%');
    //         } else {
    //           $image.css('max-width', '100%');
    //         }
    //         iw = $('.story-image img').width();
    //         $('.story-image').css('width', iw);
    //     });
    // }

    //save reference to viewed image
    function storeOldStoryImage($el) {
        var imgName = $el.data('destination');
        console.log(imgName);
        var storyImageObj = _.findWhere(storyData, {id: imgName});
        viewedStoryImages.push(storyImageObj);
    }

    //remove story image that is done
    function removeStoryImage($el) {
        $el.addClass('hide');
        _.delay(function() {
            $el.remove();
        }, 250);
    }


    //go to previous story image
    function goBack() {
        newStoryImage = viewedStoryImages.pop();
        renderStoryImage($container, newStoryImage);
    }


    //event handler for back buttton click
    function backClick(e) {
        $this = $(e.currentTarget);
        $parent = $($($this.parent()).parent());
        removeStoryImage($parent);
        goBack();

    }


    //even handlower for hotspot click
    function hotspotClick(e) {
        console.log("click");
        $this = $(e.currentTarget);
        $parent = $($this.parent());
        removeStoryImage($parent);

        //find oldImage data and story it in array
        var oldImgName = $parent.data('id');
        console.log(oldImgName);
        var oldStoryImage = _.findWhere(storyData.photos, {id: oldImgName});
        viewedStoryImages.push(oldStoryImage);

        //lookup next image from data
        var newImgName = $this.data('destination');
        console.log(newImgName);

        var newStoryImage = _.findWhere(storyData.photos, {id: newImgName});
        console.log(newStoryImage);
        renderStoryImage($('.container'), newStoryImage);
    }

})();
