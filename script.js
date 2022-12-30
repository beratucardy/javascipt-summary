// Ders 1 : Javascript'e Giriş

// console.log("Merhaba");
// console.log(1234);
// console.log(true);
// console.log([1,2,3]);
// console.error("hata oluştu");
// console.warn("bir uyarı oluştu");

// tek satırlık yorum satırı

// /* 

//     yorum satırları
//     yorum satırları
//     yorum satırları

// */

// console.clear();

// *************************************************************************************************************************************

// Ders 2 : Değişkenler

// var age;
// console.log(age);
// age=20;
// console.log(age);

// var fullname="Sadık Turan";
// console.log(fullname);

// fullname="Çınar Turan";
// console.log(fullname);

// Değişken Tanımlama Kuralları

// Sayısal ifade ile başlayamaz

// var yas1;
// var _yas2;
// var $yas3;

// Komut isimleriyle tanımlama yapılmaz.
// Birden fazla kelime

// var ad="Sadık";
// var soyad="Turan";

// var ad_soyad="Sadık Turan";
// var adSoyad="Çınar Turan";


// Case Sensitive (Büyük küçük duyarlılığı)

// var firstName="Sadık";
// var FirstName="Çınar";

// console.log(firstName);
// console.log(FirstName);


// // var , let , const

// let city="Kocaeli";
// console.log(city);

// const email="abc@gmail.com";
// console.log(email);

// email="bcd@gmail.com";
// console.log(email);

// *************************************************************************************************************************************

// Ders 3 : Değişken Tipleri

// Primitive Types

// String
// let firstName="Çınar";

// Number
// let age= 20;
// let money = 100.5;

// Boolean
// let isActive = false;

// null
// let job=null;

// undefined
// let car;

    

// Reference Types - Objects

//Array

// let names=["Ali","Ahmet","Can"];

// Object

// let address = {
//     city:"Kocaeli",
//     country:"Türkiye"
// }

//Function

// var calculateAge=function(){
//     return 0;
// };

// console.log(typeof calculateAge);

// *************************************************************************************************************************************

// Ders 4 : Tür Dönüşümü

// let val;

// number to string
// val=String(10);

// bool to string
// val=String(true);

// date to string
// val=String(new Date().getFullYear());

// array to string
// val=String([1,2,3,4]);

// toString()

// val = (10).toString();
// val= (false).toString();

// String to Number

// val = Number("10");
// val = Number(true); // 1 verir
// val = Number(false); // 0 verir
// val = Number(null); // 0 verir
// val = Number("a"); // NaN=Not a Number verir
// val = Number([1,2,3,4]); // NaN=Not a Number verir

// parseInt
// parseFloat

// val = parseInt("10");
// val = parseInt("10.5"); // ondalıklı kısmı siler
// val = parseFloat("10.5"); // yuvarlamaz 

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));;

// *************************************************************************************************************************************

// Ders 5 : Değişken Örnekleri

// var customerName = "Çınar";
// var customerLastName = "Turan";

// var fullName = "Çınar Turan";
// var musteriId = "1322323232";

// var total = 205.6;
// var gender = false; // erkek true, kadın false
// object

// var address = {
//     city : "Kocaeli",
//     district : "İzmit",
//     body : "Ömerağa mah.No:45"
// };

// array
// var hobbies = ["Sinema","Kitap","Spor"];

// var order1=Number("100");
// var order2=Number("150");

// var totalOrder = order1 + order2;
// console.log(totalOrder);

// var order3=Number("100.2");
// var order4=Number("150.5");

// var totalOrder2 = order3 + order4
// console.log(totalOrder2);

// var order4=parseInt("100.2");
// var order5=parseInt("150.5");

// var totalOrder3 = order4 + order5
// console.log(totalOrder3);

// const yearOfBirth = 1986;
// yearOfBirth = 1987;

// console.log(new Date().getFullYear()-yearOfBirth)

// let course = "Modern Javascript Kursu";

// console.log(course.length); // boşluklar dahil

// *************************************************************************************************************************************

// Ders 6 : Operatörler

// let val;
// const a=10;
// const b=5;
// const c=5;
// let d=3;

// // 1- Aritmetik Operatörler

