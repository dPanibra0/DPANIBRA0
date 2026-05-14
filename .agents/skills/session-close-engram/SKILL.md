---
name: session-close-engram
description: Bilingual closure workflow for Engram persistence. Trigger: "cerramos bloque", "cerrar tarea", "cerrar sesion", "listo por hoy", "close block", "close task", "close session", "done for today", or any explicit closure signal.
license: MIT
metadata:
  version: "1.0.0"
  project: "DPANIBRA"
---

# Session Close Engram (ES/EN)

Use this skill whenever the user indicates closure of a block, task, or full session.

This protocol is mandatory. Do not skip persistence.

## Bilingual Triggers (ES/EN)

- Espanol: `cerramos bloque`, `cerrar tarea`, `cerrar sesion`, `listo por hoy`, `cerramos`, `terminado por hoy`.
- English: `close block`, `close task`, `close session`, `done for today`, `wrap up`, `we are done`.

If intent is ambiguous, default to `/close-block` and state what was persisted.

---

## Command: /close-block

Purpose: close a work block and preserve key learnings, decisions, fixes, or pending notes.

Mandatory protocol:
1. Save one or more `mem_save` observations.
2. Use structured content with exact sections:
   - `**What**:`
   - `**Why**:`
   - `**Where**:`
   - `**Learned**:` (omit only if none)
3. If there were no file changes, still save at least one observation (decision, discovery, risk, or pending next action).
4. Confirm to the user what was persisted.

Example (ES):
```text
/close-block
Bloque cerrado. Guardo 2 observaciones en Engram (decision + pendiente) con formato What/Why/Where/Learned.
```

Example (EN):
```text
/close-block
Block closed. I saved 2 Engram observations (decision + pending item) using What/Why/Where/Learned.
```

---

## Command: /close-task

Purpose: close a task with persistence plus explicit completion health.

Mandatory protocol:
1. Run `/close-block` persistence (at least one `mem_save` with What/Why/Where/Learned).
2. Add an explicit status and risk note in the user-facing closure message:
   - `Status:` done | partial | blocked
   - `Risk:` none | low | medium | high (+ one short reason)
3. If no file changes, do not skip; persist discovery/decision/pending anyway.

Example (ES):
```text
/close-task
Tarea cerrada.
Status: partial
Risk: low (falta validacion final en entorno real)
Persistencia: guardada en Engram con What/Why/Where/Learned.
```

Example (EN):
```text
/close-task
Task closed.
Status: done
Risk: none
Persistence: saved to Engram with What/Why/Where/Learned.
```

---

## Command: /close-session

Purpose: close the session with a mandatory full session artifact.

Mandatory protocol:
1. Create `mem_session_summary` before final sign-off.
2. The summary must contain all sections:
   - `## Goal`
   - `## Instructions`
   - `## Discoveries`
   - `## Accomplished`
   - `## Next Steps`
   - `## Relevant Files`
3. If no file changes happened, still fill summary with decisions/discoveries/pending work.
4. Only after saving summary, send final "done/listo" response.

Example (ES):
```text
/close-session
Sesion cerrada. Ya persisti mem_session_summary con Goal, Instructions, Discoveries, Accomplished, Next Steps y Relevant Files.
```

Example (EN):
```text
/close-session
Session closed. I already persisted mem_session_summary with Goal, Instructions, Discoveries, Accomplished, Next Steps, and Relevant Files.
```

---

## Compaction/Reset Recovery Rule (Mandatory)

If context compaction/reset is detected:
1. First persist a recovery summary via `mem_session_summary` with best available context.
2. Then call `mem_context` to recover prior session details.
3. Continue work only after steps 1-2.

Never invert this order.

---

## Operational Guardrails

- Closure persistence is mandatory for block/task/session signals.
- Never skip Engram writes just because changes are small.
- Prefer concise artifacts, but always preserve non-obvious decisions, bugfixes, and risks.
