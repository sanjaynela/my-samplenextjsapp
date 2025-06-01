# My First Next.js App

A simple, statically generated web application built with **Next.js 14**, **React 18**, and **Tailwind CSS**. This project demonstrates a basic multi-page layout with navigation and modern styling.

---

## Features

- ⚡ **Fast**: Statically generated pages for instant load times.
- 🎨 **Styled**: Uses Tailwind CSS for modern, responsive design.
- 🗺️ **Multi-page**: Includes Home, About, and Countries pages.
- 🧭 **Navigation**: Top navigation bar for easy page switching.

---

## Folder Structure

```
app/
  ├── layout.tsx         # Root layout for all pages (includes navigation)
  ├── globals.css        # Global styles (Tailwind CSS imports)
  ├── components/
  │     └── Navigation.tsx  # Navigation bar component (client component)
  ├── page.tsx           # Home page
  ├── about/
  │     └── page.tsx     # About page
  └── countries/
        └── page.tsx     # Countries list page
```

- **app/layout.tsx**: The main layout file, applies to all pages. Imports the navigation bar and global styles.
- **app/globals.css**: Global CSS file, includes Tailwind's base, components, and utilities.
- **app/components/Navigation.tsx**: The navigation bar, implemented as a client component for interactivity.
- **app/page.tsx**: The Home page.
- **app/about/page.tsx**: The About page.
- **app/countries/page.tsx**: The Countries page, listing several countries.

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### 3. Build for Production

```bash
npm run build
npm start
```

---

## Screenshots

### Home Page

![Home Page](homeScreenshot.png)

### Countries Page

![Countries Page](countriesScreenshot.png)

---

## Tech Stack

- [Next.js](https://nextjs.org/) 14
- [React](https://react.dev/) 18
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

---

## Customization

- To add more pages, create a new folder under `app/` with a `page.tsx` file.
- To update navigation, edit `app/components/Navigation.tsx`.
- To change global styles, edit `app/globals.css`.

---

## License

This project is for learning and demonstration purposes. 