# Poppy Animations Guide

This guide explains how to use the animations for "Poppy the Buffalo" mascot in the Buffalo City Popcorn application.

## Overview

Poppy the Buffalo has a variety of animations that can be applied based on:
- Seasons (Spring, Summer, Fall, Winter)
- Holidays (Valentine's Day, St. Patrick's Day, July 4th, etc.)
- States (idle, greeting, excited, thinking)
- Special events (Medora Museum Week)

These animations are designed to coordinate with the seasonal theming and background animations.

## Basic Usage

To add Poppy to your component:

```html
<!-- Basic Poppy with idle animation -->
<div class="poppy idle">
  <img src="assets/images/mascot/poppy-default.svg" alt="Poppy the Buffalo">
</div>

<!-- Seasonal Poppy (example: Winter) -->
<div class="poppy winter">
  <img src="assets/images/mascot/poppy-winter.svg" alt="Poppy the Buffalo in Winter Outfit">
  <img class="poppy-accessory" src="assets/images/mascot/poppy-winter-earmuffs.svg" alt="Earmuffs">
</div>

<!-- Holiday Poppy (example: Christmas) -->
<div class="poppy christmas">
  <img src="assets/images/mascot/poppy-winter.svg" alt="Poppy the Buffalo in Christmas Outfit">
  <img class="poppy-accessory" src="assets/images/mascot/poppy-christmas-hat.svg" alt="Santa Hat">
</div>
```

## Available Classes

### Base Classes
- `poppy` - Base class required for all Poppy instances
- `poppy-accessory` - Apply to accessory elements within Poppy (hats, scarves, etc.)

### State Animation Classes
- `idle` - Default breathing animation
- `greeting` - Welcoming animation for new users
- `excited` - Bouncy, enthusiastic animation for achievements
- `thinking` - Slight head tilt for loading or processing states

### Seasonal Classes
- `spring` - Spring outfit with flower crown animations
- `summer` - Summer outfit with vendor hat and sunglasses
- `fall` - Fall outfit with scarf flutter animation
- `winter` - Winter outfit with cozy shiver animation

### Holiday Classes
- `valentines` - Valentine's Day with heart animations
- `stpatricks` - St. Patrick's Day with clover bounce
- `july4th` - Independence Day with flag waving
- `halloween` - Halloween with spooky wobble
- `thanksgiving` - Thanksgiving with harvest dance
- `christmas` - Christmas with Santa bounce
- `hanukkah` - Hanukkah with menorah glow
- `newyear` - New Year with celebration spin
- `easter` - Easter with bunny hop

### Special Event Classes
- `medora` - Medora Museum Week with cowgirl hat tilt

### Chatbot Classes
- `poppy-chatbot` - Base class for chatbot version of Poppy
- `talking` - Animation when Poppy is speaking
- `listening` - Animation when Poppy is listening
- `thinking` - Animation when Poppy is processing

## Dynamic Animation with Angular

You can dynamically change Poppy's animations based on user interactions:

```typescript
@Component({
  selector: 'app-poppy',
  template: `
    <div class="poppy" [class]="currentSeason" [class.excited]="isExcited">
      <img [src]="poppyImage" alt="Poppy the Buffalo">
      <img class="poppy-accessory" [src]="accessoryImage" alt="Poppy's Accessory">
    </div>
  `
})
export class PoppyComponent {
  currentSeason = 'winter'; // dynamically change based on date
  isExcited = false;
  
  // Images paths based on season
  get poppyImage(): string {
    return `assets/images/mascot/poppy-${this.currentSeason}.svg`;
  }
  
  get accessoryImage(): string {
    return `assets/images/mascot/poppy-${this.currentSeason}-accessory.svg`;
  }
  
  celebrateAchievement() {
    this.isExcited = true;
    setTimeout(() => this.isExcited = false, 3000);
  }
}
```

## Integration with Seasonal Backgrounds

The Poppy animations are designed to work with the seasonal background animations. When you use a holiday class on Poppy (e.g., `poppy christmas`), it automatically coordinates with the corresponding background animation (e.g., falling snow).

## Accessibility

For accessibility purposes, always:
1. Include proper alt text for Poppy images
2. Ensure animations can be disabled for users who prefer reduced motion
3. Don't rely solely on animations to convey important information

## Creating Custom Poppy Animations

If you need to create custom animations for Poppy:

1. Add your custom keyframes to `_animations.scss`
2. Create a new class for Poppy with your animation
3. Document the new animation in this guide

## Example: Achievement Animation

When a user earns an achievement:

```html
<div class="achievement-popup">
  <div class="poppy excited">
    <img src="assets/images/mascot/poppy-default.svg" alt="Poppy the Buffalo">
  </div>
  <div class="message">
    Congratulations! You earned the "Popcorn Explorer" badge!
  </div>
</div>
```

This shows Poppy with an excited animation alongside the achievement message.
