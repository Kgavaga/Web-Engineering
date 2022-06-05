<template>
    <aside>
        <div class="overview">
            <a href="#a">&lt;a&gt;</a><br>
            <a href="#Weitere_Attribute">Weitere Attribute</a><br>
            <a href="#Anker">Anker</a>
        </div>
    </aside>
    
    <article>
        <div class="container">
            <h1 title="I'm at the beginning of this page." id="Anfang">Links</h1>
            <h2 id="a">&lt;a&gt;</h2>

            <p><strong>Bsp:</strong></p>
            <a href="https://www.minecraft.net/">Minecraft</a>
            <p class="code">Html Code</p>
            <code>
            &lt;a href="https://www.minecraft.net/"&gt;Minecraft&lt;/a&gt;
            </code>
            <p>Um einen einfachen Link zu erstellen brauch man nur den Tag: <b>&lt;a&gt;</b> und ein Attribut, dass <b>href</b> Attribut wo man die vollst&auml;ndige Adresse der zu besuchenden Webseite angibt.</p>
            
            <h2>URI</h2>
            <img src="../assets/URI.png" style="width: 30vh">
            <p>Wie man hier an dieser Grafik erkennen kann ist <b>URI</b> die Kombination aus der <b>URL</b> und der <b>URN</b>. <br> Die <b>URL</b> ist der Ort und die <b>URN</b> sagt aus um wenn es get, sozusagen also das Item.</p>
            
            
            <h2 id="Weitere_Attribute">Weitere Attribute</h2>

            <h3>hreflang</h3>
            <p>Gibt die Sprache des Linkziels an.</p>
            <p><strong>Bsp:</strong></p>
            <code>
            &lt;a href="https://minecraft.net/de-de/" hreflang="de"&gt;Minecraft&lt;/a&gt;
            </code>
            <h3>rel</h3>
            <p>Damit gibt man an welcher Bezug der folgende Link zum Inhalt hat.</p>
            <p><strong>Bsp:</strong></p>
            <code>
            &lt;a href="https://minecraft.net/de-de/" rel="video-spiel"&gt;Minecraft&lt;/a&gt;
            </code>
            <h3>tabindex</h3>
            <p>Gibt dem Nutzer die Option die ganzen Links auch nur durch den Tabulator zu erreichen.</p>
            <p><strong>Bsp:</strong></p>
            <a href="#Nummer_1" tabindex="1">Nummer 1</a><br>
            <a href="#Nummer_3" tabindex="3">Nummer 3</a><br>
            <a href="#Nummer_2" tabindex="2">Nummer 2</a><br>
            <p class="code">Html Code</p>
            <code>
            &lt;a href="#Nummer_1" tabindex="1"&gt;Nummer 1&lt;/a&gt;
            &lt;a href="#Nummer_3" tabindex="3"&gt;Nummer 3&lt;/a&gt;
            &lt;a href="#Nummer_2" tabindex="2"&gt;Nummer 2&lt;/a&gt;
            </code>
            <h3 id="targetPosition">target</h3>
            <p>Mit dem Attribut kann der Programmierer bestimmen wie er die neue Webseite anzeigen lassen will. <br>Dabei kann mann zwischen 4 Varianten unterscheiden.</p>
            <a href="#targetPosition" target="_self">_self</a><br>
            <a href="#targetPosition" target="_blank">_blank</a><br>
            <a href="#targetPosition" target="_parent">_parent</a><br>
            <a href="#targetPosition" target="_top">_top</a>
            <p class="code">Html Code</p>
            <code>
            &lt;a href="#targetPosition" target="_self"&gt;_self&lt;/a&gt;
            &lt;a href="#targetPosition" target="_blank"&gt;_blank&lt;/a&gt;
            &lt;a href="#targetPosition" target="_parent"&gt;_parent&lt;/a&gt;
            &lt;a href="#targetPosition" target="_top"&gt;_top&lt;/a&gt;
            </code>
            <h3>title</h3>
            <p>Verweilt der Benutzer einen Moment &uuml;ber diesem Link so bekommt er den Text im title-Attribut zu sehen.</p>
            <p><strong>Bsp:</strong></p>
            <a href="https://minecraft.net/de-de/" title="I'm a link and I like to be clicked.">Beispiel</a>
            <p class="code">Html Code</p>
            <code>
            &lt;a href="https://minecraft.net/de-de/" title="I'm a link and I like to be clicked."&gt;Beispiel&lt;/a&gt;
            </code>

            <h2 id="Anker">Anker</h2>
            <p><strong>Bsp:</strong></p>
            <a href="#Anfang">zum Anfang</a>
            <p class="code">Html Code</p>
            <code>
            &lt;h1 id="Anfang"&gt;Links&lt;/h1&gt;
            &lt;.../&gt;
            &lt;a href="#Anfang"&gt;zum Anfang&lt;/a&gt;
            </code>
            <p>Das jeweilige Objekt zu dem man springen m&ouml;chte brauch ein <b>id</b> Attribut, diese Atribut ist daf&uuml;r da um Objekten wie eine &Uuml;berschrift, einen Namen zu geben. <br>Hier im Beispiel ist es "<i>Anfang</i>". M&ouml;chte man jetzt mit einem Link da hin springen, gibt man beim <b>href</b> Attribut den Namen mit einer vorne angeh&auml;ngten Raute an.</p>
        </div>
    </article>
</template>