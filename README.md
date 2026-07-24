# Amaze Property Management 🏙️

Welcome to the **Amaze Property Management** repository. This project is a premium, state-of-the-art web application built to represent a world-class property management company. It features a highly interactive, beautifully animated, and deeply optimized user interface.

## 🚀 Tech Stack & Tools

This project is built using the latest and most advanced web technologies available:

- **Framework:** [Next.js 16.2.11](https://nextjs.org/) (App Router, Turbopack for lightning-fast builds)
- **Library:** [React 19](https://react.dev/) (Utilizing React Server Components and modern React hooks)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) (Strictly typed for enterprise-level reliability)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Using modern `@theme inline` configurations and utility classes)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (For complex scroll-linked animations, stagger effects, and smooth transitions)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) & Base UI (For accessible and reusable UI components)
- **Graphics:** Custom **WebGL Shaders** (For stunning, performant background effects)
- **Optimization:** Babel React Compiler (`babel-plugin-react-compiler`) for automatic memoization and rendering optimization.

## ✨ Key Features

1. **Feature-Based Architecture (FBA):** The codebase is strictly organized using FBA. All domain logic is isolated inside `src/features/`, ensuring high maintainability and scalability.
2. **Glassmorphism & Premium Design:** Uses dark mode UI, smooth gradients, ambient glows, and glassmorphic panels to deliver a "WOW" factor.
3. **Advanced Micro-Animations:** Implements scroll-reveal techniques, dynamic counters, and bento-grid wipe/pulse animations using Framer Motion (`Variants`).
4. **Performance Optimized:** 
   - All images use the highly optimized `next/image` component with appropriately calculated `sizes`, `quality`, and `priority` attributes.
   - Cleaned up codebase with no redundant comments or unused dependencies.
   - Linter-enforced and statically built with 0 errors.

## 📂 Project Structure

```text
src/
├── app/                  # Next.js App Router (page.tsx, layout.tsx, globals.css)
├── components/           # Shared global components
│   └── ui/               # Core UI components & Custom WebGL Shaders (ShaderBackground.tsx)
├── features/             # Feature-Based modules
│   └── landing/          # Landing page feature
│       └── components/   # Specific components for the landing page (Hero, Services, Stats, etc.)
└── lib/                  # Shared utilities (e.g., tailwind merge `cn` function)
```

## 🛠️ Installation & Setup

To get this project up and running locally on your machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd task
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

4. **Build for production:**
   To verify the production build and generate static pages:
   ```bash
   npm run build
   npm run start
   ```

## 📈 Recent Refactoring Highlights

- Enforced explicit TypeScript typings across all Framer Motion `Variants` to eliminate build-time parsing errors.
- Fully migrated to `next/image` to prevent unoptimized asset loading.
- Fixed JSX parsing errors, trailing HTML entities, and optimized global font variables (`Geist Sans` & `Geist Mono` mapped properly to Tailwind variables).
- Stripped development-time comments and cleaned up redundant HTML structure.

---
*Built with passion, performance, and precision.*
