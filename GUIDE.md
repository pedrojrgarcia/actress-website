# Guide – how to work on the website

Practical steps for running, changing and publishing Elina's website.
For what each file contains, see [README.md](README.md).

## Where things are

| What                    | Where                                                    |
| ----------------------- | -------------------------------------------------------- |
| Live website            | https://pedrojrgarcia.github.io/actress-website/         |
| Code on GitHub          | https://github.com/pedrojrgarcia/actress-website         |
| Project on this Mac     | `~/code/elinaWebsite`                                    |
| Publishing settings     | GitHub → repository → **Settings → Pages** (branch `gh-pages`) |

## First time on a new computer

You need [Node.js](https://nodejs.org) version 20.19 or newer (22 or 24 recommended) and git.

```bash
git clone https://github.com/pedrojrgarcia/actress-website.git elinaWebsite
cd elinaWebsite
npm install
```

## Everyday workflow

1. **Try it locally**

   ```bash
   npm run dev
   ```

   Open http://localhost:5173. Every time you save a file, the page updates by itself.
   Stop it with **Ctrl + C**. Nobody else can see this version.

2. **Save the code** (commit + push to the `main` branch)

   ```bash
   git add .
   git commit -m "short description of the change"
   git push
   ```

   This saves the code on GitHub. **The live website does not change yet.**

3. **Publish**

   ```bash
   npm run deploy
   ```

   Wait until it prints **Published**. Don't press Ctrl + C after "built": the upload takes a few more seconds.

4. **Check** the live website after 2–5 minutes. Reload with **Cmd + Shift + R**
   (on the phone, close the tab and open the link again).

## What each command does

| Command          | What it does                                                        | Changes the live site? |
| ---------------- | ------------------------------------------------------------------- | ---------------------- |
| `npm install`    | Downloads the tools the project needs (once, or after updates)      | No                     |
| `npm run dev`    | Runs the website on this computer only, for testing                 | No                     |
| `git commit`     | Saves changes in the history, on this computer only                 | No                     |
| `git push`       | Uploads the commits to GitHub (`main` branch)                       | No                     |
| `npm run deploy` | Checks the code, builds the site into `dist/` and uploads it to the `gh-pages` branch | **Yes** |

The two branches:

- **`main`**: the code. You work here.
- **`gh-pages`**: the finished website, which GitHub Pages shows. Only `npm run deploy` touches it, never edit it by hand.

## Changing the content

Almost everything is in `src/data/` (content) and `src/i18n/` (texts and translations).
The table in [README.md](README.md#how-to-update-the-content) says which file to open.

Quick examples:

- **New event:** add a line in `src/data/events.ts`. Past events hide themselves.
- **New photo:** put the `.webp` in `public/photos/` and add its name in `src/data/photos.ts`.
- **CV:** put `vita-de.pdf`, `vita-en.pdf` and `vita-es.pdf` in `public/`.
- **Audio language:** `lang: 'de' | 'es' | 'en' | 'multi'` in `src/data/audios.ts`.
- **Hidden for now** (commented out in `src/data/profile.ts`): agency, IMDb, Crew United. Remove the `//` to show them.

After changing texts, check the page **in German on a phone-sized window**: German has the longest words,
so if it fits there, it fits in English and Spanish.

## When something goes wrong

| Problem | What to do |
| ------- | ---------- |
| The live site shows the old version | Did you run `npm run deploy` (not only `git push`)? Wait 2–5 minutes, reload with Cmd + Shift + R. |
| `npm run deploy` stops with an error before "built" | The check found a mistake (often a missing translation or a typo). Read the error: it names the file and line. |
| `Error: Remote url mismatch` | Happens after renaming the repository or the GitHub username. Run `npx gh-pages-clean`, then `npm run deploy` again. |
| GitHub says "This repository moved" | Update the address: `git remote set-url origin https://github.com/pedrojrgarcia/actress-website.git` |
| `npm run dev` says a command is missing | Run `npm install` first. |
| The page is wider than the phone screen | A long word or element doesn't fit. In the browser console, `document.documentElement.scrollWidth > document.documentElement.clientWidth` gives `true` if so. |

## Good to know

- **Renaming** the repository or the GitHub username changes the website address, and the old one stops working (no redirect).
  Update the links shared on Instagram, Filmmakers, the CV…
- **Large files:** keep videos out of `public/`. Everything in `public/` is published, and GitHub warns above 50 MB.
  The showreels play from Filmmakers instead.
- **Legal texts** (Impressum, privacy policy) are in `src/i18n/legal.ts`. If you add a new outside service
  (video, map, analytics, font from the internet…), the privacy policy must be updated too.
