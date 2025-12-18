# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Random Image Viewer - a lightweight web application for displaying images with smooth transitions, keyboard navigation, and mobile swipe gestures. Pure vanilla JavaScript with no dependencies or build process.

## Architecture

### Core Components

**index.html**
- Single-page application entry point
- Embedded CSS for responsive layout and fade transitions (400ms)
- Script loading order is critical: `images.js` must load before `viewer.js`

**viewer.js**
- Image navigation logic with circular wraparound
- Preloads next image for smooth transitions
- Handles three input methods:
  - Keyboard: Arrow Left/Right
  - Touch: Swipe gestures (50px threshold)
  - Events: Custom navigation calls
- Key state variables:
  - `currentIndex`: Currently displayed image
  - `preloadedImage`: Next image cached for performance

**images.js**
- Array of 52 image paths
- Must be loaded before viewer.js to initialize the catalog

### How It Works

1. Page loads with random image from catalog
2. Next image preloaded in background
3. User navigates via keyboard/swipe → current image fades out (400ms)
4. New image loads and fades in
5. Next image in sequence preloaded

## Common Modifications

### Adding Images
1. Add image file to `images/` directory
2. Add path string to `images` array in `images.js`

### Adjusting Behavior
- **Transition speed**: Change `400` in `setTimeout()` at viewer.js:21 and CSS transition duration
- **Swipe sensitivity**: Adjust `threshold = 50` at viewer.js:70
- **Styling**: Edit embedded `<style>` block in index.html

### Script Load Order
The order `images.js` → `viewer.js` is required. viewer.js depends on the `images` array being defined first.
