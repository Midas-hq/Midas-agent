# Self-Evolution Engine

The Self-Evolution Engine is what sets Midas Agent apart from a plain model router. It continuously tunes how the agent picks and uses models based on real outcomes.

## Core Concepts

### Genes
A **gene** represents the weighted preference for a model in a given role (Planner / Worker / Fallback). Each gene carries a score derived from cost, latency, and historical success rate. View current genes via `GET /v1/evolution/stats`.

### Capsules
A **capsule** is a snapshot of agent state and recent task outcomes. Capsules feed the advantage-processing step and provide rollback points if an evolution cycle degrades performance.

### Advantage Processing
After tasks complete, the engine compares actual outcomes against expected outcomes. Models and routes that outperform expectations gain weight; those that underperform lose weight.

## Evolution Cycle

1. Collect recent task outcomes (capsules).
2. Compute advantage signals per gene.
3. Adjust gene weights (bounded to avoid instability).
4. Optionally evolve skills — limited to **5 changes per evolution** to keep changes reviewable and safe.
5. Persist the new generation; keep prior capsules for rollback.

Trigger a cycle manually with `POST /v1/evolution/trigger`, or let it run on its periodic schedule.

## Skill Evolution

Skills follow the `SKILL.md` format. The engine can:
- **Generate** a skill from a natural-language description (`/v1/skill/generate`)
- **Evolve** an existing skill using usage feedback (`/v1/skill/evolve`)

The 5-change limit per evolution keeps each iteration small and auditable.
