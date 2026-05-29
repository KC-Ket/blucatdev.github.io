---
layout: default
title: Home
---

{% capture home %}
<!-- Paste the home page content into the layout; content trimmed to keep file small. -->
<div id="page-home">
  <!-- HERO -->
  <section class="hero" aria-label="Introduction">
	<div class="hero-bg" aria-hidden="true"></div>
	<div class="hero-grid" aria-hidden="true"></div>
	<div class="hero-content">
	  <div>
		<p class="hero-eyebrow">Blu Cat Dev · Australia</p>
		<h1 class="hero-title">Games &amp;<br><em class="accent-ember">stories</em> that<br><span class="accent-cyan">linger.</span></h1>
		<p class="hero-sub">Indie game developer and writer, making things part-time from Newcastle. Crafting worlds in Unity, telling stories in prose and code.</p>
		<div class="hero-ctas">
		  <a class="btn btn-primary" href="/games/">See My Games</a>
		  <a class="btn btn-ember" href="/writing/">Read My Writing</a>
		</div>
	  </div>
	  <div class="hero-visual" aria-hidden="true">
		<div class="hero-card">
		  <p class="hero-card-label">Featured Game</p>
		  <p class="hero-card-title">[Current WIP Title]</p>
		  <p class="hero-card-desc">A short evocative description of your current game-in-progress.</p>
		  <span class="tag tag-wip">In Development</span>
		</div>
	  </div>
	</div>
  </section>
</div>
{% endcapture %}

{{ home }}