// val = a+b;
// val = a-b;
// val = a*b;
// val = a/b;
// val = a%b;
// val = d++; // val'in içine attıktan sonra c'yi büyütür
// val = ++d; // val'in içine atmadan c'yi büyütür
// val = --d;
// val = d--;

// // 2- Atama Operatörler

// val = a;
// val +=a; // val = val + a;
// val -=a; // val = val - a;
// val *=a; // val = val * a;
// val /=a; // val = val / a;
// val %=a; // val = val % a;

// // 3- Karşılaştırma Operatörleri

// val = a==b; // true ya da false verir
// val = b==c;
// val = b===c; // değer kontrolü & type kontrolü
// val = 5 == "5"; // true
// val = 5 === "5"; // false
// val = a!=b;
// val = a!==b;
// val = a > b;
// val = b < a;
// val = a >= b;
// val = 5 >= 5;
// val = a <= b;

// // 4- Mantıksal Operatörler

//     // && (And)
//     // true && true => true
//     // true && false => false
//     // false && false => false

//     val = (a>b) && (a>c)

//     // || (Or)
//     // true && true => true
//     // true && false => true
//     // false && false => false

//     val = (a>b) || (a<c)

//     // ! (Not)
//     // !true => false
//     // !false => true

//     val = !(a>b)

// console.log(val);
// console.log(typeof val);

// *************************************************************************************************************************************

// Ders 7 : Operatör Örnekleri

// let ındexCan;
// let ındexAda;

// const kgCan = 60;
// const kgAda = 40;

// const heightCan = 1.70;
// const heightAda = 1.50;

// ındexAda = (kgAda) / (heightAda*heightAda);
// ındexCan = (kgCan) / (heightCan*heightCan);

// console.log(ındexAda.toFixed(2),ındexCan.toFixed(3));

// let adaHigherIndex = ındexAda>ındexCan
// let canHigherIndex = ındexCan>ındexAda

// console.log("Ada'nın kilo indeksi Can'ın kilo indeksinden daha büyük: "+adaHigherIndex);

// console.log("Can'ın kilo indeksi Ada'nın kilo indeksinden daha büyük: "+canHigherIndex);

// let adaZayif = (ındexAda>=0) && (ındexAda<=18.4);
// let adaNormal = (ındexAda>=18.5) && (ındexAda<=24.9);
// let adaKilolu = (ındexAda>=25) && (ındexAda<=29.9);
// let adaSisman = (ındexAda>=30) && (ındexAda<=34.9);

// console.log("Ada zayıf: "+adaZayif);
// console.log("Ada'nın kilosu normal: "+adaNormal);
// console.log("Ada kilolu mu: "+adaKilolu);
// console.log("Ada şişman mı: "+adaSisman);

// *************************************************************************************************************************************

// Ders 8 : Dates & Times

// let d=new Date();
// let birthday =new Date(1998,11,10);

// // Set Methods

// d.setFullYear(2020);
// d.setMonth(5);
// d.setDate(20); // günde değişir bununla
// d.setHours(10);
// d.setMinutes(45);
// d.setSeconds(20);

// // Get Methods

// console.log(d.getDate());
// console.log(d.getDay()); // 0 pazar, 1 pazartesi
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMonth()); // 0 ocak, 1 şubat
// console.log(d.getMinutes());
// console.log(d.getSeconds());

// console.log(d.getFullYear()-birthday.getFullYear());
// console.log(d.getMonth()-birthday.getMonth());
// console.log(d.getDate()-birthday.getDate());

// console.log(d);
// console.log(typeof d);

// *************************************************************************************************************************************

// Ders 9 : Dates & Times Örnekleri

// var dt=new Date();
// console.log(dt.getDate()+"."+(dt.getMonth()+1)+"."+dt.getFullYear());

// var date= {
//     tarih:new Date().getFullYear(),
//     saat:new Date().getHours(),
// }
// console.log(date);

// var dtA=new Date("8/24/2010 14:50:10");
// var dtB=new Date(2010,7,24,14,50,10);

// console.log(dtA);
// console.log(dtB);

// var dtC=new Date("1/1/1990"); // ay, gün, yıl
// var dayOfMonth= dtC.getDate();
// dtC.setDate(dayOfMonth-1);
// console.log(dtC);

