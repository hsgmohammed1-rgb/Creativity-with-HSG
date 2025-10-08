/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export const en = {
  header: {
    language: "العربية",
  },
  startScreen: {
    title: "Unleash Your Creativity with ",
    titleHighlight: "HSG",
    subtitle: "The ultimate AI photo editor. Retouch, apply creative filters, and make professional adjustments using simple text prompts.",
    uploadButton: "Upload an Image",
    dropMessage: "or drag and drop a file",
    feature1Title: "Precise Retouching",
    feature1Desc: "Click any point on your image to remove blemishes, change colors, or add elements with pinpoint accuracy.",
    feature2Title: "Creative Filters",
    feature2Desc: "Transform photos with artistic styles. From vintage looks to futuristic glows, find or create the perfect filter.",
    feature3Title: "Pro Adjustments",
    feature3Desc: "Enhance lighting, blur backgrounds, or change the mood. Get studio-quality results without complex tools.",
  },
  errors: {
    title: "An Error Occurred",
    tryAgain: "Try Again",
    noImageLoaded: "No image loaded to edit.",
    noPrompt: "Please enter a description for your edit.",
    noHotspot: "Please click on the image to select an area to edit.",
    failedToGenerate: "Failed to generate the image.",
    noImageToFilter: "No image loaded to apply a filter to.",
    failedToFilter: "Failed to apply the filter.",
    noImageToAdjust: "No image loaded to apply an adjustment to.",
    failedToAdjust: "Failed to apply the adjustment.",
    noCropSelection: "Please select an area to crop.",
    cropProcessError: "Could not process the crop.",
  },
  editor: {
    loadingMessage: "AI is working its magic...",
    tabs: {
      retouch: "Retouch",
      adjust: "Adjust",
      filters: "Filters",
      crop: "Crop",
    },
    retouch: {
      promptHelper: "Great! Now describe your localized edit below.",
      promptHelperInitial: "Click an area on the image to make a precise edit.",
      placeholder: "e.g., 'change my shirt color to blue'",
      placeholderInitial: "First click a point on the image",
      generateButton: "Generate",
    },
    crop: {
      title: "Crop Image",
      subtitle: "Click and drag on the image to select a crop area.",
      aspectRatio: "Aspect Ratio:",
      applyButton: "Apply Crop",
    },
    adjustment: {
      title: "Apply a Professional Adjustment",
      presets: {
        blur: "Blur Background",
        enhance: "Enhance Details",
        warm: "Warmer Lighting",
        studio: "Studio Light",
      },
      placeholder: "Or describe an adjustment (e.g., 'change background to a forest')",
      applyButton: "Apply Adjustment",
    },
    filter: {
      title: "Apply a Filter",
      presets: {
        synthwave: "Synthwave",
        anime: "Anime",
        lomo: "Lomo",
        glitch: "Glitch",
      },
      placeholder: "Or describe a custom filter (e.g., '80s synthwave glow')",
      applyButton: "Apply Filter",
    },
    toolbar: {
      undo: "Undo",
      redo: "Redo",
      compare: "Compare",
      reset: "Reset",
      uploadNew: "Upload New",
      download: "Download Image",
    }
  },
};