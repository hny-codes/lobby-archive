# Lobby Archive

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/large.svg)](https://astro.build)

![](/public/screenshots/screenshot.png)

---

Lobby Archive is a fan-made website that stores a collection of all [Blue Archive](https://bluearchive.nexon.com/home) Student's Memorial Lobbies.

Select or search for your favorite student and view their memorial lobby as-in within the browser as a video or download it.

---

_Last Updated: **10/27/2024**_
- Aomori Mine (Idol)
- Utazumi Sakurako (Idol)
- Iochi Mari (Idol)


## Table of Contents

- [Built With](#built-with)
  - [Memorial Type Schema](#memorial-type-schema)
  - [Student Data](#student-data)
- [Disclaimer](#disclaimer)
- [Useful Resources](#useful-resources)

## Built With

- Astro
- Tailwind CSS
- Typescript
- React + Vanilla Typescript
- Sanity CMS

### Memorial Type Schema

Sanity requires type definition for each document type to be created within Sanity. For this project, only one type is needed: `memLobby`.

There are 4 fields to define the `memLobby` type: **name**, **title**, **type**, and **fields**. Below is what is needed to define to minimally define a Sanity type:

| Sanity Field Type | Value          | Description                       |
| ----------------- | -------------- | --------------------------------- |
| **name**          | memorial-lobby | name of the sanity type           |
| **title**         | Memorial Lobby | display name within Sanity Studio |
| **type**          | document       | document type                     |
| **field**         | ...            | Custom fields, defined **below**  |

The following is the **field** type that defines the shape (or data) that this Sanity type (`memLobby`) contains:

| `memLobby` Type  | Type     | Description                                            |
| ---------------- | -------- | ------------------------------------------------------ |
| **studentName**  | string   | name of the student                                    |
| **slug**         | slug     | slug for the url of each student page                  |
| **date**         | datetime | publish date of the student (oldest to newest)         |
| **image**        | image    | image metadata of the student                          |
| **video**        | file     | video metadata of the student                          |
| **relationship** | number   | relationship level needed to unlock the memorial lobby |

### Student Data

All assets and game content are collected from a variety of sources. Here are the list of sources that this project:

- [Blue Archive Live2D Collection by Jaymie](https://steamcommunity.com/workshop/filedetails/?id=2434025795)
- [Blue Archive Wiki - Memorial Lobby](https://bluearchive.wiki/wiki/Memorial_Lobby)
- [Blue Archive Wiki - Characters](https://bluearchive.wiki/wiki/Characters)

## Disclaimer

All assets, game content, and materials are trademarks and copyrights of Nexon Games. This website is not affiliated with Nexon games and is simply a fan-made project created by a fan that also plays the game.

## Useful Resources

Besides the resources used to create the data for this website, here are other resources used for this website's development:

- [images-to-webp Python script, written by me](https://github.com/hny-codes/images-to-webp)
- [MDN Video State](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState)
- [Icones.js](https://icones.js.org/)
- [Blue Archive Logo Generator](https://github.com/nulla2011/Bluearchive-logo)

<div align='center' style="margin-top:2rem;">
  <b style="font-size:2rem;">Thanks for viewing, Sensei!</b>
</div>

---

![](https://res.cloudinary.com/dqbuiemre/image/upload/fl_preserve_transparency/v1723253881/arona2_par3lm.jpg?_s=public-apps)
