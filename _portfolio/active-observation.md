---
title: "Active Observation and Visual Servoing"
excerpt: "**IEEE CASE 2026 · Accepted.** Active camera motion and relative visual servoing for grasping under occlusion."
collection: portfolio
permalink: /portfolio/active-observation/
order: 1
short_title: "Active Observation"
area: "Active perception"
status: "Accepted · IEEE CASE 2026"
badge_type: "accepted"
featured: true
role: "First author"
paper_title: "Active Observation for Robust Visual Servoing in Robotic Manipulation"
authors: "Zhilun Hu, Yuqi Cheng, Yuxiang Tan, Wen-pan Li, Weiming Shen"
venue: "IEEE International Conference on Automation Science and Engineering (CASE), 2026 · Paper ThCT6.3"
image: /images/projects/active-observation.svg
image_alt: "Architecture of Dual-Arm Active Observation and Relative Visual Servoing under Occlusion"
media_caption: "Dual-arm active viewpoint planning and target–gripper relative visual servoing under occlusion."
# video: /assets/videos/active-observation.mp4
home_description: "During robotic grasping, the manipulator or gripper frequently obscures the target object just when terminal visual feedback is most critical. This work coordinates an active eye-in-hand camera arm with a grasping arm, combining a two-stage viewpoint strategy, target–gripper relative visual servoing, and occlusion-triggered viewpoint exploration."
summary: "Coordinating an active RGB-D camera arm with relative visual servoing to preserve target–gripper co-visibility under occlusion."
contribution: "Two-stage active viewpoint strategy + target–gripper relative image error feedback + occlusion-triggered viewpoint exploration."
bibtex: |
  @inproceedings{hu2026activeobservation,
    title     = {Active Observation for Robust Visual Servoing in Robotic Manipulation},
    author    = {Hu, Zhilun and Cheng, Yuqi and Tan, Yuxiang and Li, Wen-pan and Shen, Weiming},
    booktitle = {2026 IEEE International Conference on Automation Science and Engineering (CASE)},
    year      = {2026},
    note      = {Accepted, Paper ThCT6.3}
  }
links:
  - label: "Official Program (ThCT6.3)"
    url: "https://ras.papercept.net/conferences/scripts/rtf/CASE26_ContentListWeb_4.html"
  - label: "Publication Entry"
    url: "/publication/active-observation/"
header:
  teaser: projects/active-observation.svg
---

![Active Observation System Architecture]({{ '/images/projects/active-observation.svg' | relative_url }})

**IEEE CASE 2026 · Accepted (Paper ThCT6.3) · First-Author Paper**

## Problem Formulation

In vision-guided robotic manipulation, fixed external cameras and single-arm eye-in-hand configurations suffer from a fundamental geometric limitation: as the gripper approaches the target object for terminal alignment, the manipulator structure or gripper fingers inevitably cast an **occlusion cone ($\Omega_{\text{occ}}$)** over the target. Losing visual feedback during the final centimeters of grasping degrades closed-loop accuracy under calibration error or target perturbation.

## Technical Approach

This work introduces a **dual-arm active observation and relative visual servoing framework** that decouples viewpoint control from manipulation execution while coupling them in image feedback space:

1. **Two-Stage Viewpoint Strategy**: Coordinates global approach alignment (Stage I) with terminal co-visibility optimization (Stage II), positioning an active RGB-D camera arm to maintain simultaneous observation of both the target object and the grasping gripper.
2. **Target–Gripper Relative Visual Servoing**: Formulates closed-loop control directly on the relative image-space error $\mathbf{e}_{\text{rel}}(t) = \mathbf{s}_{\text{target}}(t) - \mathbf{s}_{\text{gripper}}(t)$, reducing sensitivity to extrinsic camera-to-base calibration drift.
3. **Occlusion-Triggered Viewpoint Exploration**: Continuously monitors visual feedback quality and actively repositions the camera arm along collision-free viewpoint candidates when self-occlusion or environmental obstruction arises.

## Publication

**Active Observation for Robust Visual Servoing in Robotic Manipulation**  
**Zhilun Hu**, Yuqi Cheng, Yuxiang Tan, Wen-pan Li, Weiming Shen.  
*IEEE International Conference on Automation Science and Engineering (CASE)*, 2026.

[Official Conference Program · ThCT6.3](https://ras.papercept.net/conferences/scripts/rtf/CASE26_ContentListWeb_4.html) · [Publication Entry]({{ '/publication/active-observation/' | relative_url }})
