---
name: session-coordinator
description: Bilingual coordinator workflow to split work into parent/child sessions, persist assignments and handoffs in Engram, and bootstrap child sessions by number or id. Integrates mandatory session-close-engram closure protocol.
license: MIT
metadata:
  version: "1.0.0"
  project: "DPANIBRA"
---

# Session Coordinator (ES/EN)

Use this skill when work must be split across multiple sessions with a single coordinator source of truth.

## Triggers (ES/EN)

- Espanol: `coordinar sesiones`, `planificar sesiones`, `abrir sesion hija`, `iniciar sesion 2`.
- English: `coordinate sessions`, `split work into sessions`, `start child session 2`.

---

## Coordinator Model

- Parent coordinator session: creates and owns the master split plan.
- Child sessions: execute one assignment each and report back with handoff.
- Required fields per child assignment:
  - session number
  - session id/name
  - scope
  - objectives
  - definition of done
  - out-of-scope boundaries
  - dependencies/order
  - handoff checklist

Operational rule: parent plans once, children execute from Engram artifacts.

---

## Engram Persistence Design

Use stable topic keys and keep plan id consistent across all artifacts.

- Master plan: `session-plan/{plan-id}`
  - Example plan id: `2026-05-close-phase-1` or `sprint-12`.
- Child assignment: `session-child/{plan-id}/{session-number}`
- Child handoff: `session-handoff/{plan-id}/{session-number}`

Required retrieval behavior:
1. `mem_search` by topic key or plan id.
2. `mem_get_observation` for full content.

Important: `mem_search` returns truncated previews. Always call `mem_get_observation` before acting.

---

## Commands / Workflows (ES/EN)

### `/sessions-plan`

Parent creates and saves split plan.

Steps:
1. Define `plan-id` and total child sessions.
2. Write one `mem_save` for master plan with topic key `session-plan/{plan-id}`.
3. Write one `mem_save` per child assignment with topic key `session-child/{plan-id}/{session-number}`.
4. Confirm plan id, child count, and dependency order.

Minimum master plan content:
- Goal and rationale
- Session index (number -> id/name)
- Dependency/order graph
- Global risks

Minimum child assignment content:
- Scope
- Objectives
- Definition of done
- Out-of-scope
- Inputs/dependencies
- Handoff checklist

### `/session-start <number|id>`

Child bootstraps itself from Engram only.

Steps:
1. Resolve `plan-id` and session number/id.
2. Run `mem_search` using `session-child/{plan-id}/{session-number}` (or matching id).
3. Run `mem_get_observation` on the selected result.
4. Restate execution contract: scope, done criteria, boundaries, dependencies.

Rule: do not start implementation from memory preview alone.

### `/session-handoff <number|id>`

Child writes completion notes for parent consumption.

Steps:
1. Save `mem_save` with topic key `session-handoff/{plan-id}/{session-number}`.
2. Include:
   - completion status (done | partial | blocked)
   - delivered artifacts/files
   - tests/validation done or missing
   - unresolved risks
   - explicit next action for parent or next child
3. Then run closure integration:
   - `/close-task` for task-level closure
   - `/close-session` when ending the session

### `/sessions-status`

Parent summarizes progress from handoffs.

Steps:
1. `mem_search` for `session-handoff/{plan-id}/` entries.
2. `mem_get_observation` for each relevant handoff.
3. Produce status table: session -> status -> blockers -> next dependency.
4. Identify replan needs without rewriting original child scope unless justified by risk notes.

---

## Governance Rules

- Single source of truth: Engram plan artifacts under `session-plan/*`, `session-child/*`, `session-handoff/*`.
- Child sessions must not redefine scope.
- If scope drift is unavoidable, child must add explicit risk note in handoff.
- Every child closure must write `/session-handoff` and then follow `session-close-engram` protocol.
- Integrate, do not duplicate: use existing `session-close-engram` skill for `/close-block`, `/close-task`, `/close-session` behavior.

---

## Integration With session-close-engram

Reference skill path:
`C:\Users\dpani\OneDrive\Escritorio\DPANIBRA\.agents\skills\session-close-engram\SKILL.md`

Integration contract:
- Child flow must end with handoff persistence first, then closure commands.
- `/close-block`, `/close-task`, `/close-session` semantics are owned by `session-close-engram`.
- Do not fork alternate closure rules in this skill.

---

## Examples

### ES: Parent plan (3 sessions, close phase 1)

```text
/sessions-plan
plan-id: 2026-05-close-phase-1
S1: auditoria final de pendientes y riesgos
S2: correcciones tecnicas y validacion
S3: cierre documental + release checklist
Dependencias: S1 -> S2 -> S3
Persistencia: session-plan/2026-05-close-phase-1 + session-child/.../1..3
```

### EN: Child session 2 bootstrap

```text
/session-start 2
1) mem_search topic_key: session-child/2026-05-close-phase-1/2
2) mem_get_observation(id)
3) Execute only listed scope/objectives/DoD and declared dependencies
```

### ES/EN: Child handoff + close

```text
/session-handoff 2
Status: partial
Bloqueo/Blocker: falta validacion en entorno real
Next: parent decide hotfix o mover a sesion 3
Persistido en session-handoff/2026-05-close-phase-1/2

/close-task
/close-session
```

---

## Validation Checklist

- [x] A) Coordinator model defined (parent + child structure, required assignment fields).
- [x] B) Engram persistence design defined with exact topic key conventions and mem_search + mem_get_observation rule, including truncation warning.
- [x] C) Required commands included: `/sessions-plan`, `/session-start`, `/session-handoff`, `/sessions-status`, plus closure integration via `session-close-engram`.
- [x] D) Trigger phrases included in ES and EN.
- [x] E) Governance rules included, including scope control and mandatory handoff + close protocol.
- [x] F) Concise ES/EN examples included for parent plan, child bootstrap, and handoff + close.
- [x] G) Validation section included and mapped.
