---
layout: page
permalink: /talk/
title: Talk
description: Slides, related work and how to get in touch.
nav: true
nav_order: 1

talk:
  title: "Same patient, same evidence, different treatment:"
  subtitle: Explaining variation and equipoise in perioperative care
  event: tech4health CDT conference
  location: London
  date: Wednesday 4 November 2026
  # Add a short abstract here and it will appear on the page.
  abstract:
  # Add a link (e.g. /assets/pdf/talk_slides.pdf) once the slides are ready.
  slides:

related:
  - title: Tonsillectomy
    href: /projects/tonsillectomy/
    text: Variation in analgesic practice for tonsillectomy at UCLH.
  - title: MHRA report
    href: /projects/mr_opioids/
    text: Rapid analysis of modified-release opioid prescribing after surgery.
  - title: Opioid burden metrics
    href: /projects/ome_metrics/
    text: How total opioid burden is measured, and the bias it can introduce.
---

<div class="talk-hero">
  <p class="eyebrow">{{ page.talk.event }}</p>
  <h2 class="talk-title">{{ page.talk.title }}<br><em>{{ page.talk.subtitle }}</em></h2>
  <dl class="talk-meta">
    <div><dt>Date</dt><dd>{{ page.talk.date }}</dd></div>
    <div><dt>Venue</dt><dd>{{ page.talk.location }}</dd></div>
    <div><dt>Speaker</dt><dd>Dylan Whitaker</dd></div>
  </dl>
  {% if page.talk.slides %}
    <a class="btn-lux btn-lux-solid" href="{{ page.talk.slides | relative_url }}">Download slides</a>
  {% endif %}
</div>

{% if page.talk.abstract %}

<section class="home-section">
  <h2 class="section-label">Abstract</h2>
  <p class="lead-prose">{{ page.talk.abstract }}</p>
</section>
{% endif %}

<section class="home-section">
  <h2 class="section-label">Related work</h2>
  <div class="related-grid">
    {% for item in page.related %}
      <a class="related-card" href="{{ item.href | relative_url }}">
        <span class="related-title">{{ item.title }}</span>
        <span class="related-text">{{ item.text }}</span>
        <span class="callout-link">Read more &rarr;</span>
      </a>
    {% endfor %}
  </div>
</section>

<section class="home-section">
  <h2 class="section-label">Get in touch</h2>
  <p>Thank you for coming to the talk. I would love to hear from you: {{ site.contact_note | remove: "Best reached via email: " | strip | prepend: "email me at " }}, or browse my <a href="{{ '/publications/' | relative_url }}">publications</a> and <a href="{{ '/assets/pdf/academic_cv.pdf' | relative_url }}">CV</a>.</p>
</section>
