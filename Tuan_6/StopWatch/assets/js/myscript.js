window.onload = function() {
    var phut = 00;
    var giay = 00;
    var miligiay = 00;
    var getphut = document.getElementById('phut');
    var getgiay = document.getElementById('giay');
    var getmiligiay = document.getElementById('miligiay');
    var getstart = document.getElementById('start');
    var getstop = document.getElementById('stop');
    var getreset = document.getElementById('reset')
    var Interval;

    getstart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTime, 10);
    }
    getstop.onclick = function() {
        clearInterval(Interval);
    }
    getreset.onclick = function() {
        clearInterval(Interval);
        phut = "00";
        giay = "00";
        miligiay = "00";
        getgiay.innerHTML = giay;
        getphut.innerHTML = phut;
        getmiligiay.innerHTML = miligiay;
    }
    function startTime() {
        console.log("giay")
        miligiay++;
        if(miligiay < 9) {
            getmiligiay.innerHTML = "0" + miligiay;
        }
        if(miligiay > 9) {
            getmiligiay.innerHTML = miligiay;
        }
        if(miligiay > 99) {
            giay++;
            getgiay.innerHTML = "0" + giay;
            miligiay = 0;
            getmiligiay.innerHTML = "0" + miligiay;
        }
        if(giay > 9) {
            getgiay.innerHTML = giay;
        }
        if(giay > 60){
            phut++;
            getphut.innerHTML = "0" + phut;
            giay = 0;
            miligiay = 0;
            getgiay.innerHTML = "0" + giay;
            getmiligiay.innerHTML= "0" + miligiay;
        }
    }
}