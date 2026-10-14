---
title: "VR-Loop: Dual-Arm Rope Untangling"
excerpt: "**Manuscript under review.** Iterative visual verification and geometric constraints for reliable dual-arm manipulation."
collection: portfolio
permalink: /portfolio/vr-loop/
order: 2
short_title: "VR-Loop"
area: "Dual-arm manipulation"
status: "Manuscript Under Review"
ribbon: "Under Review"
ribbon_color: "blue"
badge_type: "review"
featured: true
role: "Second Author"
paper_title: "Iterative Verify-and-Refine Vision-Language Agent for Reliable Dual-Arm Manipulation"
authors: "Yuqi Cheng, Zhilun Hu, Cheng Jiang, Qingyu Peng, Weiming Shen"
venue: "Manuscript under review · 2026"
image: /images/renders/vr-loop.png
diagram: /images/projects/vr-loop.svg
image_alt: "3D visualization of VR-Loop dual-arm deformable rope untangling with verified pulling trajectories"
media_caption: "Closed-loop visual-overlay verification and mask-constrained refinement before physical execution."
tldr: "Reformulates open-loop VLM action prediction into a pre-execution Verify-and-Refine visual overlay loop with 3D mask/depth constraints."
home_description: "In deformable rope untangling, an unverified grasp point or pulling vector can irreversibly tighten a knot. VR-Loop introduces a closed-loop Verify-and-Refine Vision-Language Agent that renders proposed dual-arm actions onto image overlays, critiques topological and mask constraints prior to execution, and synthesizes depth-informed 3D trajectories."
summary: "Pre-execution visual-overlay verification and geometric refinement for dual-arm deformable rope untangling."
contribution: "Closed-loop VLM action critique + image-overlay visual verification + mask & depth geometric projection."
tags:
  - "Vision-Language Agent"
  - "Deformable Manipulation"
  - "Visual Verification"
  - "Dual-Arm Robotics"
bibtex: |
  @unpublished{cheng2026vrloop,
    title  = {Iterative Verify-and-Refine Vision-Language Agent for Reliable Dual-Arm Manipulation},
    author = {Cheng, Yuqi and Hu, Zhilun and Jiang, Cheng and Peng, Qingyu and Shen, Weiming},
    year   = {2026},
    note   = {Manuscript under review}
  }
links:
  - label: "Publication Page"
    url: "/publication/vr-loop/"
header:
  teaser: renders/vr-loop.png
---

![VR-Loop 3D Visualization]({{ '/images/renders/vr-loop.png' | relative_url }})

**Manuscript Under Review · Second-Author Paper**

## Problem Formulation

Deformable linear objects (such as tangled ropes and cables) exhibit high-dimensional configuration spaces and complex self-occlusions. When vision-language models (VLMs) are applied in an open-loop manner to propose manipulation primitives, spatial grounding errors can place grasp points off the rope mask or pull along directions that tighten rather than loosen the tangle.

## Technical Approach & Architecture

![VR-Loop System Architecture]({{ '/images/projects/vr-loop.svg' | relative_url }})

**VR-Loop** reformulates VLM-based manipulation from one-shot open-loop prediction into an **iterative pre-execution Verify-and-Refine loop**:

1. **Action Proposal & Image-Overlay Rendering**: Candidate dual-arm grasp points and pulling vectors $\{(\mathbf{p}_1, \mathbf{v}_1), (\mathbf{p}_2, \mathbf{v}_2)\}$ are projected and visually rendered onto the RGB observation.
2. **Closed-Loop VLM Critique**: The verifier inspects the overlaid candidate action against knot geometry and crossing topology, rejecting actions that risk tightening the tangle and generating structured directional feedback.
3. **Mask-Based & Depth-Informed Geometric Execution**: Accepted interaction primitives are constrained to segmented rope masks $\mathcal{M}_{\text{rope}}$ and lifted via RGB-D depth geometry into collision-free dual-arm trajectories.

## Manuscript

**Iterative Verify-and-Refine Vision-Language Agent for Reliable Dual-Arm Manipulation**  
Yuqi Cheng, **Zhilun Hu**, Cheng Jiang, Qingyu Peng, Weiming Shen.  
*Manuscript under review*, 2026.

[Publication Entry]({{ '/publication/vr-loop/' | relative_url }})