// var start=new Date("12/10/1998");
// var end=new Date();

// // console.log(birthday.getTime()); // milisecond türünden
// // console.log(Date.now()) // bugünün milisecond türünden, 1970 içerisinde

// var milisecond=end-start; // iki seneyi çıkarttırsak farkı milisecond türünden verir
// var saniye=milisecond/1000;
// var dakika=saniye/60;
// var saat=dakika/60;
// var gun=saat/24;

// console.log("milisecond: "+milisecond);
// console.log("saniye: "+saniye);
// console.log("dakika: "+dakika);
// console.log("saat: "+saat);
// console.log("gün: "+gun);

// console.log(end.getFullYear()-start.getFullYear());

// var annelerGunu=new Date();
// annelerGunu.setHours(0,0,0,0);
// annelerGunu.setFullYear(2019);
// annelerGunu.setDate(1);
// annelerGunu.setMonth(4);

// while(annelerGunu.getDay()!=0) {
//     annelerGunu.setDate(annelerGunu.getDate()+1);
// }
// annelerGunu.setDate(annelerGunu.getDate()+7);
// console.log(annelerGunu);

// var birthday=new Date("8/1/1985");
// var ageDifMs=Date.now()-birthday.getTime();
// var ageDate=new Date(ageDifMs);

// console.log(ageDate.getFullYear()-1970);

// *************************************************************************************************************************************

// Ders 10 : Numbers

// let val;

// // val=Number("10");
// // val=parseInt("10");
// // val=parseFloat("10.5");
// // val=parseInt("10a"); // console'a 10 yazar
// // val=parseInt("a10a"); // console'a NaN yazar
// // val=isNaN("10"); // false yazar
// // val=isNaN("a10"); // true yazar çünkü NaN

// // var num= 10.12456789;
// // val=num.toPrecision(6); // toFixed gibi ama toFixed virgülden sonrası bu tamamı string'e çevirerek yazıyor
// // val=num.toFixed(2); // virgülden sonra ne kadar gösterme gene string

// val=Math.PI; // pi değerini yazar
// val=Math.round(2.4); // en yakın sayıya yuvarlama
// val=Math.round(2.7);
// val=Math.ceil(2.4); // her zaman yukarı yuvarlama
// val=Math.ceil(2.6);
// val=Math.floor(2.4); // her zaman aşağı yuvarlama
// val=Math.floor(2.7);
// val=Math.sqrt(64); // karekök alır
// val=Math.pow(2,4); // üst alır
// val=Math.abs(-100); // mutlak değer alır
// val=Math.min(1,2,3,2,4,9); // sayılar arasındaki en küçük değeri verir
// val=Math.max(4,5,6,4,98,7); // sayılar arasındaki en büyük değeri verir
// val=Math.random(); // random sayı üretir (tahmin oyununu hatırla)
// val=Math.random()*10; // 0 ile 9 arasında olan sayı üretir
// val=Math.floor(Math.random()*10) // 0 ile 9 arasında aşağı yuvarlayan
// val=Math.floor(Math.random()*100+1) // 1 ile 100 arasında (dahil) aşağı yuvarlayan


// console.log(val);
// console.log(typeof val);

// *************************************************************************************************************************************

// Ders 11 : Numbers Örnekleri

// var num=15.123456789;

// console.log(num.toPrecision(3));

// console.log(num.toFixed(3));

// console.log(Math.round(num));

// console.log(Math.floor(num));

// console.log(Math.ceil(num));

// console.log(Math.min(1,2,10,56,20)+" , "+Math.max(1,2,10,56,20));

// var min=50;
// var max=100;

// console.log(Math.floor(min+Math.random()*(max-min))); // 50'den 100'e kadar üretir

// var brutMaas=3700;
// var mesaiUcreti=10.3;
// var mesaiSuresi=42;
// var toplamBrutMaas=brutMaas+(mesaiUcreti*mesaiSuresi);
// var toplamNetMaas=toplamBrutMaas-(toplamBrutMaas*0.25);
// console.log(toplamBrutMaas.toFixed(2),toplamNetMaas.toFixed(2));

// *************************************************************************************************************************************

// Ders 12 : Strings

