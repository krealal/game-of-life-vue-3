# Game of Life

A Vue.js implementation of Conway's Game of Life using TypeScript.

## Overview

This project implements Conway's Game of Life, a cellular automaton simulation where cells evolve based on their neighbors' states. The implementation features a configurable grid, interactive cell toggling, and adjustable simulation speed.

## Features

- Interactive grid with configurable dimensions (up to 50x50)
- Click to toggle cell states (alive/dead)
- Adjustable simulation speed
- Control panel with Start/Stop, Clear, and Reset functionality
- Generation counter
- Smooth performance and memory-efficient

## Game Rules

Conway's Game of Life follows these rules:

1. **Underpopulation**: A live cell with fewer than 2 live neighbors dies
2. **Survival**: A live cell with 2 or 3 live neighbors survives
3. **Overpopulation**: A live cell with more than 3 live neighbors dies
4. **Reproduction**: A dead cell with exactly 3 live neighbors becomes alive

## Technical Requirements

### Basic Functionality

- [x] Configurable grid dimensions (rows/columns)
- Interactive cell toggling via clicks
- [x] Accurate implementation of Conway's rules
- Adjustable simulation interval

### UI/UX Requirements

- Control buttons:
  - Start/Stop simulation
  - Clear grid
  - Reset to initial state
- Generation counterlear visual feedback for:
  - Cell states (alive/dead)
  - Active simulation status

### Performance Requirements

- Smooth grid updates (up to 50x50 cells)
- No memory leaks during simulation lifecycle
- Efficient state management

### Testing Coverage

- Unit Tests:
  - Neighbor calculation logic
  - State transition rules
  - Pattern verification (e.g., blinker oscillator)
- Component Tests:
  - User interactions
  - Button functionality
  - Grid rendering

### Code Quality Standards

- [x] TypeScript implementation with defined types and interfaces
- [x] Modular architecture separating game logic from UI
- [x] Comprehensive documentation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

### Running Tests

```bash
npm run dev
# or
yarn dev
```

## Project Structure TODO

```
src/
├── components/     # Vue components
├── stores/        # State management
├── types/         # TypeScript interfaces
├── utils/         # Helper functions
└── tests/         # Test files
```
