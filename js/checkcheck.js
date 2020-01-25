function check(){
    var url = 'https://webpac.library.gov.mo/client/zh_TW/webpac/search/results?qu='+encodeURIComponent(document.getElementById("searchtext").value );
    window.open(url, '_blank');
}

document.getElementById('q').onclick=check;