<template>
    <aside>
        <div class="overview">
            <a id="overview_basics" href="#Grundlegende_Tags">Basics</a><br>
            <a id="overview_sonderzeichen" href="#Sonderzeichen">Sonderzeichen</a>
        </div>
    </aside>
    
    <article>
        <div class="container">
            <h1>Text</h1>
            <section class="basics">
            <h2 id="Grundlegende_Tags">Grundlegende Tags</h2>
            <table>
                <tr>
                    <th>Tag</th>
                    <th>Beschreibung</th>
                </tr>
                <tr>                    
                    <td><b>&lt;h1&gt;</b></td>
                    <td>Dieser Tag erzeugt eine &Uuml;berschrift dabei unterscheidet man unter 6 &Uuml;berschriftsebenen. &lt;h1&gt; , &lt;h2&gt; ... &lt;h6&gt;</td>
                </tr>
                <tr>
                    <td><b>&lt;b&gt;</b></td>
                    <td>b=&#34;Bold&#34;, Fettgedruckt</td>
                </tr>
                <tr>
                    <td><b>&lt;i&gt;</b></td>
                    <td>Kursiv</td>
                </tr>
                <tr>
                    <td><b>&lt;code&gt;</b></td>
                    <td>Mit diesem Tag kann man Code angeben</td>
                </tr>
                <tr>
                    <td><b>&lt;br&gt;</b></td>
                    <td>br=&#34;break&#34;, Zeilenumbruch</td>
                </tr>
                <tr>
                    <td><b>&lt;p&gt;</b></td>
                    <td>p=&#34;paragraph&#34;, Absatz</td>
                </tr>
            </table>

            <br/>
            </section>
            <div class="sonderzeichen">
            <h2 id="Sonderzeichen">Sonderzeichen</h2>

            <!--Sonderzeichen ausführlicher beschreiben-->

            <p>Um im HTML-Code die unten gennanten Sonderzeichen zu benutzten, muss mann die HTML-Begriffe daf&uuml;r nehmen. Das hat den Grund da in der Programmierung auch diese Sonderzeichen benutzt werden und um das diese der Compiler sie nicht falsch versteht, muss unterschieden werden.</p>
            <table>
                <tr>
                    <th>Sonderzeichen</th>
                    <th>HTML-Schreibweise</th>
                </tr>
                <tr>
                    <td><b>&Auml;</b></td>
                    <td>&amp;Auml;</td>
                </tr>
                <tr>
                    <td><b>&auml;</b></td>
                    <td>&amp;auml;</td>
                </tr>
                <tr>
                    <td><b>&Ouml;</b></td>
                    <td>&amp;Ouml;</td>
                </tr>
                <tr>
                    <td><b>&ouml;</b></td>
                    <td>&amp;ouml;</td>
                </tr>
                <tr>
                    <td><b>&Uuml;</b></td>
                    <td>&amp;Uuml;</td>
                </tr>
                <tr>
                    <td><b>&uuml;</b></td>
                    <td>&amp;uuml;</td>
                </tr>
                <tr>
                    <td><b>&szlig;</b></td>
                    <td>&amp;szlig;</td>
                </tr>
                <tr>
                    <td><b>&lt;</b></td>
                    <td>&amp;lt;</td>
                </tr>
                <tr>
                    <td><b>&gt;</b></td>
                    <td> &amp;gt;</td>
                </tr>
                <tr>
                    <td><b>&amp;</b></td>
                    <td>&amp;amp</td>
                </tr>
                <tr>
                    <td><b>&euro;</b></td>
                    <td>&amp;euro;</td>
                </tr>
            </table>
            
            <p><span style="color:red;"><b>Achtung:</b></span> Meist schleicht sich bei den HTML Bezeichungen f&uuml;r diese Sonderzeichen ein Fehler ein. <br> H&auml;fig kann man schnell den Strich-Punkt(Semicolon) am ende vergessen oder auch das &amp; vorne.</p>
            </div>
            
        </div>
    </article>
</template>