# Agent Log

Purpose: A durable, append-only activity log so any agent can resume work exactly where the last agent left off.

Usage rules:
- Append entries at the top under Today with ISO timestamps.
- Keep notes concise; link Issues/PRs/Commits for details.
- When handing off, ensure In Progress items reflect reality and include Next Actions.

## Today (YYYY-MM-DD)
- Owner: <agent or human>
- Context: <current branch, env, ticket refs>
- Summary:
  - What changed:
  - Why it changed:
  - Impact:
- In Progress:
  - [ ] <task> (link to Issue/PR)
- Next Actions:
  - <ordered list of next concrete steps>

## Decisions Registry
- YYYY-MM-DD: <decision> — Rationale: <why> — Link: <Issue/PR>

## Recent Activity
- YYYY-MM-DD HH:MM UTC — <short action> — Link: <commit/issue/pr>

---

Starter entries

## 2025-08-27
- Owner: @cursorcursor[bot]
- Context: Branch dev reset to 586c8e4; CI workflows in .github/workflows
- Summary:
  - What changed: Restored dev to 586c8e4 (feat/consulting-v2-clean) and retriggered deploy
  - Why it changed: Align dev with requested baseline
  - Impact: Dev should serve version at 586c8e4 after cache invalidation
- In Progress:
  - [ ] Establish persistent tracking across agents
- Next Actions:
  - Create docs/TODO.md, Issue/PR templates, CONTRIBUTING.md
  - Enforce linking Issues in PRs

