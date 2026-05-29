---
layout: default
title: Poems
---

<div class="page-header">
  <div class="section-label">Words</div>
  <h1>Poetry</h1>
  <p>Selected poems — personal collection and published work.</p>
</div>

<section class="section">
  <div class="writing-list">
	{% for poem in site.poems %}
	<div class="writing-item">
	  <div>
		<p class="writing-item-title"><a href="{{ poem.url }}">{{ poem.title }}</a></p>
		<p class="writing-item-desc">{{ poem.excerpt }}</p>
	  </div>
	  <span class="writing-item-meta">{{ poem.tags | join: ', ' }}</span>
	</div>
	{% endfor %}
  </div>
</section>
