---
title: "T-Rex / Sticks: Visuotactile Policy Adaptation"
excerpt: "**Ongoing research.** Robot and policy adaptation for contact-rich manipulation, building on the open-source T-Rex framework."
collection: portfolio
permalink: /portfolio/visuotactile-adaptation/
order: 3
short_title: "T-Rex / Sticks"
area: "Visuotactile learning"
status: "Ongoing research"
badge_type: "ongoing"
featured: false
role: "Lead researcher"
image: /images/projects/visuotactile-adaptation.svg
image_alt: "Visuotactile Policy Adaptation and Reinforcement Learning on Piper Robot"
media_caption: "Cross-modal vision and tactile force-field fusion for contact-rich insertion and policy adaptation."
summary: "Adapting contact-rich manipulation policies via vision, tactile force fields, and reinforcement learning on a Piper robot platform."
contribution: "Visuotactile sensorimotor fusion + reinforcement learning policy adaptation + continuous action-data coupling on Piper hardware."
header:
  teaser: projects/visuotactile-adaptation.svg
---

![Visuotactile Policy Adaptation Architecture]({{ '/images/projects/visuotactile-adaptation.svg' | relative_url }})

**Ongoing Research · Visuotactile Learning & Contact-Rich Control**

## Research Scope

In contact-rich manipulation tasks such as tight-tolerance insertion (**Sticks** task), visual observations alone cannot resolve sub-millimeter alignment errors or contact forces once parts engage. Building upon the open-source **T-Rex** framework, this research investigates how multimodal visual and tactile feedback can drive adaptive reinforcement learning policies on a **Piper** robot platform.

## Technical Focus

- **Visuotactile Sensorimotor Fusion**: Coupling global visual context ($\mathbf{o}_t^{\text{vis}}$) with local tactile shear and normal force fields ($\mathbf{o}_t^{\text{tac}}$) to infer contact states and geometric misalignment.
- **Policy Adaptation via Reinforcement Learning**: Training and adapting continuous manipulation policies to compensate for contact uncertainties during physical interaction.
- **Hardware-Data Loop Integration**: Establishing deterministic synchronization between continuous executed actions and recorded multimodal interaction trajectories on the Piper manipulator.
