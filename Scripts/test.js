document.addEventListener("DOMContentLoaded", function(event) {

    //Load YouTube Videos on page...
    let youTubeVideos = document.querySelectorAll('.youtube');
    for (var i = 0; i < youTubeVideos.length; i++) {
        // var thumbnail = "https://img.youtube.com/vi/"+ youTubeVideos[i].dataset.embed +"/maxresdefault.jpg";
        var thumbnail = "https://i.ytimg.com/vi_webp/"+ youTubeVideos[i].dataset.embed +"/sddefault.webp";
        // let width = youTubeVideos[i].dataset.width;
        // let height = youTubeVideos[i].dataset.height;
        //set CSS
        // youTubeVideos[i].style.cssText = "max-width: 560px;margin: 60px auto;";
        youTubeVideos[i].style.cssText = "max-width: 560px;";
        // youTubeVideos[i].style.cssText = "max-width:"+width;

        //set microdata attributes for SEO
        youTubeVideos[i].setAttribute("itemprop", "video");
        youTubeVideos[i].setAttribute("itemscope", '');
        youTubeVideos[i].setAttribute("itemtype", "http://schema.org/VideoObject");

        //set HTML
        // youTubeVideos[i].innerHTML = '<div class="play"></div>' +
        youTubeVideos[i].innerHTML = '' +
            '<meta itemprop="embedURL" content="https://www.youtube.com/embed/' +  youTubeVideos[i].dataset.embed +'" />' +
            '<div class="ytp-cued-thumbnail-overlay" data-layer="4">'+
            '<div class="ytp-cued-thumbnail-overlay-image" style="background-image: url(' + thumbnail + ');"></div>'+
            '<button class="ytp-large-play-button ytp-button" aria-label="Play"><svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg></button></div>';
            // '<div class="ytp-cued-thumbnail-overlay-image" style="background-image:' + thumbnail + '"></div>';
            // '<img style="cursor: pointer; height:'+ youTubeVideos[i].dataset.height +'px;" width="'+ youTubeVideos[i].dataset.width +'" height="'+ youTubeVideos[i].dataset.height +'" src="' + thumbnail + '" />';

        //add click event that will load YouTube video
        youTubeVideos[i].addEventListener( "click", function(event) {

            let closest = event.target.closest('.youtube');
            this.innerHTML = '<iframe width="'+ closest.dataset.width +'" height="'+ closest.dataset.height +'" frameBorder="0" ' +
                'allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"' +
                'src="https://www.youtube.com/embed/' + this.dataset.embed + '?enablejsapi=1&rel=0&showinfo=0&autoplay=1"' +
                ' allowFullScreen="allowfullscreen"></iframe>';
        } );

    }

})


// $(document).ready(function () {
//     $('.Slider').slick({
//         draggable: true,
//         swipe: true,
//         dots: true,
//         arrows: true,
//         infinite: true,
//         speed: 200,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         variableWidth: false,
//         responsive: [{
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//             }
//         },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     });
// });

// (function () {
//     var youtube = document.querySelectorAll(".youtube");
//     for (var i = 0; i < youtube.length; i++) {
//         var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";
//         var image = new Image();
//         image.src = source;
//         image.addEventListener("load", function () {
//             youtube[i].appendChild(image);
//         }(i));
//         youtube[i].addEventListener("click", function () {
//             var iframe = document.createElement("iframe");
//             iframe.setAttribute("frameborder", "0");
//             iframe.setAttribute("allowfullscreen", "");
//             iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed +
//                 "?rel=0&showinfo=0&autoplay=1");
//             this.innerHTML = "";
//             this.appendChild(iframe);
//         });
//     };
// })();