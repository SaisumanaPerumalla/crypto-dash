# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands
- Install dependencies: `npm install`
- Run development server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Lint code: `npm run lint`

## Architecture and Structure
Crypto Dash is a React-based cryptocurrency browser that integrates with the CoinGecko API.

- **Core Framework**: React 19 with Vite for tooling and React Router for navigation.
- **Routing**: Defined in `src/App.jsx` with pages located in `src/pages/`.
- **State & Data**: Components fetch data from the CoinGecko API to display coin lists and detailed metrics.
- **Visualization**: Uses `chart.js` and `react-chartjs-2` for price history charts (see `src/components/CoinChart.jsx`).
- **Component Hierarchy**:
    - `src/pages/`: Main views (Home, Coin Details, About, Not Found).
    - `src/components/`: Reusable UI elements for filtering, sorting, and displaying coin data.
