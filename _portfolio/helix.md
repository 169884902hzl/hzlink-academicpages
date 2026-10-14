---
title: "HELIX: Failure Recovery and Experience Memory"
excerpt: "**Ongoing simulation research.** Value assessment, reflex feedback, and experience memory for robot failure recovery."
collection: portfolio
permalink: /portfolio/helix/
order: 4
short_title: "HELIX"
area: "Failure recovery"
status: "Ongoing simulation research"
badge_type: "ongoing"
featured: false
role: "Lead researcher"
image: /images/projects/helix.svg
image_alt: "HELIX Framework for Value Assessment, Reflex Feedback, and Experience Memory"
media_caption: "Closed-loop anomaly detection, reflexive retraction, and episodic memory retrieval for failure recovery."
summary: "Integrating online value assessment, fast reflex feedback, and episodic experience memory to recover from manipulation failures."
contribution: "Online value/risk monitoring + reflexive safe retraction + episodic experience memory retrieval in simulation."
header:
  teaser: projects/helix.svg
---

![HELIX Failure Recovery Architecture]({{ '/images/projects/helix.svg' | relative_url }})

**Ongoing Simulation Research · Failure Recovery & Experience Memory**

## Research Scope

Even well-trained manipulation policies encounter unexpected disturbances, slips, or suboptimal contact states during execution. **HELIX** investigates how a robotic agent can detect incipient execution failures early, halt unsafe motion, and synthesize corrective recovery actions without restarting from scratch.

## Technical Focus

- **Online Value Assessment**: Monitoring state-value trajectories $V_\phi(\mathbf{s}_t)$ to detect anomalous transitions and assess recoverability before catastrophic task failure.
- **Reflexive Feedback Control**: Triggering fast, low-level reflex actions to retract the manipulator from unsafe contact manifolds back toward a recoverable state basin.
- **Episodic Experience Memory ($\mathcal{M}_{\text{exp}}$)**: Retrieving prior successful recovery rollouts and value-ranked action proposals to guide closed-loop re-planning in simulation benchmarks.
