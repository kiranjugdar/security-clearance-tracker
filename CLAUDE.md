# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js application for tracking security clearance application progress. The app displays a progress bar showing different stages of the clearance process, status history, and estimated timelines.

## Development Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run export` - Export static build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Docker Commands

- `docker build -t security-clearance-tracker .` - Build Docker image
- `docker run -d --name security-clearance-tracker -p 8080:3000 security-clearance-tracker` - Run container on port 8080

## Architecture

### State Management
- Uses Redux Toolkit with a single `clearance` slice in `src/store/index.ts`
- State includes: `progressStages`, `currentStage`, `history`, and `timeline`
- Actions: `setCurrentStage`, `setHistory`, `setTimeline`

### Components Structure
- `ClearanceProgressBar` - Visual progress indicator showing clearance stages
- `CurrentStatus` - Displays current stage information
- `EstimatedTimeline` - Shows estimated completion times
- `HeaderBar` - Application header
- `StatusHistory` - Historical status updates

### Data Layer
- API functions in `src/api/clearance.ts` use axios to fetch mock data
- Mock data stored in `public/mock/` directory (`history.json`, `timeline.json`)
- TypeScript interfaces defined in `src/types/index.ts`

### Styling
- Uses Tailwind CSS for styling
- Configured in `tailwind.config.js` to scan pages and components
- Global styles in `src/styles/globals.css`

### Progress Stages
The application tracks these clearance stages:
1. Application Submitted
2. Initiated
3. Questionnaire Submitted
4. Review & Investigation
5. Final Review
6. Completed

Current stage can be updated via Redux actions to reflect progress through the clearance process.