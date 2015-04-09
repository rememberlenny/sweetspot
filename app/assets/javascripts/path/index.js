/**
 *  http://localhost:3000/stories/:id/path
 *
 */

$(document).ready(function(){
  if($('.path-type').length > 0){
    init();
  }
});

//temp mock data
var mock_data = [
    {
        img: 'img/01.jpg',
        hotspots: [
            {
                location: [.825, .2],
                map: 'img/02.jpg'
            }
        ]
    },
    {
        img: 'img/02.jpg',
        hotspots: [
            {
                location: [.50, .40],
                map: 'img/03.jpg'
            }
        ]
    },
    {
        img: 'img/03.jpg',
        hotspots: [
            {
                location: [.20, .40],
                map: 'img/01.jpg'
            },
            {
                location: [.50, .80],
                map: 'img/04.jpg'
            },
            

        ]
    },
    {
        img: 'img/04.jpg',
        hotspots: [
            {
                location: [.20, .40],
                map: 'img/03.jpg'
            },
            {
                location: [.50, .80],
                map: 'img/01.jpg'
            },
            

        ]
    }
];

//global variables

var $container;

//array in which to store view images
var viewedStoryImages = [];


//function to kick off the app
function init(){
    $container = $('.container');
    renderStoryImage($container, mock_data[0]);
}


//render an individual hotspot into an element
function createHotspot($el, hotspot) {
    var pcnt_left = Math.round(hotspot.location[0] * 100);
    var pcnt_top = Math.round(hotspot.location[1] * 100);
    var hotspot_template = _.template("<div data-map='<%= map%>' class='hotspot' style='left: <%= pcnt_left %>%; top: <%= pcnt_top %>%;'></div>");
    var hotspot_markup = hotspot_template({pcnt_left: pcnt_left, pcnt_top: pcnt_top, map: hotspot.map});
    $el.append(hotspot_markup);
}

//render an entire story image with hotspots into an element
function renderStoryImage($el, storyObj) {
    var isFirst = false;
    if (mock_data.indexOf(storyObj) == 0) {
        isFirst = true;
    }
    var template = _.template("<div class='story-image'><% if (!first) { %><div class='story-image-control'><div class='btn btn-primary back-button'>back</div></div><%}%><img src='<%= story.img %>' ></div>");
    var markup = template({story: storyObj, first: isFirst});
    $el.append(markup);
    _.each(storyObj.hotspots, function(hotspot) {
        createHotspot($el.find('.story-image'), hotspot);
    });

    $el.find('.back-button').click(backClick);

    $el.find(".story-image").find(".hotspot").click(hotspotClick);
}


//save reference to viewed image
function storeOldStoryImage($el) {
    var imgName = $el.data('map');
    var storyImageObj = _.findWhere(mock_data, {img: imgName});
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
    var oldImgName = $parent.find('img').attr('src');
    var oldStoryImage = _.findWhere(mock_data, {img: oldImgName});
    viewedStoryImages.push(oldStoryImage);

    //lookup next image from data
    var newImgName = $this.data('map');

    var newStoryImage = _.findWhere(mock_data, {img: newImgName});
    console.log(newStoryImage);
    renderStoryImage($('.container'), newStoryImage);
}
