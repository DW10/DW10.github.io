---
layout: page
permalink: /talks/
title: Talks
description: Conference talks, presentations and seminars, with slides where available.
nav: true
nav_order: 1
---

{% assign sorted_talks = site.talks | sort: 'date' | reverse %}
{% comment %} Talks stay "upcoming" until the day after they happen. Pages only update on rebuild. {% endcomment %}
{% assign cutoff = site.time | date: '%s' | plus: 0 | minus: 86400 %}

{% assign upcoming = '' | split: '' %}
{% assign past = '' | split: '' %}
{% for talk in sorted_talks %}
{% assign talk_time = talk.date | date: '%s' | plus: 0 %}
{% if talk_time >= cutoff %}
{% assign upcoming = upcoming | push: talk %}
{% else %}
{% assign past = past | push: talk %}
{% endif %}
{% endfor %}

<div class="talk-list">
  {% if upcoming.size > 0 %}
    <h2 class="section-label">Upcoming</h2>
    {% assign upcoming = upcoming | reverse %}
    {% for talk in upcoming %}
      {% include talk_item.liquid talk=talk %}
    {% endfor %}
  {% endif %}

{% assign past_by_year = past | group_by_exp: 'talk', "talk.date | date: '%Y'" %}
{% for year in past_by_year %}

<h2 class="section-label talk-year">{{ year.name }}</h2>
{% for talk in year.items %}
{% include talk_item.liquid talk=talk %}
{% endfor %}
{% endfor %}

</div>
