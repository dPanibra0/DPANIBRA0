---
name: daily-start-local-check
description: Daily kickoff routine for DPANIBRA. Use when the user says "iniciamos el dia", "inicio del dia", "arranquemos", "start day", or asks what tasks we have today. It must read `.local/` documents first and then review the associated Notion task tracker.
license: MIT
metadata:
  version: "1.0.0"
  project: "DPANIBRA"
---

# Daily Start Local Check (DPANIBRA)

Run this routine at the beginning of the day before proposing tasks.

## Mandatory Order

1. Read `.local/` documents first.
2. Review project Notion tasks second.
3. Return a concise daily plan.

Do not skip step 1.

---

## Step 1: Read `.local/`

### Goal
Extract the latest local context, priorities, blockers, and constraints.

### Process
- Verify if `.local/` exists.
- If present, read key docs in this order:
  - `README*` in `.local/`
  - `*.md` files in `.local/`
  - remaining files only if needed for context
- Summarize:
  - priorities for today
  - blockers
  - explicit instructions/constraints

### Fallback
If `.local/` does not exist or is empty, explicitly report it and continue with Notion + repo context.

---

## Step 2: Review Notion task tracker

### Source of truth
- Page: `V2.0.0 - Task Tracker`
- Notion page id: `35078aac886181f4a4f1f19ae8dc8e59`

### Process
- Fetch the page and parse checklist items.
- Identify open tasks (`[ ]`) and classify them into:
  - active bugs
  - in-progress work
  - design/feature tasks
- Flag anything that was recently completed (`[x]`) to avoid duplicate work.

### Fallback
If Notion is unavailable, explicitly report the failure and continue using `.local/`, git status, and memory context.

---

## Step 3: Deliverable format

Return a short operational kickoff with:

1. `Estado de hoy` (3-5 bullets)
2. `Top 3 tareas recomendadas` (ordered)
3. `Bloqueos/Riesgos` (or `Sin bloqueos`)
4. `Primer paso sugerido` (single next action)

Keep it concise and actionable.

---

## Operational notes

- This skill is for daily kickoff only.
- Do not mark Notion tasks complete unless the user explicitly asks.
- If the user asks "que tareas tenemos para hoy?", run this workflow before answering.
