# Goal: Integrate Hero Video into Arch Section

You've provided a video file (`s bloom hero section v.mp4`) and would like to replace the current static studio image inside the arch in the hero section with this video. Here is the plan to achieve this cleanly and beautifully.

## Proposed Changes

### 1. Copy Media to Public Directory
- **Action**: Copy `d:\Ottobon\sBloom page\s bloom hero section v.mp4` into the `public/` folder as `hero-studio-video.mp4` so that Vite can serve it statically.

### 2. Update Hero Component
- **[MODIFY] `src/pages/HomePage.tsx`**: 
  - Locate the `.hero-studio-arch-card` container in the hero section.
  - Replace the existing `<img src="/studio-arch.jpg" />` with an HTML5 `<video>` element.
  - Set the video attributes to `autoPlay`, `loop`, `muted`, and `playsInline`. This ensures the video acts as a seamless, silent background visual.
  - Apply the exact same CSS class (`hero-studio-img`) to the video element so it inherits the `object-fit: cover` styling and fits perfectly within the existing arch shape without breaking the layout.

## Verification Plan
- The dev server will hot-reload. 
- We will visually verify that the video auto-plays silently inside the arch container.
- We will ensure that the overlapping elements ("Watch Studio Reel", "Ideas Growth Impact") sit perfectly on top of the video.

> [!NOTE]
> Since we are using standard HTML5 video attributes (`muted autoplay loop`), browsers will allow the video to auto-play seamlessly without requiring user interaction.
