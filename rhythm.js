var output = document.getElementById("out");
var times = new Array();

document.onkeydown = function(e)
{
    var keyNum = window.event?e.keyCode:e.which;
    if(keyNum==32)
    {
        times.push(getNow());
        if(times.length>20)
        {
            times.shift();
        }
        if(times.length>1)
        {
            output.innerHTML = rhythm(times);
        }else{
            output.innerHTML = "...";
        }
    }
    if(keyNum==46)
    {
        times = new Array();
        output.innerHTML = "..."
    }
}

function getNow()
{
    var t = new Date();
    return t.getTime();
}

function rhythm(arr)
{
    var len = arr.length;
    var r=0;
    for(var i=1; i<len; i++)
    {
        r += (arr[i]-arr[i-1])/(len-1)
    }
    return (60000/r).toFixed(2);
}