// const firstName='Sadık';
// const lastName="Turan";
// let hobbies="sinema,spor,kitap,yazılım";
// const age=35;
// let val;

// // string concatenation (birleştirme)

// val=firstName+" "+lastName;
// val='Sadık';
// val+=' Turan';

// val = "Benim adım "+firstName+" "+lastName+" ve yaşım "+age+' İzmit\'te yaşıyorum';

// // string concat

// val=firstName.concat(' ',lastName);

// // string uppercase - lowercase

// val=val.toUpperCase(); // her şeyi büyük harfle yazar
// val=val.toLowerCase(); // her şeyi küçük harfle yazar

// // val=val.indexOf('d'); // val'da d'yi arar ve kaçıncı satırda (index numarasını) olduğunu yazar, aradığımız karakter yoksa -1 yazar

// // string replace

// val="     "+val.replace("sadik","çınar")+"     "; // sadik'ı çınar ile değiştirir

// // trim

// val=val.trim(); // yukarıdaki boşlukları sildi (baş ve sondaki)

// // substring

// // val=val.substring(3,5); // 3 ile 5 arasındaki indexi yazar

// // slice

// // val=val.slice(0,5); // substring ile aynı

// // val=val[1];

// // string length

// // val=val.length;

// val=hobbies.split(",") // virgüllerden ayırır ve dizi halinde hobbies'i yazar

// console.log(val);
// console.log(typeof val);

// *************************************************************************************************************************************

// Ders 13 : Template Literals

// const fullName="Sena Turan";
// const city="Kocaeli";
// const yearOfBirth=1999;

// let val;

// val="my name is "+fullName+" I'm "+(2018-yearOfBirth)+" years old"+" and I live in "+city;

// // ternary operator

// val=`my name is ${fullName} I'm ${(2018-yearOfBirth>=18)?"over 18":"under 18"} and I live in ${city}`; // altgr+virgül, birthday olayında ? sonra ifade doğru ise ilk kısım yanlış ise ikinci kısım gerçekleşir

// console.log(val);

// *************************************************************************************************************************************

// Ders 14 : Strings Örnekleri

// var sentence=" Template Literals or template strings is the ability Have multi-line strings without any funny business. ";

// var url= "http://sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye";

// console.log(sentence.length+" , "+url.length);

// console.log(sentence.trim().split(" ").length+" , "+url.trim().split(" ").length);

// console.log("1-"+sentence.toLowerCase()+"\n"+"2-"+url.toLowerCase());

// console.log("1-"+sentence.trim()+"\n"+"2-"+url.trim());

// console.log(sentence.replace("-",""));

// var str="http://";
// console.log(url.substring(str.length)); // console.log(url.slice(str.length));

// console.log(url.startsWith("http")); // url'nin ne ile başladığını sordum (http ile mi başlıyor), true verecek
// console.log(url.startsWith("https")); // false verir

// console.log(url.indexOf(".com"));
// console.log(url.includes(".com")); // içeriyor mu diye soruyorum true diye cevap verir

// console.log(url.toLowerCase().replace(/ /g,"-").replace(/ı/g,"i").replace(/ü/g,"u").replace(/ö/g,"o").replace(/ş/g,"s").replace(/ç/g,"c")); // .replace(" ","-"); yaptığımda sadece ilk gördüğünü değiştirir ama slash'lar (/) arası yapıp sonra g yazarsam hepsini değiştirir

// *************************************************************************************************************************************

// Ders 15 : Arrays

// let names=["çınar","sena","ada","yiğit"];
// let years=[2017,1999,2012,2010];
// let mix=["sadık","turan",1983,null,undefined,["sinema","kitap"]];

// // // get array item

// // console.log(names[0]);
// // console.log(names[3]);

// // // set array item

// // names[names.length]="emel"; 

// // // add item

// // years.push(1986); // en sona 1986 ekler
// // years.unshift(1986); // en başa 1986 ekler

// // // remove item

// // years.pop(); // en sondaki elemanı siler
// // years.shift() // en baştaki elemanı siler

// // // indexof

// // let index=names.indexOf("ada"); // arama yapar bulduğunun index numarasını yazar, -1 gelirse bulamadığını söyler
// // console.log("index: "+index);

// // // reverse

// // names.reverse(); // sondan başa başlatır

