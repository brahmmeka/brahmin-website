# INSTRUCTIONS.md — Rules for Claude Code

> **Read this file at the start of every session.**

---

## 🔄 Auto-Update Rules

### When you BUILD a new page:
1. ✅ Update `HANDOFF.md` — Add to "Pages Built ✅" list
2. ✅ Update `SITEMAP-Complete.md` — Mark page as complete, add meta tags
3. ✅ Update `CLAUDE.md` — Add to folder structure if new route
4. ✅ Create `[PAGE]-SPEC.md` — Document the page structure, copy, design
5. ✅ Check off in "NEXT ACTIONS" section of HANDOFF.md

### When you EDIT an existing page:
1. ✅ Update the corresponding `[PAGE]-SPEC.md` file
2. ✅ Update `HANDOFF.md` if any decisions changed
3. ✅ Update `CLAUDE.md` if design system affected

### When you CREATE a new component:
1. ✅ Add to component list in `CLAUDE.md`
2. ✅ Document props and usage if complex
3. ✅ Update `HANDOFF.md` under "KEY DECISIONS MADE" if significant

### When you ADD a new route/page:
1. ✅ Update folder structure in `CLAUDE.md`
2. ✅ Add to `SITEMAP-Complete.md` with:
   - URL path
   - Page purpose
   - H1 headline
   - Meta title and description
3. ✅ Add to `HANDOFF.md` page status

### When you DELETE a page:
1. ✅ Remove from `SITEMAP-Complete.md`
2. ✅ Remove from `CLAUDE.md` folder structure
3. ✅ Update `HANDOFF.md` status
4. ✅ Delete corresponding `[PAGE]-SPEC.md` if exists

---

## 📄 Spec Files Reference

| File | Purpose | When to Update |
|------|---------|----------------|
| `INSTRUCTIONS.md` | Rules for Claude Code | Rarely |
| `HANDOFF.md` | Session context, decisions, status | After every task |
| `CLAUDE.md` | Master spec (design system, structure) | When design/structure changes |
| `SITEMAP-Complete.md` | All pages with meta tags | When adding/removing/editing pages |
| `ABOUT-PAGE-SPEC.md` | About page details | When About page changes |
| `PRICING-SPEC.md` | Pricing page details | When Pricing page changes |
| `[PAGE]-SPEC.md` | Any page-specific details | When that page changes |

---

## 📝 How to Document an Existing Page

When asked to document a page that's already built:

```markdown
## [PAGE]-SPEC.md Structure

### Overview
- URL: /path
- Purpose: What this page does
- Tone: How it should feel

### Sections (in order)
1. Section name — description
2. Section name — description
...

### Key Copy
- H1: "Exact headline"
- Subhead: "Exact subhead"
- CTAs: Button text

### Design Patterns
- Layout: (grid, cards, etc.)
- Colors used
- Special components

### Meta Tags
- Title: 
- Description:
```

---

## 🗺️ SITEMAP-Complete.md Format

When adding a new page to the sitemap:

```markdown
### Page Name `/url-path`
- **Purpose:** What this page does
- **H1:** "Main headline"
- **Structure:** Brief list of sections
- **Status:** ✅ Built or ❌ Not built

**Meta Tags:**
- Title: Page Title | Brahmin Solutions
- Description: 155 characters max describing the page
```

---

## ✅ After Every Task Checklist

Before finishing any task, verify:

- [ ] `HANDOFF.md` status is current
- [ ] `SITEMAP-Complete.md` reflects any page changes
- [ ] `CLAUDE.md` folder structure is accurate
- [ ] Any new page has a `[PAGE]-SPEC.md` file
- [ ] All meta tags are documented

---

## 🚨 Important Rules

1. **Sentence case** — All headings use sentence case (not Title Case)
2. **Pricing** — Always $199/month (never $129)
3. **Colors** — Primary blue `#2563eb`, Accent green `#22c55e`
4. **No bullet points** in body copy unless explicitly requested
5. **Tailwind only** — No custom CSS files
6. **Always update specs** — Never build without documenting

---

## 🔍 Before Starting Any Task

