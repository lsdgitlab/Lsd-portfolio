function main() {
    var obj = {
        text: "test",
        // gotoId : (id)=>{
        //     let heightOfNav = 0;
        //     if($('.acc-header').length){
        //       heightOfNav = $('.acc-header').outerHeight(true);
        //     }
        //     console.log(heightOfNav)
        //     if($("#"+id).length === 1)
        //       $([document.documentElement, document.body]).animate({
        //           scrollTop: $("#"+id).offset().top - heightOfNav,
        //       }, 1000);
        //   },
        }


    return obj;
}
function gotoId(id){
    let heightOfNav = 0;
    if($('.acc-header').length){
        heightOfNav = $('.acc-header').outerHeight(true);
    }
    if($("#"+id).length === 1)
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#"+id).offset().top - heightOfNav,
        }, 1000);
}
function playPause(video) { 
    if (video.paused) 
        video.play(); 
    else 
        video.pause(); 
} 
export { gotoId, playPause}
