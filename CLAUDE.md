# Claude Development Notes

## Critical Lessons Learned

### Tailwind v4 + Custom CSS Reset Conflict (2026-02-05)

**Problem:** Spent ~30 minutes debugging why `mx-auto` wasn't centering elements. Tried multiple workarounds (adding `w-full`, using `flex justify-center` on parents, etc.) before finding root cause.

**Root Cause:** A custom CSS reset in `globals.css`:
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**Why it broke things:** In Tailwind v4, utilities are organized in CSS layers. Unlayered CSS (like our `*` rule) has HIGHER cascade priority than layered CSS. So `* { margin: 0 }` was overriding Tailwind's `mx-auto` class, even though `.mx-auto` has higher specificity than `*`.

**Solution:** Remove the custom CSS reset entirely. Tailwind v4 includes Preflight (its own reset), making custom resets redundant AND destructive.

**Lesson for future debugging:**
1. When Tailwind utilities aren't working, FIRST check `globals.css` for conflicting rules
2. In Tailwind v4, avoid writing unlayered CSS that could override utilities
3. Don't add custom CSS resets - Tailwind's Preflight handles this
4. When centering breaks across an entire site, the problem is almost always global CSS, not individual components
5. **Check the simplest/most global cause first before adding workarounds to every component**

**Time wasted:** ~30 minutes adding band-aid fixes to 15+ components instead of checking globals.css first.