// // // sort

// // years.sort(); // küçükten büyüğe sıralar (string ise alfabetik)

// // // concat

// // let val=years.concat(names); // ekleme yapar 
// // console.log(val);

// // splice

// // names.splice(2,0,"seda"); // 2.eleman sonrasına silmeden seda ekle
// // names.splice(0,1); // 0.elemandan itibaren bir tane eleman sil

// function over18(year) {
//     let age=2022-year;
//     return age>=18;
// }

// // find

// // let val=years.find(over18); // ilk 18 yaşından büyüğü bulur

// // filter

// let val=years.filter(over18) // 18 yaşından büyükleri yazar
// console.log(val);

// console.log(names);
// console.log(names.length);
// console.log(typeof names);
// // console.log(years);
// // console.log(mix);

// *************************************************************************************************************************************

// Ders 16 : Arrays Örnekleri

// var arr=["BMW","Mercedes","Opel","Mazda"];
// // var arr2= new Array("BMW","Mercedes","Opel","Mazda");
// console.log(arr);
// // console.log(arr2);

// console.log(arr.length);

// console.log("İlk eleman:"+arr[0]+", "+"Son eleman:"+arr[3]);

// arr.push("Renault"); // arr[4]="Renault"; , arr[arr.length]="Renault";
// console.log(arr);

// arr.unshift("Toyota");
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.reverse();
// console.log(arr);

// arr.sort();
// console.log(arr);

// var numbers=[1,2,5,80,15];
// console.log(numbers.sort()); // [1,15,2,5,80] diye sıralar çünkü alfabetik sıralıyor
// function compare(a,b) {
//     if(a>b) return 1;
//     if(a==b) return 0;
//     if(a<b) return -1;
// }
// console.log(numbers.sort(compare));

// console.log(arr.indexOf("Opel"));
// console.log(arr.includes("Opel")); // Opel içeriyor mu true diye cevap verir

// var str="Chevrolet,Dacia";
// var arr2=str.split(","); // virgülden ayırıp dizi oluşturan kod strings dersinde öğrenmiştin hatırla
// console.log(arr2);

// let arr3=arr.concat(arr2);
// console.log(arr3);

// console.log(arr3.splice(4,2)); // console.log(arr3.pop()) bunu iki kere yazarsakta olur
// console.log(arr3); // console.log(arr3.slice(4,6))
// var studentA=["Yiğit","Bilgi",2010];
// var studentB=["Sena","Turan",1999];
// var studentC=["Ahmet","Turan",1998];
// var students=[studentA,studentB,studentC];
// // var students=[{
// //     studentA:"Yiğit Bilgi"+" "+2010,
// // },
// // {
// //     studentB:"Sena Turan"+" "+1999,
// // },
// // {
// //     studentC:"Ahmet Turan"+" "+1998, 
// // }];
// console.log(students); 
// console.log(students[0]);

// console.log(students[0][0]);
// console.log(students[0][1]);
// console.log(students[0][2]);

// console.log(students[1][0]);
// console.log(students[1][1]);
// console.log(students[1][2]);

// console.log(students[2][0]);
// console.log(students[2][1]);
// console.log(students[2][2]);

// *************************************************************************************************************************************

// Ders 17 : if/else Statements

// const firstName="Sena";
// const age=19;
// const isStudent=false;
// const school="university";

// // if(firstName==="Sena") {
// //     console.log("Merhaba Sena");
// // }

// // if(age===19) {
// //     console.log("yaşınız 19");
// // }

// // if(isStudent) {
// //     console.log("Merhaba öğrenci");
// // } else {
// //     console.log("Merhaba işler nasıl");
// // }

// // if (age>=18) {
// //     if((school=="university") || (school=="high school")) {
// //         console.log("ehliyet alabilirsiniz");  
// //     } else {
// //     console.log("eğitim durumunuz yetersiz");
// //     }
// //     }

// // if(age>0 && age<12) {
// //     console.log(`${firstName} is a child`);
// // } else if(age>=13 && age<=19) {
// //     console.log(`${firstName} is a teenager`);
// // } else {
// //     console.log(`${firstName} is an adult`);
// // }

// if(typeof id!=="undefined") {
//     console.log("id: "+id);
// } else {
//     console.log("no id");
// }

