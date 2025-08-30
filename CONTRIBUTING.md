# Contributing / Agent Workflow

This repo uses a simple workflow so any agent can resume where the previous left off.

## Branching
- Base dev environment: commit 586c8e4 (feat/consulting-v2-clean) on `dev`.
- Create feature branches from `dev`: `feat/<short-name>` or `fix/<short-name>`.

## Tasks & Logs
- Open an Issue using template `Agent Task` with context and DoD.
- Update `docs/AGENT_LOG.md` for every substantive step.
- Track high-level items in `docs/TODO.md`.

## PRs
- Use the PR template and link the `agent-task` Issue and AGENT_LOG entry.
- Keep changes scoped; explain risk/impact.

## Commits
- Conventional: `feat|fix|chore(scope): message` + refs (e.g., `Refs #123`).

## Deployments
- Dev deploys on push to `dev` via `.github/workflows/deploy-dev.yml`.
- Include cache invalidation notes if relevant.

## Handoffs
- Before stopping, ensure:
  - In-progress tasks marked in AGENT_LOG with Next Actions
  - TODO statuses updated
  - Open PR links in AGENT_LOG