1. Read `INSTRUCTIONS.md` (this file)
2. Read `HANDOFF.md` for current status
3. Read `CLAUDE.md` for design system
4. Read `SITEMAP-Complete.md` for page inventory
5. Read `[PAGE]-SPEC.md` if working on specific page

---

## 📝 Decision Log Format

When making a decision not in the specs, add to `HANDOFF.md`:

```markdown
### [Date] — [Decision Title]
**Context:** Why this came up
**Decision:** What we chose
**Rationale:** Why we chose it
**Files Updated:** Which spec files were changed
```

---

## 🆕 Creating a New Page Checklist

When building a new page from scratch:

1. [ ] Check if spec exists (`[PAGE]-SPEC.md`)
2. [ ] If no spec, ask for requirements or create based on similar pages
3. [ ] Build the page
4. [ ] Create `[PAGE]-SPEC.md` documenting what was built
5. [ ] Update `SITEMAP-Complete.md` with page details + meta tags
6. [ ] Update `CLAUDE.md` folder structure
7. [ ] Update `HANDOFF.md` status
8. [ ] Commit with descriptive message

---

## 📋 Prompt Templates (Copy-Paste These)

### Build a New Page
```
Read INSTRUCTIONS.md first, then:

Build the [PAGE NAME] page at /app/[path]/page.tsx using [SPEC-FILE].md

When done:
- Update HANDOFF.md status
- Update SITEMAP-Complete.md with meta tags
- Create [PAGE]-SPEC.md if it doesn't exist
```

### Edit an Existing Page
```
Read INSTRUCTIONS.md first, then:

Edit the [PAGE NAME] page to [DESCRIBE CHANGE].

When done, update the corresponding spec files.
```

### Document an Existing Page
```
Read INSTRUCTIONS.md first, then:

Document the existing [PAGE NAME] page at /app/[path]/page.tsx

Create [PAGE]-SPEC.md with:
- Page structure (all sections)
- Headlines and key copy
- Design patterns used
- Meta tags

Then update HANDOFF.md to mark as documented.
```

### Document All Existing Pages
```
Read INSTRUCTIONS.md first, then:

Document all existing pages by creating spec files:
1. PRICING-SPEC.md from /app/pricing/page.tsx
2. FEATURES-SPEC.md from /app/features/page.tsx
3. COMPARE-TEMPLATE-SPEC.md from a comparison page
4. INDUSTRY-TEMPLATE-SPEC.md from an industry page

Update HANDOFF.md when complete.
```

### Full Project Audit
```
Read INSTRUCTIONS.md and HANDOFF.md, then:

Audit the entire codebase and update all spec files:
1. List all pages that exist
2. List all components
3. Update HANDOFF.md with current status
4. Update SITEMAP-Complete.md to match reality
5. Flag anything that doesn't match CLAUDE.md specs
```

### Add a New Component
```
Read INSTRUCTIONS.md first, then:

Create a [COMPONENT NAME] component at /components/[path].tsx

Requirements:
- [List requirements]

When done:
- Add to component list in CLAUDE.md
- Document props and usage
- Update HANDOFF.md if significant
```

### Fix a Bug
```
Read INSTRUCTIONS.md first, then:

Fix: [DESCRIBE BUG]

Location: [FILE PATH if known]

When done, update spec files if the fix changed any documented behavior.
```

### Add a New Route/Page to Sitemap
```
Read INSTRUCTIONS.md first, then:

Add a new page: [PAGE NAME] at /app/[path]/page.tsx

Purpose: [WHAT THE PAGE DOES]

When done:
- Update SITEMAP-Complete.md with URL, H1, meta tags
- Update CLAUDE.md folder structure
- Update HANDOFF.md status
- Create [PAGE]-SPEC.md
```

### Quick Session Start
```
Read INSTRUCTIONS.md and HANDOFF.md.

Show me:
1. Current project status
2. What pages are built
3. What's next on the TODO list
```

---

## 💡 Pro Tips

1. **Always start with:** `Read INSTRUCTIONS.md first, then:`
2. **Always end with:** `When done, update [relevant spec files]`
3. **For big tasks:** Be specific about which files to update
4. **For quick fixes:** Just mention "update spec files if needed"
5. **When in doubt:** Ask Claude Code to show you HANDOFF.md status first