// *************************************************************************************************************************************

// Ders 18 : Koşullu Durum (Conditional Statements) Örnekleri

// var trafigeCikis=new Date("04.20.2020");
// trafigeCikis.setHours(0,0,0,0);
// var trafiktekiMs= Date.now() -trafigeCikis.getTime();
// var trafiktekiGun=Math.floor(trafiktekiMs/(1000*60*60*24));
// if(trafiktekiGun<=365) {
//     console.log("1.servis bakım süreniz geldi");
// } else if(trafiktekiGun>365 && trafiktekiGun<=365*2) {
//     console.log("2.servis bakım süreniz geldi");
// } else if(trafiktekiGun>365*2 && trafiktekiGun<=365*3) {
//     console.log("3.servis bakım süreniz gelmiştir");
// } else {
//     console.log("bilinmeyen bir süre");
// }
// console.log(trafiktekiGun);

// var result=prompt("Who's there?");
// if(result=="Cancel") {
//     alert("Cancelled");
// } else if(result=="Admin") {
//     var password=prompt("Password?")
//     if(password=="Cancel") {
//         alert("Cancelled");
//     } else if(password=="TheMaster") {
//         alert("Welcome!");
//     } else {
//         alert("Wrong password");
//     }
// } else {
//     alert("I don't know you");
// }

// *************************************************************************************************************************************

// Ders 19 : Objects Literals

// let val;
// let person= {
//     firstName:"Çınar",
//     lastName:"Turan",
//     age:7,
//     hobbies:["music","game"],
//     address: {
//         city:"Kocaeli",
//         country:"Türkiye",
//     },
//     getBirthYear:function() {
//         return 2018-this.age; // this person'ı ifade eder
//     }
// };

// val=person;
// val=person.firstName;
// val=person.lastName;
// val=person["firstName"];
// val=person.age;
// val=person.hobbies;
// val=person.hobbies[1];
// val=person.hobbies.length;
// val=person.address;
// val=person.address.city;
// val=person.address["city"];
// val=person.getBirthYear();



// let people=[{
//     firstName:"Çınar",
//     lastName:"Turan",
// },
// {
//     firstName:"Sena",
//     lastName:"Turan",
// },
// {
//     firstName:"Seda",
//     lastName:"Turan",
// }];

// val=people[2];
// val=people[2].firstName;

// for(var i=0;i<people.length;i++) {
//     console.log(people[i].firstName);
// }

// console.log(val);
// console.log(typeof person);

// *************************************************************************************************************************************

// Ders 20 : Objects Literals Örnekleri

