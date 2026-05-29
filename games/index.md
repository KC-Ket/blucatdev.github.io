---
layout: default
title: Games
---

<div class="page-header">
  <div class="section-label">Portfolio</div>
  <h1>Games</h1>
  <p>Released titles, works in progress, and game jam experiments.</p>
</div>

<section class="section">
  <div class="games-grid">
	{% for game in site.games %}
	<article class="game-card">
	  <div class="game-card-thumb placeholder-1">
		<span aria-hidden="true">🎮</span>
		<span class="game-card-thumb-label">{{ game.status | default: 'Released' }}</span>
	  </div>
	  <div class="game-card-body">
		<p class="game-card-genre">{{ game.genre }}</p>
		<h3 class="game-card-title"><a href="{{ game.url }}">{{ game.title }}</a></h3>
		<p class="game-card-desc">{{ game.excerpt }}</p>
	  </div>
	  <div class="game-card-footer">
		<div class="platform-pills">
		  {% for p in game.platforms %}<span class="platform-pill">{{ p }}</span>{% endfor %}
		</div>
		<span class="tag tag-silver">{{ game.status | default: 'Released' }}</span>
	  </div>
	</article>
	{% endfor %}
  </div>
</section>
