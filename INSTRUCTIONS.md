# INSTRUCTIONS.md — Rules for Claude Code

> **Read this file at the start of every session.**

---

## 🔄 Keep Spec Files Updated

After completing any task, update the relevant spec files:

### When you build a page:
1. Update `HANDOFF.md` — Move from "NOT Built" to "Built ✅"
2. Update `SITEMAP-Complete.md` — Mark as complete if applicable
3. Check off items in the "NEXT ACTIONS" section

### When you make design decisions:
1. Add to `HANDOFF.md` under "KEY DECISIONS MADE"
2. Update `CLAUDE.md` if it affects the design system

### When you add new components:
1. Add to the component list in `CLAUDE.md`
2. Document props and usage if complex

### When you change routes/pages:
1. Update folder structure in `CLAUDE.md`
2. Update `SITEMAP-Complete.md`

---

## 📁 File Purposes

| File | What It's For | When to Update |
|------|---------------|----------------|
| `INSTRUCTIONS.md` | Rules for Claude Code | Rarely |
| `HANDOFF.md` | Session context, decisions, status | After every major change |
| `CLAUDE.md` | Master spec (design system, structure) | When design/structure changes |
| `ABOUT-PAGE-SPEC.md` | About page details | When About page changes |
| `SITEMAP-Complete.md` | All pages mapped | When adding/removing pages |

---

## ✅ After Every Task

Before finishing, always:

```markdown
## Updates Made
- [ ] Updated HANDOFF.md status
- [ ] Checked CLAUDE.md is still accurate
- [ ] Documented any new decisions
- [ ] Listed any new components created
```

---

## 🚨 Important Rules

1. **Sentence case** — All headings use sentence case (not Title Case)
2. **Pricing** — Always $199/month (never $129)
3. **Colors** — Primary blue `#2563eb`, Accent green `#22c55e`
4. **No bullet points** in body copy unless explicitly requested
5. **Tailwind only** — No custom CSS files

---

## 🔍 Before Starting Any Task

1. Read `INSTRUCTIONS.md` (this file)
2. Read `HANDOFF.md` for context
3. Read `CLAUDE.md` for design system
4. Read the specific spec file if working on a page (e.g., `ABOUT-PAGE-SPEC.md`)

---

## 📝 How to Log Decisions

When making a decision not in the specs, add it to `HANDOFF.md`:

```markdown
### [Date] — [Decision Title]
**Context:** Why this came up
**Decision:** What we chose
**Rationale:** Why we chose it
```

---

## Example: After Building About Page

Update `HANDOFF.md`:

```markdown
## PROJECT STATUS

### Pages Built ✅
- Homepage (`/`)
- Features (`/features`)
- Pricing (`/pricing`)
- Comparison pages (`/compare/*`)
- Industry pages (`/industries/*`)
- About (`/about`) ← ADD THIS

### Pages NOT Built ❌
- (remove About from this list)
```

And check off in NEXT ACTIONS:

```markdown
### Immediate
- [x] Build About page using ABOUT-PAGE-SPEC.md ← CHECK THIS
```