// var aracBilgileri= [{
//     id:"bmw116d_123",
//     model:"bmw 116d",
//     yil:2015,
//     renk:"Beyaz",
//     servisKayitlari: [{
//         id:"bmw116d_123_1",
//         tarih:"20.01.2016",
//         km:"13000",
//         ucret:900,
//         detay: [{
//             id:"bmw116d_123_1_1",
//             aciklama:"yağ değişimi",
//             ucret:300
//         },{
//             id:"bmw116d_123_1_2",
//             aciklama:"filtre değişimi",
//             ucret:300 
//         },{
//             id:"bmw116d_123_1_3",
//             aciklama:"fren hidroliği",
//             ucret:300
//         }]
//     },{
//         id:"bmw116d_123_2",
//         tarih:"10.01.2017",
//         km:"28000",
//         ucret:1800,
//         detay: [{
//             id:"bmw116d_123_2_1",
//             aciklama:"yağ değişimi",
//             ucret:350
//         },{
//             id:"bmw116d_123_2_2",
//             aciklama:"filtre değişimi",
//             ucret:350 
//         },{
//             id:"bmw116d_123_2_3",
//             aciklama:"fren hidroliği",
//             ucret:300
//         },{
//             id:"bmw116d_123_2_4",
//             aciklama:"balata değişimi",
//             ucret:800
//         }]
//     }]
// },{
//     id:"bmw118i_123",
//     model:"bmw 118i",
//     yil:2015,
//     renk:"Beyaz",
//     servisKayitlari: [{
//         id:"bmw118i_123_1",
//         tarih:"20.01.2016",
//         km:"13000",
//         ucret:900,
//         detay: [{
//             id:"bmw118i_123_1_1",
//             aciklama:"yağ değişimi",
//             ucret:300
//     },{
//             id:"bmw118i_123_1_2",
//             aciklama:"filtre değişimi",
//             ucret:300 
//     },{
//             id:"bmw118i_123_1_3",
//             aciklama:"fren hidroliği",
//             ucret:300
//     }]
// },{
//         id:"bmw118i_123_2",
//         tarih:"10.01.2017",
//         km:"28000",
//         ucret:1800,
//         detay: [{
//             id:"bmw118i_123_2_1",
//             aciklama:"yağ değişimi",
//             ucret:350
//     },{
//             id:"bmw118i_123_2_2",
//             aciklama:"filtre değişimi",
//             ucret:350 
//     },{
//             id:"bmw118i_123_2_3",
//             aciklama:"fren hidroliği",
//             ucret:300
//     },{
//             id:"bmw118i_123_2_4",
//             aciklama:"balata değişimi",
//             ucret:800
//     }]
// }]
// },{
//     id:"bmw320d_123",
//     model:"bmw 320d",
//     yil:2015,
//     renk:"Beyaz",
//     servisKayitlari: [{
//         id:"bmw320d_123_1",
//         tarih:"20.01.2016",
//         km:"13000",
//         ucret:900,
//         detay: [{
//             id:"bmw320d_123_1_1",
//             aciklama:"yağ değişimi",
//             ucret:300
//         },{
//             id:"bmw320d_123_1_2",
//             aciklama:"filtre değişimi",
//             ucret:300 
//         },{
//             id:"bmw320d_123_1_3",
//             aciklama:"fren hidroliği",
//             ucret:300
//         }]
//     },{
//         id:"bmw320d_123_2",
//         tarih:"10.01.2017",
//         km:"28000",
//         ucret:1800,
//         detay: [{
//             id:"bmw320d_123_2_1",
//             aciklama:"yağ değişimi",
//             ucret:350
//         },{
//             id:"bmw320d_123_2_2",
//             aciklama:"filtre değişimi",
//             ucret:350 
//         },{
//             id:"bmw320d_123_2_3",
//             aciklama:"fren hidroliği",
//             ucret:300
//         },{
//             id:"bmw320d_123_2_4",
//             aciklama:"balata değişimi",
//             ucret:800
//         }]
//     }]
// }]

// console.log(aracBilgileri[0]);
// console.log(aracBilgileri[0].id);
// console.log(aracBilgileri[0].model);
// console.log(aracBilgileri[0].renk);
// console.log(aracBilgileri[0].servisKayitlari);
// console.log(aracBilgileri[0].servisKayitlari[0]);
// console.log(aracBilgileri[0].servisKayitlari[0].km);
// console.log(aracBilgileri[0].servisKayitlari[0].ucret);
// console.log(aracBilgileri[0].servisKayitlari[0].detay);
// console.log(aracBilgileri[0].servisKayitlari[0].detay[0]);
// console.log(aracBilgileri[0].servisKayitlari[0].detay[0].ucret);
// console.log(aracBilgileri[1]);
// console.log(aracBilgileri[2]);

// *************************************************************************************************************************************

// Ders 21 : Loops

// for loop

// for(var i=1;i<=10;i++) {
//     if(i==3) {
//         console.log("en sevdiğim rakam: "+i);
//         continue; // 3'e gelip bunu yazdırdıktan sonra buradan devam eder, continue yazmasan en sevdiğim rakam: 3 yazdıktan sonra tekrar 3 yazar ve devam ederdi.
//     }
//     if(i==6) {
//         console.log("en sevmediğim rakam: "+i)
//         break; // program burada durur ve devam etmez.
//     }
//     console.log(i);
// }

// while loop

// for(var i=0;i<10;i++) {
//     console.log(i);
// }

// let i=0;
// while(i<10) {
//     console.log(i);
//     i++;
// }

// do-while loop

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<10)

// let sonuc=1
// for(let i=10;i>0;i--) {
//     if(i%2==1) {
//         sonuc*=i  
//     }
// }
// console.log(sonuc);

// let val="\n";
// for(let i=0;i<10;i++) {
//     for(let j=0;j<10;j++) {
//         val+="* ";
//     }
//     val+="\n";
// }
// console.log(val);

