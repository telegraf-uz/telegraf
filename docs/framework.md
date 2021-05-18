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

Ko'pincha holatlarda kuzatganimda, odamlar telegram botning tuzilishi aniqlashtirmasdan turib tavakkaliga
telegram botni yozib ketishadi va bu avvalambor judayam katta xato hisoblanadi. Masalan, sizning botingiz
kelajakda ko'plab qo'shimcha funksional yoki plaginlar o'z ichiga olsa, modulyar sxemada Composer yordamida 
yozish ma'qul ko'riladi. Agar botingiz faqatgina stabil bittagina reliz uchun ishlaydigan, yoki xavfsizlik 
yuzasidan judayam katta e'tibor qaratilgan bot bo'lsa, class yoki funksional shaklda Telegraf o'zi yordamidagi
yozish ma'qul ko'riladi. Keling endi bir telegram bot misollarida yordamida ko'ramiz orasidagi farqlarni:

**Telegraf tuzilishida fayllar oraro tuzilishi**

```shell
│   app.ts
│
├───security
│       index.ts
│       ...
│
├───core
│       bot.ts
│       env.ts
│       index.ts
│       database
│           ds.ts
│           dt.ts
│
├───patches
│       index.ts
│       ...
│
└───types
        telegraf.d.ts
```

**Endi esa, Composer yordamidagi tuzilish**

```shell
│   app.ts
│
├───actions
│   │   index.ts
│   │
│   ├───actions
│   │       help.ts
│   │       index.ts
│   │
│   ├───admin
│   │       add.ts
│   │       chat.ts
│   │       index.ts
│   │       list.ts
│   │       reset.ts
│   │       send.ts
│   │       tell.ts
│   │
│   ├───controllers
│   │   │   index.ts
│   │   │
│   │   │
│   │   └───panel
│   │           clear.ts
│   │           enter.ts
│   │           help.ts
│   │           index.ts
│   │           leave.ts
│   │           show.ts
│   │           text.ts
│   │           wbis.ts
│   │
│   ├───cron
│   │       identifier.ts
│   │       index.ts
│   │
│   ├───exclude
│   │       index.ts
│   │
│   ├───middlewares
│   │       contribute.ts
│   │       feedback.ts
│   │       help.ts
│   │       index.ts
│   │       links.ts
│   │       start.ts
│   │       stats.ts
│   │
│   └───security
│           index.ts
│
├───core
│       bot.ts
│       env.ts
│       index.ts
│
├───database
│       db.ts
│       ds.ts
│       user.ts
│
├───layouts
│       consoles.ts
│       keyboards.ts
│       messages.ts
│
└───types
        telegraf.d.ts
```

O'ylaymanki taxminan tushundingiz orasidagi farqlarni.