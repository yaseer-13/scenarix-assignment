Deployed Link:https://scenarix-assignment-sepia.vercel.app/

## Image Optimization

- **Where:** Site-wide image assets
- **What:** Converted PNG images to WebP format
- **Why:** Reduce load times and improve performance with modern image compression.

## Textarea UI Fix

- **Where:** Artwork description input
- **What:** Fixed text color contrast issue (placeholder: "Describe your artwork")
- **Why:** Ensure user-entered text (e.g., "adsadasd") is clearly visible against the background.

## Pricing Card

- **Where:** Pricing section (House/Village/Town/City cards)
- **What:**
  - Fixed icon/text misalignment
  - Added missing features (e.g., resolution tiers, support details)
  - Corrected "Unlimited genera" → "Unlimited generations"
  - Fixed UI cropping and added CTAs ("Start Free Trial" vs. "Contact Sales")
- **Why:** Clarify pricing tiers, resolve visual bugs, and align with product offerings.

## Navbar Separation

- **Where:** Navigation bar
- **What:** Added visual divider between navbar and background content
- **Why:** Improve content hierarchy and prevent element blending.

## Typography & Branding

- **Where:** Headings and hero section
- **What:**
  - Unified fonts ("Greek Vibes" → "Dosis", "Al Art Generator" → "Josefin Sans")
  - Corrected typos ("Al" → "AI", "A Art Generator" → "AI Art Generator")
  - Updated hero tagline ("Transform ideas... with Al" → "with AI")
- **Why:** Ensure brand consistency and fix misleading copy.

## Video Optimization

- **Where:** Hero section
- **What:**
  - Converted MP4 → WebM format
  - Restored missing promotional video
- **Why:** Faster loading and ensure key content visibility.

## Blog Card Restoration

- **Where:** Blog section
- **What:** Added missing UI for blog cards (e.g., "Diag: Latest insights...")
- **Why:** Improve content discoverability and layout completeness.

## Code Refactoring

- **Where:** Generate button component
- **What:**
  - Simplified state logic (`buttonText` derived from `isGenerating`)
  - Removed redundant `isMounted` (React 18+ handles hydration)
  - Replaced `charCount` state with `localPrompt.length`
  - Optimized `isButtonDisabled` (`isGenerating || !localPrompt`)
- **Why:** Reduce complexity and improve performance.

## Gallery UI Fixes

- **Where:** AI Art Gallery
- **What:**
  - Fixed layout misalignment
  - Removed duplicate image descriptions
  - Corrected truncated text ("delicate wind" → "delicate wings")
- **Why:** Ensure artwork displays correctly and metadata accuracy.

## Error Handling

- **Where:** Gallery and global error handling
- **What:**
  - Fixed error state display
  - Created custom error page
- **Why:** User-friendly feedback during failures.

## Project Structure

- **Where:** Repository root
- **What:** Organized types, data, and images into logical folders
- **Why:** Improve code maintainability and scalability