// *************************************************************************************************************************************

// Ders 23 : Loops Örnekleri

// var tahmin=Math.floor(1+Math.random()*10);
// var tahminHakkı=Number(prompt("Kaç tahmin hakkınız olmasını istersiniz?"));
// var sayac=0;
// for(var i=1;i<=tahminHakkı;i++) {
//     var kullanıcınınTahmini=Number(prompt("Tahmininizi giriniz"));
//     sayac++;
//     if(kullanıcınınTahmini<tahmin) {
//         alert("Daha yüksek tahmin etmelisiniz");
//     }
//     else if(kullanıcınınTahmini>tahmin) {
//         alert("Daha düşük tahmin etmelisiniz");
//     } 
//     else if(kullanıcınınTahmini==tahmin) {
//         alert("Tebrikler doğru tahmin ettiniz, sayı: "+tahmin+" idi");
//         alert("Puanınız: "+(100-(tahminHakkı*(sayac-1))));
//         break;
//     } 
// }
/*
var hak,can;
var tahmin,sayac=0;
var sayi=Math.floor((Math.random()*10)+1);
can=Number(prompt("kaç kerede bileceksiniz"));
hak=can;
while(hak>0) {
    hak--;
    sayac++;
    tahmin=Number(prompt("Bir sayı giriniz"));
    if(sayi==tahmin) {
        console.log(`Tebrikler ${sayac} defada bildiniz`);
        console.log(`puan : ${100-(100/can)*(sayac-1)}`);
        break;
    }
    else if(sayi>tahmin) {
        console.log("yukarı");
    }
    else {
        console.log("aşağı");
    }
    if(hak==0) {
        console.log("hakkınız bitti. sayı: "+sayi);
    }
}
 */

// *************************************************************************************************************************************

// Ders 24 : Functions

// function yasHesapla(dogumYili) {
// return 2018-dogumYili;
// }

// let ageAda=yasHesapla(2012);
// let ageYigit=yasHesapla(2010);
// let ageCinar=yasHesapla(2017);

// console.log(ageAda);
// console.log(ageYigit);
// console.log(ageCinar);

// function emekligeKacYilKaldi(dogumYili,isim) {
//     let yas=yasHesapla(dogumYili);
//     let emeklilik=65-yas;
//     if(emeklilik>0) {
//         console.log(`${isim} emekli olmanıza ${emeklilik} yıl kaldı`);
//     } else {
//         console.log("Zaten emekli oldunuz");
//     }
// }

// emekligeKacYilKaldi(2012,"Ada");
// emekligeKacYilKaldi(2010,"Yiğit");
// emekligeKacYilKaldi(1950,"Çınar");

// *************************************************************************************************************************************

// Ders 26 : Fonksiyon (Function) Örnekleri

// var hesapA= {
//     ad:"Sena Turan",
//     hesapNo:"12345678",
//     bakiye:2000,
//     ekHesap:1000,
// };

// var hesapB= {
//     ad:"Emel Turan",
//     hesapNo:"12356479",
//     bakiye:3000,
//     ekHesap:2000,
// };

// function paraCek(hesap,miktar) {
//     console.log(`Merhaba ${hesap.ad}`)
//     if(hesap.bakiye>=miktar) {
//         hesap.bakiye=hesap.bakiye-miktar;
//         console.log("paranızı alabilirsiniz");
//     }
//     else {
//         var toplam=hesap.bakiye+hesap.ekHesap;
//         if(toplam>=miktar) {
//             if(confirm("ek hesabınızı kullanmak ister misiniz?")) {
//             console.log("paranızı alabilirsiniz");
//             var bakiye=hesap.bakiye;
//             var ekhesap=miktar-bakiye;
//             hesap.bakiye=0;
//             hesap.ekhesap=hesap.ekhesap-ekhesap
//         }
//         else {
//             console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunmamaktadır`);
//         }
//     } else {
//         console.log("üzgünüz bakiye yetersiz");
//     }
//     }    
// }

// paraCek(hesapA,2000);
// paraCek(hesapA,1100);
// paraCek(hesapB,2000);

// *************************************************************************************************************************************

// Ders 
