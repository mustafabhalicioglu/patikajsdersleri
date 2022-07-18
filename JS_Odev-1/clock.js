
//önce ismi prompt ile alıp sayfada gösterelim:


function greatingDeneme(isim){
    isim = prompt("Lütfen Önce İsminizi Giriniz")
    if (isim.length >= 1) {
        myName.innerHTML = isim;
    } else greatingDeneme()
  }
  greatingDeneme()

//Zaman ekleyelim

var myClock = document.getElementById('myClock');

function time() {
  var tarih = new Date();
  var saniye = tarih.getSeconds();
  var dakika = tarih.getMinutes();
  var saat = tarih.getHours();
  var gun = tarih.getDay();
  var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  myClock.textContent = 
    ("0" + saat).substr(-2) + ":" + ("0" + dakika).substr(-2) + ":" + ("0" + saniye).substr(-2) + (" " + gunler[gun]);
}

setInterval(time, 1000);

