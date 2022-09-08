const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: "$10.99",
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: "$7.99",
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: "$8.99",
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: "$5.99",
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: "$12.99",
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: "$9.99",
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: "$15.99",
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: "$12.99",
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: "$3.99",
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const anaMenu = document.getElementById("btn-container") //Anamenüyü oluşturmak için önce id'si ile document içinden seçtik-Burası butonların olduğu yer olacak. bir tane de index içerisinde "all" butonu oluşturduk sabit.

const altMenu = document.querySelector(".section-center"); // Alt menüde gösterilecek ürünlerin divini class'ını yazarak seçiyoruz.

//--------------------------------------------

// *****ANA MENÜ'DEKİ BUTONLARI OLUŞTURALIM **** (Yukarıda verilen Array'in [] yani dizinin içerisindeki objelerin (9 tane obje var) içerisindeki kategori (category) key'lerinin value'lerine (Korea, China ve Japan) göre buttonlar oluşturuyoruz.)

const buttons =[];
menu.forEach(data =>{
  if(!(Object.keys(buttons).includes(data.category))){
    buttons[data.category] = 1
  }
}) //bu komut ile menu arrayinin içerisindeki objectlerin içerisinde keys'lerinin içerisinde category içerenleri 1 olarak belirledik. bunlar buttons isimli yeni array içerisinde olacaklar.

//console.log(buttons) // yazdığımızda [Korea: 1, Japan: 1, China: 1] şeklinde bir array oluştuğunu görüyoruz. Şimdi bu arrayi kullanarak aşağıda menü bölümünü oluşturacağız.

Object.entries(buttons).forEach(dataset=>{
  const key = dataset[0]
  const value = dataset[1] 
// Buradda key'ler yani içerisinde category olanlar için bir variable oluşturduk...
// ]
// console.log(key, value)// button arrayinin içerisindeki her bir objenin keyi ve value (1) değerini içeren 3 farklı variable oluştu

  for (let i=0 ; i < value ; i++ ){    
    const button = document.createElement('button') //herbir key için döngü bir buton elementi oluşturacak
    button.innerText= `${key}` // bu buton elementinin içerisine başta eşlediğimiz key ile text ekliyoruz. Yani başlığı oluşuyor.
    button.classList.add("btn","btn-item") // butonlara css özelliklerini css file içerisinde verdim. /*hover özelliğini kullanarak butonun üzerine gelindiğinde yeşil görünmesini sağladım*/ 
    button.setAttribute('id',`${key}`) // oluşturulan her kategori butonuna kendi adıyla bir id verelim bunları sonra kullanacağız.
    /***PEKİ BUTONLARA TIKLAYINCA NE OLACAK?****/
    button.addEventListener("click",() => {  // addEventListener özelliğini kullandık
      let Foods="";     
      menu.map(item => { //Burada tekrar ana array'e gidiyoruz ve diyoruz ki eğer item içerisindeki category bizim oluşturduğumz key ile eşit ise
        if(item.category === `${key}`){   // yukarıda oluşturduğumuz Foods variable aşağıda oluşturacağımız createFoods() isimli fonksiyona eşit olacak.
          Foods += createFoods(item) //bu fonksiyon aşağıda oluşturuldu...
        }
      })
      altMenu.innerHTML = Foods;  // bu oluşturduğumuz Foods variable'ını da altMenu olarak yukarıda tanımladığımız DOM'un içerisine yani sayfaya ekliyoruz.
    })
    anaMenu.appendChild(button)  // üstte belirlediğimiz anaMenü'nün (parant) içerisine child olarak bu oluşturduğumuz category butonunu ekliyoruz. Burada dikkat edelim index içerisinde zaten bir all butonu var bu yeni butonlar onun yanına eklenecek.
  }
})

//****şimdi Birde sabit olarak indexte bulunan "all" ana menüsünün altına altMenü ekleyelim...****

const listAllFoods = () => {
  let Foods=""; 
  menu.map(item => {
    Foods += createFoods(item)
  })
  altMenu.innerHTML = Foods;
}// yukarıdakine benzer şekilde fonksiyon içeren bir listAllFoods isimli bir variable oluşturduk

document.querySelector("#all").addEventListener("click",listAllFoods); // ve addEventListener ile bu all menüsüne tıkladığımızda listAllFoods() isimli fonksiyonun çalışmasını söyledik.

document.addEventListener("DOMContentLoaded",listAllFoods); // bu da sayfa açıldığında direkt default olarak ekrana all menüsününün geleceği yani listAllFoods variable ve fonksiyonunun çalışacağını söylüyoruz. 

//Peki ANA MENÜ İÇERİSİNDEKİ OBJELERDE YER ALAN VERİLER KULLANILARAK NASIL RESİMLİ VE AÇAKLAMALI BİR MENÜ'YÜ HTML OLARAK OLUŞTURACAĞIZ?

//İşte yukarıda devamlı atıf yaptığımız createFoods isimli fonksiyonu burada oluşturuyoruz

const createFoods = (food) => {
  let html = `
    <div class="menu-items col-lg-6 col-sm-12">
      <img class="photo" src="${food.img}" alt="${food.title}">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${food.title}</h4>
          <h4 class="price">${food.price}</h4>
        </div>
        <div class="menu-text">${food.desc}</div>
      </div>
    </div>  
  `
  return html;
} //Buradaki menu-items, photo, menu-info, menu-title ve menu-text gibi class'lar ile h4 elementinin sayfadaki görünümleri yine css dosyası içerisinde belirlenmiştir.

