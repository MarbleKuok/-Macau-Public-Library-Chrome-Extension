window.onmouseup = function(){
    var selection = window.getSelection();
    if(selection.anchorOffset != selection.extentOffset){
        browser.runtime.sendMessage(selection.toString());
    }
}