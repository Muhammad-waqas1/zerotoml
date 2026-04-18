## What does this PR do?

<!-- One sentence summary of the change -->

## Type of Change

- [ ] Bug fix (fixes broken code, wrong math, broken link, layout issue)
- [ ] Content improvement (better explanation, clearer wording, new example)
- [ ] New lesson
- [ ] UI / styling change
- [ ] Infrastructure / tooling change

## Affected Lessons / Files

<!-- List the lesson pages or files this PR modifies -->

- 
- 

## Changes Made

<!-- Describe what you changed and why -->

## Checklist

**For all changes:**
- [ ] I regenerated the affected lesson HTML by running the generator script(s)
- [ ] I previewed the changes in a browser
- [ ] Math renders correctly (KaTeX)
- [ ] Code blocks have syntax highlighting and a Copy button
- [ ] No triple quotes inside content strings (would break Python parsing)

**For new lessons:**
- [ ] Lesson follows the structure: intuition → math → code → summary
- [ ] All mathematical symbols are defined before use
- [ ] Code examples are complete and runnable (not just fragments)
- [ ] `id` attributes on all `<h2>` and `<h3>` headings (required for ToC)
- [ ] Added to the `PAGES` list with prev/next navigation
- [ ] Added to `ALL_MODULES` in **all** generator scripts (v2, v3, v4, v5)
- [ ] All generator scripts regenerated so sidebar is consistent everywhere

**For math fixes:**
- [ ] Double-checked the corrected formula against a reliable source
- [ ] Added a reference or source if the fix was non-obvious

## Screenshots (if applicable)

<!-- Before / after screenshots for layout or UI changes -->

## Related Issue

<!-- Closes #123 -->
