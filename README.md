# Airbnb Clone — Listing Page

A high-fidelity, pixel-perfect frontend clone of an Airbnb listing page. This project was developed as a frontend engineering assessment to demonstrate precision in UI replication, component state architecture, and smooth user interactions.

The primary objective was to reproduce the visual layout, typographic hierarchy, transitions, and scroll behaviors of the original Airbnb listing page.

---

## Features

* **Desktop-First Layout**: Fully optimized for desktop viewports, matching the grid and spacing dimensions of the original layout.
* **Hero Image Gallery**: Interactive 5-photo grid display with hover states, leading to the full Photo Tour view.
* **Sticky Navigation Bar (ScrollSpy)**: Fixed top navigation bar that fades in after scrolling past the hero gallery, indicating the active section dynamically as you scroll.
* **Photo Tour Overlay**: Full-height dedicated overlay showing listing photos grouped by room categories (Living Room, Kitchen, Bedroom, etc.) with custom sidebar navigation.
* **Photo Lightbox**: Fullscreen, white-background lightbox view supporting arrow key and button navigation for high-resolution images, with body scroll locking.
* **Interactive Date Picker**: Custom two-month calendar showing real-time nights calculation and safety safety/booking blackout dates (e.g., Nov 2026 dates).
* **Sticky Booking Widget**: Floating reservation sidebar card that sticks to the page viewport when scrolling.
* **Amenities Modal**: Complete modal listing 50 available and unavailable amenities categorized cleanly with precise iconography.
* **Nearby Stays Carousel**: 5-column paginated carousel showing similar stays in the neighborhood.
* **Reviews and Ratings Breakdown**: Clean graphical rating bars showing score distributions and categorized sub-rating indicators.
* **Host & Things to Know Sections**: Stylized information layouts matching the original details.
* **Interactive Map**: Integration displaying the candolim area location.

---

## Tech Stack

* **React 19**: Component lifecycle, hooks (`useState`, `useEffect`, `useRef`), and state management.
* **Vite**: Ultra-fast build tool and local hot-module-replacement (HMR) development server.
* **Tailwind CSS**: Modern utility-first styling for spacing, grids, flexbox, and transitions.
* **Framer Motion**: Lightweight micro-interactions and transitions (e.g., sticky navbar slide/fade).
* **React Icons**: Standardized set of SVG icon packs matching the original Airbnb interface.
* **JavaScript (ES6+)**: Logic, date calculation helpers, and mock datasets.

---

## Project Structure

```
├── public/                 # Static assets (favicons, manifest)
├── src/
│   ├── assets/             # Raw media assets (images, icons)
│   ├── components/         # Modular React components
│   │   ├── Amenities/      # Amenities modal and category logic
│   │   ├── Availability/   # Calendar day, grid, and month components
│   │   ├── BookingCard/    # Reservation card and date selectors
│   │   ├── HeroGallery/    # Listing page main photo collage
│   │   ├── Host/           # Host profile and co-host grid
│   │   ├── Navbar/         # Header and sticky ScrollSpy navbars
│   │   ├── NearbyStays/    # Neighborhood stays carousel
│   │   ├── PhotoTour/      # Photo tour gallery and lightbox viewer
│   │   ├── PropertyInfo/   # Description and summary sections
│   │   └── Reviews/        # Review ratings breakdown and cards
│   ├── pages/              # Application pages (Home, PhotoTourPage)
│   ├── App.jsx             # Main routing and page-rendering coordinator
│   ├── index.css           # Tailwind styles and global font imports
│   └── main.jsx            # Application entry point
├── eslint.config.js        # ESLint flat configuration
├── package.json            # Node project configuration and dependencies
└── vite.config.js          # Vite custom build settings
```

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

Clone the repository and install the project dependencies:

```bash
npm install
```

### Development Server

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Production Build

Compile and optimize the project for production:

```bash
npm run build
```

The compiled assets will be placed in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

---

## Design and Implementation Details

* **Typography & Styling**: Integrated Google Fonts to match the target typographic weight, line heights, and letter-spacing.
* **State Synchronization**: Custom state architecture manages the complex interplay between the booking card, date selections, body scroll states, and modal overlays.
* **Interactive Spacing**: All gutters, margins, paddings, and border radii have been matched to the reference screenshots down to the exact pixel measurements.

---

## Notes

* **Viewport Support**: This project is optimized exclusively for desktop viewports, matching the constraints of the assessment guidelines.
* **Asset Location**: All graphic assets, images, and reviewer avatars are packaged and served locally from the project repository.
* **Assessment Context**: This project was built for the PlayPower Labs frontend assessment.
