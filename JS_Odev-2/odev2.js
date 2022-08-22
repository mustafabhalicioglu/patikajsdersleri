//****ÖDEVİN KONUSU*******/

// Listeye boş karakter eklenemiyor. Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor.
// Yazacağınız JavaScript kodu içerisinde element eklemeyi sağlayan bir fonksiyon, element silmeyi sağlayan bir fonksiyon, yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.
// Element eklendiğinde ve hata verirken sağ üstte uyarı verdiğini fark etmişsinizdir. Bunu sağlayan Bootstrap Toast bildirimdir. Sayfaya gidip toast nedir nasıl yapılır bunu araştırın ve kodunuza ekleyin.
// Önce ana fonksiyonlar için uğraşın. Yapıldı, toast bildirim bunlar biraz daha için artistliği. Öncelikli amacını sağlıyor olması lazım.
// Yazdığınız js dosyasını projenize eklemeyi unutmayın.
// Bonus

// Yaptığınız yapıya Local Storage'ı da ekleyip verilerin kaybolmamasını sağlayın.

//******HADİ BAŞLAYALIM */ 

// Öncelikle html içerisinde işlem yapacağımız elementlerin değişkenlerini oluşturuyoruz:

let inputDOM = document.querySelector("#task")// Bilgiyi alacağımız inputu id si ile seçiyoruz
let btnDOM = document.querySelector("#liveToastBtn")// tıkladığında bilgiyi alacağımız butonu seçiyoruz.
let list = document.querySelector("#list")
let li = document.querySelector("#list li")



// Olaylar
btnDOM.addEventListener("click", newList) //addEventListener kullanarak click olduğunda (newlist) isimli fonksiyonu kullanarak bilgiyi al dedik
document.addEventListener("DomContentLoaded", displayLocalStorage()) //DOM içeriği yüklendiğinde localstorage'ın görüntülenmesini sağlar.



// Listeye Ekleme, Listeden silme, chek etme gibi fonksiyonlar:

function newList(event){
    event.preventDefault()
    if(inputDOM.value&& !(inputDOM.value.trim()=="")){
        createList(inputDOM.value) //Bu createList() fonksiyonu listeye eleman eklemek için aşağıda oluşturduk.
        setLocalStorage(inputDOM.value) //setLocalStorage() fonksiyonunu da aşağıda oluşturduk. 
        inputDOM.value = "" // bu da bize inputu submit ettikten sonra sayfadaki değerin sıfırlamasını sağlıyor.
    }else{
        $(".error").toast("show")
    }
} //burada if kullandık eğer boşluğun içinde değer var ise çalışsın diye. yoksa veya space'e basarak boş değer girilmişse (trim() özelliği kullanıldı.) toast ile Uyarı veriyor.bootstrap'in toast bölümünü incele

//****Liste oluşturma ve listeye ekleme fonksiyounu */
function createList(todo){
    const liDOM = document.createElement("li")
    liDOM.innerHTML = todo
    list.appendChild(liDOM)

    const closeBtn = document.createElement("span") //Oluşan listeye birde kapatma butonu ekliyoruz
    closeBtn.classList.add("close") 
    closeBtn.textContent = "\u00D7"
    liDOM.append(closeBtn)
    
    closeBtn.onclick = removeList //kapatma butonuna onclick olunca removeList fonksiyonu çalışacak.fonksiyon aşağıda
    $(".success").toast("show")
    liDOM.onclick = finishToDo //listeye eklenen item üzerine tıklandığında finishToDo fonksiyounu çalışacak...
}

function removeList(){
    this.parentElement.remove()
    deleteLocalStorage(this.previousSibling.textContent)
} //Silme Fonksiyonu

function finishToDo(){
    this.classList.toggle("checked")
    }//yaoıldı olarak işaretlemek için üzeri çiziliyor. bu .checked classı css dosyasında belirtildi.

function getLocalStorage(){
    let todo;
    if(localStorage.getItem("todos") === null){
        todo = [];
    }else{
        todo = JSON.parse(localStorage.getItem("todos"))
    }
    return todo;
}

function displayLocalStorage(){
    const todos = getLocalStorage()
    todos.forEach(todo => {
        createList(todo)
    });
}

function setLocalStorage(todo){
    let todos = getLocalStorage()
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function deleteLocalStorage(text){
    let todos = getLocalStorage()
    todos.forEach((todo, index) => {
        if(todo === text){
            todos.splice(index, 1)
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos))
}