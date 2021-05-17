---
title: Kirish Qism
date: 2021-05-17 07:42:34
slug: introduction
---

## Telegram Bot vazifalari

Botlar turli funktsiyalarni bajaradigan va foydalanuvchilarning hayotini soddalashtiradigan maxsus dasturlardir. Telegrammalar platformasi uchun yozilgan, ular turli xil funktsiyalarni bajarish uchun mo'ljallangan: yangiliklar olish, ma'lumot olish va hatto qimmatli qog'ozlar savdosi. Botning asosiy vazifasi foydalanuvchi tomonidan kiritilgan buyruqdan so'ng avtomatik javobdir. Shu bilan birga, to'g'ridan-to'g'ri Telegram interfeysi orqali ishlaydigan dastur jonli foydalanuvchi harakatlarini taqlid qiladi, buning natijasida bunday botdan foydalanish juda qulay va tushunarli.

Shuning uchun Internet orqali biznesni rivojlantiradigan ko'plab kompaniyalar bir necha sabablarga ko'ra botlardan foydalanadilar:

1. Ular maqsadli auditoriya bilan keyingi aloqa kanalidan foydalanishga imkon beradi (Rossiyada Telegram 10 million kishi tomonidan ishlatiladi)
2. Ular tezda monoton ishni bajaradilar, bu esa yollanma ishchilarni bo'shatishga imkon beradi va shu bilan kompaniyaning pulini tejaydi;

Aslida, aniq bo'linish yo'q, chunki ba'zi botlarda bir vaqtning o'zida bir nechta mexanika mavjud va ko'plab maxsus vazifalarni muvaffaqiyatli bajaradi. Ularning yordami bilan siz tarjima qilishingiz, o'rganishingiz, test qilishingiz, ma'lumot izlashingiz, o'yinlarni o'ynashingiz va hatto boshqa xizmatlardan foydalanishingiz va global tarmoqqa kirish imkoniyatiga ega bo'lgan narsalar bilan muloqot qilishingiz mumkin (bugungi kunda mashhur "Internet narsalar"). Telegramdagi barcha botlar bepul, ammo 2017da Pavel Durov bunday dasturlarni o'rnatish va ulardan foydalanish imkoniyatini e'lon qildi.

Shu sababli, botlar mobil yordamchilarga aylandi, siz hatto messenjerni tark etmasdan ham foydalanishingiz mumkin. Ular tezkor buyruqlar yordamida boshlang'ich muammolarni hal qilish imkoniyatini beradi, bu dasturlarning barchasi o'rnatishga muhtoj emas va qurilmangiz xotirasida alohida o'rin tutmaydi.

## Bot Father ahamiyati

Siz hatto mustaqil ravishda telegrammalarda bot yozishingiz mumkin. Buning uchun dasturning qaysi maqsadlari amalga oshirilishini aniqlang: xabarlarga javob berish, valyutani aylantirish yoki boshqa funktsiyalarni bajarish. Agar dasturlash tillarini bilmasangiz-bu muhim emas. Oddiy robotlar hatto ularsiz ham yozilishi mumkin. Ishni boshlash uchun @BotFather botga obuna bo'ling va uni ishga tushiring, so'ngra ko'rsatmalarga rioya qiling:

1. Buyruq satriga yozing /newbot (yangi bot yaratadi).
2. BotFather sizning avlodingizni chaqirishni taklif qilishini kuting. Har qanday ism bilan keling, lekin "bot"bilan tugashini unutmang.
3. Bu erda siz botning yuzini (avatarini) qo'shishingiz va uni ta'riflashingiz mumkin.
4. Botfather'dan noyob belgi oling.
5. Uni biron-bir matn fayliga nusxalash va uni yo'qotmaslik uchun xavfsiz joyda saqlang (bu mumkin emas, chunki belgini eslab qolish uchun umid qilmang).

Ushbu harakatlar sizning botingizni yaratishga yordam beradi, lekin uni har qanday funktsiyani bajarishga o'rgatish uchun siz allaqachon dasturlash tilida kod yozishingiz yoki maxsus dasturlarning imkoniyatlaridan foydalanishingiz kerak, masalan, Paquebot. Ushbu xizmat juda ko'p muammosiz funktsional robotlarni yaratishga yordam beradi.

Endi bot saqlanadi va Telegramda faollashadi. U standart interfeysga, buyruq tizimiga ega bo'ladi va eng oddiy funktsiyalarni bajarishi mumkin. Bundan tashqari, boshqa foydalanuvchilar o'z imkoniyatlaridan foydalanish uchun unga obuna bo'lishlari mumkin.

Agar siz yanada murakkab botni olishni istasangiz, uni yaratish uchun mutaxassislar xizmatiga murojaat qilishingiz kerak bo'ladi. Ular sizning xohishingiz bilan boshqariladigan ishni bajaradilar va uning funksionalligi bo'yicha barcha so'rovlarni qondiradigan natijani taklif qiladilar. Shu bilan birga, kundalik foydalanish, biznes yoki ish uchun kerak bo'lgan har qanday variant bilan bot buyurtma berishingiz mumkin.

Nihoyat, biz sizga ushbu ajoyib messenjerning deyarli har qanday foydalanuvchisi uchun foydali bo'lgan yordamchilarimiz ro'yxati bilan tanishishingizni tavsiya qilamiz.

## Telegram bot ishlash uslublari

Telegram bot ikki usulda ishlaydi va ikkalasi ham sharoitga qarab ishlatiladi. Bular:

* Webhook - bironta yangilik yoki informatsiya yuklanganda Telegram serverlari o'zi sizning telegram botingiz host qilingan serverga murojaat qiladi va javobini kutadi
* Polling - ma'lum bir interval orasida telegramda yangilik borligini serverdan turib tekshiriladi va bo'sa telegram bot o'zi avtomatik ravishda javob beradi
  
Webhook va Polling orasidagi farq shundaki, polling usuli webhook ga nisbatan botni rivojlantirish yoki bironta jonli tarzda olib boriladigan protsedura uchun ishlatiladi