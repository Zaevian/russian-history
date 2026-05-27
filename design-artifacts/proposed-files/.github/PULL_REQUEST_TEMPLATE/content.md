## Content PR Checklist (Scholarly Model Enforcement)

**Required for all content PRs (narrative, thematic, primary sources, figures).**

- [ ] All interpretive claims cite at least two historians from the approved list with specific works and page/section references.
- [ ] Major historiographical debates are surfaced using the `<DebateCallout id="..." />` component and reference the central registry (`content/debates/index.json`).
- [ ] Primary source excerpts include full apparatus (provenance ≥50 words, translator, translation date, context, textual notes).
- [ ] New or modified debate entries in the registry have at least two opposing positions with named historians and recent `lastReviewed` date.
- [ ] Terminology is consistent with the glossary (see `/content/glossary.json`).
- [ ] Any maps, trees, or statistical visualizations include source attribution and data date in metadata/frontmatter.
- [ ] Word count and estimated reading time verified in frontmatter.
- [ ] Historian CODEOWNER review completed and signed off on interpretive balance (not just factual accuracy).

**For thematic essays only:**
- [ ] At least one relevant debate from the registry is explicitly engaged.

**Reviewer notes (historian sign-off required before merge):**
- Balance of interpretations: [ ] Satisfactory / [ ] Needs revision
- Primary source apparatus quality: [ ] Satisfactory / [ ] Needs revision
- Glossary/terminology consistency: [ ] Satisfactory

Historian reviewer: ___________________________ Date: ___________