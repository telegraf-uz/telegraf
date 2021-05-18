---
title: Freymwork 
date: 2021-05-17 07:42:34
slug: framework
---

## Tuzilishi

Freymwork judayam turli xil usulda ishlatish mumkin. Bazibir dasturlash modulyar 
sxemada yozishsa, kimdir esa funksional shaklda yozadi. Freymwork ichida 3 ta asosiy
classlarni oshiradi va bular: `Telegraf`, `Composer/Scenes`, `Markup/Extra`

* **Telegraf** - asosiy class hisoblanib, shu class yordamida telegram bot quriladi va shu
class da bot ishga tushuriladi. Asosiy vazifasi bu yana shu classga biriktirilgan classlar
yordamida telegram bot konstruktiv shaklda qurishdir. Masalan, `Telegraf` ichida yana `Context`
classi keladi bu Context classida kelayotgan habar argumentlarini hammasin o'z ichiga oladi.
* **Composer/Scenes** - Composer yordamida modulyar bot yozish qulayligini beradi. Scenes esa
qadam-ma qadam ketma ketlikga amal qiladigan botlarni yozish qulayligini beradi. Masalan `/start`
bosilganda nima qilinadi va undan keyin nima ketadi, shunga doir ketma ketlikka amal qiladigan botlar
**Scenes** yordamida yoziladi.
* **Markup/Extra** - bularda esa xabarlarning markirovkalari, ya'ni xabar qanday ko'rinishi, tugmachalar
va ularning ketma-ketligi, shunga doir hamma argumentlar shu classda saqlanadi. Bu klass yordamida,
bir qarashdan zerikarli ko'ringan habarlarni, chiroyli va tartibli xabarga aylantirish mumkin.

## Telegraf va Composer

Ko'pincha holatlarda kuzatganimda odamlar telegram botning tuzilishi aniqlashtirmasdan turib tavakkaliga
telegram botni yozib ketishadi va bu avvalambor judayam katta xato hisoblanadi. Masalan, sizning botingiz
kelajakda ko'plab qo'shimcha funksional yoki plaginlar o'z ichiga olsa, modulyar sxemada yozish ma'qul
ko'riladi. Agar botingiz faqatgina stabil bittagina reliz uchun ishlaydigan, yoki xavfsizlik yuzasidan
judayam katta e'tibor qaratilgan bot bo'lsa, class yoki funksional shaklda yozish ma'qul ko'riladi.
Keling endi bir telegram bot misollarida yordamida ko'ramiz orasidagi farqlarni:

**Telegraf**

```shell
echo Hello
```
