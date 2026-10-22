# Special Science Elementary School (SSES) — Official Website

A simple, information-only school website made for **free hosting on GitHub Pages**.

## Folder contents

```
index.html            ← the web page (no need to edit)
css/style.css         ← colors and design
js/data.js            ← ★ ALL CONTENT IS HERE — edit this file
js/main.js            ← page behavior (no need to edit)
images/logos/         ← district, ECES and SSES logos
images/teachers/      ← put teacher and principal photos here
images/gallery/       ← put event photos here
```

## How to put it online (GitHub Pages)

1. Sign in at **github.com**.
2. Click **+ → New repository**.
   - Name it e.g. `sses` (the site will be `https://YOUR-USERNAME.github.io/sses/`).
   - Tip: if you name it `YOUR-USERNAME.github.io`, the site address becomes `https://YOUR-USERNAME.github.io/`.
   - Set it to **Public**, then click **Create repository**.
3. Click **uploading an existing file**, then drag **everything inside** the `sses-website` folder
   (index.html, css, js, images, README.md, .nojekyll) into the page. Click **Commit changes**.
4. Go to **Settings → Pages**. Under *Build and deployment*, choose
   **Source: Deploy from a branch**, **Branch: main**, folder **/(root)**, then **Save**.
5. Wait 1–2 minutes and open the link shown at the top of the Pages settings.

## How to update content

Open `js/data.js` (on GitHub: click the file → pencil ✏️ icon → edit → **Commit changes**).

- **School info**: email, phone, Facebook link, School ID inside `SCHOOL`.
- **Principal & teachers** (front-page carousel and Faculty section): edit `PEOPLE`.
  Keep the Principal first.
- **Photos**: upload a photo to `images/teachers/` (square photos look best, about 600×600 px,
  JPG under 300 KB), then set `photo: "images/teachers/filename.jpg"`.
  If `photo` is empty, the person's initials are shown instead.
- **News**: add a new item at the top of `NEWS`.
- **Gallery**: upload photos to `images/gallery/` and add them to `GALLERY`.

Changes appear online about 1 minute after you commit.

## Using your own domain (optional)

Buy a domain (e.g. `sses-estancia.com`), then in **Settings → Pages → Custom domain** type it in
and follow GitHub's DNS instructions. HTTPS is free.

---
Website developed by Ariel L. Amado, Master Teacher I
