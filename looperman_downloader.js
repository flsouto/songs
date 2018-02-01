var queue = [];
$('[class$=download]').each(function(){
    var href = $(this).attr('href');
    if(href.match(/getfiles/)){
        queue.push(href);
    }
});

var interv = setInterval(function(){
    if(queue.length){
        location.href = queue.pop();
    } else {
        clearInterval(interv);
    }
    
}, 10000);
