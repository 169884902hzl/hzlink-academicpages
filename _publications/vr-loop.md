---
title: "Iterative Verify-and-Refine Vision-Language Agent for Reliable Dual-Arm Manipulation"
collection: publications
category: manuscripts
permalink: /publication/vr-loop/
year: 2026
venue: Manuscript
publication_status: Under review
excerpt: "Yuqi Cheng, **Zhilun Hu**, Cheng Jiang, Qingyu Peng, Weiming Shen. Closed-loop visual-overlay verification and mask-constrained geometric refinement for dual-arm deformable rope untangling."
---

![VR-Loop Architecture]({{ '/images/projects/vr-loop.svg' | relative_url }})

Yuqi Cheng, **Zhilun Hu**, Cheng Jiang, Qingyu Peng, Weiming Shen.

**Manuscript Under Review · Second Author.**

## Abstract & Method Overview

In deformable linear object manipulation (such as dual-arm rope untangling), open-loop action proposals from vision-language models can place grasps off the rope geometry or pull along directions that tighten the knot. **VR-Loop** introduces an iterative Verify-and-Refine paradigm: candidate grasp points and pulling vectors are visually rendered onto image overlays, critiqued against crossing topology and mask constraints before physical execution, and lifted via RGB-D depth geometry into collision-free dual-arm trajectories.

## BibTeX

```bibtex
@unpublished{cheng2026vrloop,
  title  = {Iterative Verify-and-Refine Vision-Language Agent for Reliable Dual-Arm Manipulation},
  author = {Cheng, Yuqi and Hu, Zhilun and Jiang, Cheng and Peng, Qingyu and Shen, Weiming},
  year   = {2026},
  note   = {Manuscript under review}
}
```

[Project Page]({{ '/portfolio/vr-loop/' | relative_url }})
