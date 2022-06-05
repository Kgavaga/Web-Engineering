<template>
    <aside>
            <div class="overview">
                <a href="#Allgemein">Allgemein</a><br>
                <a href="#Warum">Warum&#63;</a><br>
                <a href="#Syntax">Syntax</a><br>
                <a href="#Selektoren">Selektoren</a><br>
                <a href="#Pseudoklassen">Pseudoklassen</a><br>
                <a href="#Div_Span">&lt;div&gt;&lt;span&gt;</a><br>
                <a href="#Box_Modell">Box-Modell</a>
            </div>
        </aside>
        
        <article>
            <div class="container">
               
                <h1>CSS</h1>
                <h2 id="Allgemein">Allgemein</h2>
                <p class="test" ><b>CSS</b> steht f&uuml;r <b style="color:red">C</b>ascading <b style="color:red">S</b>tyle <b style="color:red">S</b>heets <i>(engl. f&uuml;r: mehrstufige Formatvorlagen)</i> und ist f&uuml;r das aussehen von Text und weiteren HTML-Elementen verantwortlich. </p>
                <p><b>CSS</b> kann auf drei unterschiedlichen Weisen definiert bzw. implementiert werden.</p>
                <p style="font-size: 22px;"><b>1.</b></p>
                <p style="color:#aa00bb;">Als Attribut im Tag</p>
                <p class="code">Html Code</p>
                <code>
                    &lt;p style="color:#aa00bb;"&gt;Als Attribut im Tag&lt;/p&gt;
                </code>
                <p style="font-size: 22px;"><b>2.</b></p>
                <p style="color:#aa00bb;">Als Code in einer externen CSS-Datei.</p>
                <p class="code">CSS Code</p>
                <code>
                    p {
                    color:#aa00bb;
                    }
                </code>
                <p style="font-size: 22px;"><b>3.</b></p>
                <p style="color:#aa00bb;">Als CSS Code in dem <b>&lt;style&gt;</b> Tag</p>
                <p class="code">Html Code</p>
                <code>
                    &lt;style&gt;
                    p {
                    color:#aa00bb;
                    }
                    &lt;/style&gt;
                </code>
                <p>Wenn jetzt auf den drei unterschiedlichen M&ouml;glchkeiten immer dieselbe Eigenschaft neu definiert wird, wie zum Beispiel die Farbe, wertet der Compiler es genau nach der gezeigten Rangfolge.</p>  

                <h2 id="Warum">Warum?</h2>
                <p>Durch <b>CSS</b> wird eine klare Trennlinie gezogen zwischen Inhalt und Design.<br> <b>CSS</b> ist mobil und wenn einmal ein Design veraltet, kann man es einfach ersetzten durch ein neues <b>CSS</b>-Dokument.<br> Statt das man bei jeder einzelnen &Uuml;berschrift immer wieder zum Beispiel die selbe Schriftart festlegen muss, kann mann mit <b>CSS</b> direkt alle &Uuml;berschriften ansprechen.</p>

                <h2 id="Syntax">Syntax</h2>
                <p><strong>Bsp:</strong></p>
                <p style="font-style: italic;">Ich bin kursiv</p>
                <p class="code">Html Code</p>
                <code>
                    &lt;p&gt;Ich bin kursiv&lt;/p&gt;
                </code>
                <p class="code">CSS Code</p>
                <code>
                    p {
                    font-style: italic;
                    /* Die Schriftart des Paragraphen wird auf kursiv eingestellt. */
                    } 
                </code>
                <p>Der Syntax von CSS-Code ist immer derselbe.</p>
                <code>
                    [OBJEKT] {
                    [EIGENSCHAFT]: [WERT];
                    } 
                </code>
                <p>Zuerst wird immer bestimmt um welches Objekt es sich handelt. Im Beispiel w&auml;re es alle Paragraphen &lt;p&gt;.<br> Danach macht mann eine nach innen und nach au&szlig;en zeigende geschweifte Klammer die den <b>Rumpf</b> darstellen soll.<br> In den Rumpf kommen dann die <b>Eigenschaften</b> die man ver&auml;ndern m&ouml;chte. Dabei gibt man eine bestimmte Eigenschaft an und kann dann durch einen Doppelpunkt, der Eigenschaft einen Wert hinzuf&uuml;gen. </p>
                <p style="color:red;"><b>WICHTIG:</b> In <b>CSS</b> kommt nach jeder Deklarierung einer Eigenschaft ein Strichpunkt &#40;Semicolon&#41;.</p>
                <p>Im Beispiel beim <b>CSS-Code</b> ist noch ein Kommentar enthalten. <br> Ein Kommentar ist genau das was es hei&szlig;t, es gibt dem Programmierer die M&ouml;glichkeit seinen Code zu erkl&auml;ren bzw. zu kommentieren.</p>
                <code>
                    [OBJEKT] {
                    [EIGENSCHAFT]: [WERT];
                    
                    <span style="color:red">/*</span><span style="color:green"> Das ist ein Kommentar. </span><span style="color:red">*/</span>
                    } 
                </code>
                <p>Dabei ist alles ein Kommentar was zwischen <span style="color:red">/*</span> und <span style="color:red">*/</span> steht.</p> 
                        
                <p><strong>Weiteres Bsp:</strong></p>
                <a href="#" style="color:blue; text-decoration: underline; text-decoration-color: greenyellow; font-size:23px; font: sans-serif, impact;">Hello I am a modified link!</a>
                <p class="code">Html Code</p>
                <code>
                    &lt;a href=&#34;&#35;&#34; style=&#34;color:blue; text-decoration: underline; text-decoration-color: greenyellow;
                    font-size:23px; font: sans-serif, impact;&#34;&gt;Hello I am a modified link!&lt;/a&gt;
                </code>
                <p>Wie in dem ersten Kapitel von CSS schon erwähnt kann man die Style-Definitionen auch in das HTML-Element implementieren.<br>Das sieht dann so aus, dass die einzelnen Style-Eigenschaften mit einem Strichpunkt getrennt werden.</p>
                
                <h2 id="Selektoren">Selektoren</h2>
                <p>In <b>CSS</b> ist es auch m&ouml;glich mehrere Elemente gleichzeit mit nur einer Styledefinition zu formatieren.</p>
                
                <p><strong>Bsp:</strong></p>
                <h4>&Uuml;berschrift 1</h4>
                <h4>&Uuml;berschrift 2</h4>
                <h4>&Uuml;berschrift 3</h4>
                <p class="code">Html Code</p>
                <code>
                    &lt;h4&gt;&amp;Uuml;berschrift 1&lt;/h4&gt;
                    &lt;h4&gt;&amp;Uuml;berschrift 2&lt;/h4&gt;
                    &lt;h4&gt;&amp;Uuml;berschrift 3&lt;/h4&gt;
                </code>
                <p class="code">CSS Code</p>
                <code>
                    h4 {
                    color: violet;
                    } 
                </code>
                        
                <p>Das selbe funktioniert auch mit Elemten die die selbe Id haben oder den selben Klassennamen aufweisen. Das sind dann sogenannte <b>ID- und Klassenselektoren</b>.</p>
                <p><strong>Bsp:</strong></p>
                <p id="HelloWorld">Hello</p>
                <p id="HelloWorld">World!</p>
                
                <p class="Robot">Me llamo</p>
                <p class="Robot">mR. R0boT</p>
                
                <p class="code">Html Code</p>
                <code>
                    &lt;p id=&#34;HelloWorld&#34;&gt;Hello&lt;/p&gt;
                    &lt;p id=&#34;HelloWorld&#34;&gt;World!&lt;/p&gt;
                                    
                    &lt;p class=&#34;Robot&#34;&gt;Me llamo&lt;/p&gt;
                    &lt;p class=&#34;Robot&#34;&gt;mR. R0boT&lt;/p&gt;
                </code>
                <p class="code">CSS Code</p>
                <code>
                    &#35;HelloWorld{
                        color:red;
                        text-decoration: underline;
                    }
                    
                    .Robot{
                        color: green;
                        text-decoration:overline;
                    }
                </code>
                    <p>Man erkennt ein bestimmtes Schema. Der Selektor ist in dem oberen Beispielen einmal <b>&lt;h4&gt;</b>, <b>&#35;HelloWorld</b> und <b>.Robot.</b></p>
                    <p>Um eine Schippe drauf zu legen kann man jetzt auch noch den <b>Universalselektor</b> benutzen.</p>
                    
                    <p class="code">Html Code</p>
                <code>
                &lt;&#33;Doctype html>
                &lt;html&gt;
                    &lt;body&gt;
                        &lt;h1&gt;Hello World&lt;/h1&gt;
                        &lt;p&gt;Das ist nun ein &lt;b&gt;Beispiel&lt;/b&gt; um den Einfluss vom &lt;em&gt;Universalselektor&lt;/em&gt; zu zeigen.&lt;/p&gt;
                    &lt;/body&gt;
                &lt;/html&gt;
                        </code>
                        <p class="code">CSS Code</p>
                        <code>&#42;{
                    color: aqua;
                    text-decoration:underline;
                }
                </code>
                    <p>Der <b>Universalkolektor</b> wird &uuml;ber das Sterchen &#40;&#42;&#41; aufgerufen. Es verändert alles und jenes was es auf der Webseite an Elementen gibt.</p>
                    
                    <p>Zu guter Letzt gibt es auch noch die <b>Attributselektoren</b>.</p>
                    <p><strong>Bsp:</strong></p>
                    <p title="yellow">I am yellow</p>
                    
                    <p class="code">Html Code</p>
                <code>
                    &lt;p title="yellow"&gt;I am yellow&lt;/p&gt;
                </code>
                <p class="code">CSS Code</p>
                <code>
                    p&#91;title=&#34;yellow&#34;&#93;{
                        background-color: yellow;
                    }
                </code>
                    <p>Bei den <b>Attributselektoren</b> fischt man sich ein bestimmtes Attribut aus dem Selektor. In diesem Beispiel war es zum Beispiel das <b>title</b> Attribut. <br> Vom Syntax sieht es dann so aus das man in eckigen Klammern ein Attribut bestimmt das dann jenen Wert haben soll. Wird dieser bei einem Element gefunden so bekommt es einen gelben Hintergrund.</p>
                    
                    <h2 id="Pseudoklassen">Pseudoklassen</h2>
                    
                    <p>Bei Pseudoklassen handelt es sich darum, &#34;Wenn das auf ein Element passiert, dann soll sich das Element so ver&auml;ndern.&#34;</p>
                    
                    <p><strong>Bsp:</strong></p>
                    <p><a href="#">Ich bin ein Link</a></p>
                        
                    <p class="code">Html Code</p>
                    <code>
                    &lt;p&gt;&lt;a href="#"&gt;Ich bin ein Link&lt;/a&gt;&lt;/p&gt;
                    </code>
                    <p class="code">CSS Code</p>
                    <code>
                    a:hover{
                        color: red;
                        text-decoration: underline;
                    }
                </code>
                    <p>Hier in diesem Beispiel wenn man über den Link dr&uuml;berf&auml;hrt, wechselt es zur Farbe rot und der Link ist dann auch gleichzeitig unterstrichen.</p>
                    <p>Das geht schlicht und ergreifend durch dieses Ereignis <b>:hover</b>, dass hei&szlig;t wann immer die Benutzer-Maus über dem Link <b>&#40;schwebt&#41;</b> wird der Code im Rumpf ausgeführt.</p>
                    
                    <h2 id="Div_Span">&lt;div&gt;&lt;span&gt;</h2>
                    <p>Das <b>&lt;div&gt;</b> kann man sich so vorstellen wie eine Fläche auf der alle möglichen Elemente existieren können. Zum Beispiel diese ganze Seite über CSS ist in einem <b>&lt;div&gt;</b>.</p> 
                    <p>Eine <b>&lt;span&gt;</b> hingegen ist nicht so groß wie eine <b>&lt;div&gt;</b> und ist auch eher für viel kleinere Dinge gedacht, wie zum Beispiel eine Textstelle.</p>
                    
                    <p><strong>Bsp:</strong></p>
                    <div>
                        <p>This Paragraph is in an whole new other div and even a <span style="color:red;">span</span> is here.</p>
                    </div>
                    <p class="code">Html Code</p>
                <code>
                    &lt;div&gt;
                        &lt;p&gt;This Paragraph is in an whole new other div and even a &lt;span style="color:red;"&gt;span&lt;/span&gt; is here.&lt;/p&gt;
                    &lt;/div&gt;
                </code>
                <p>Die <b>&lt;span&gt;</b> kann richtig nützlich sein wenn man gerade nur ein Wort in mitten eines Satzes zum Beispiel f&auml;rben will.</p>
                <p>Der letzt Endliche Vorteil von einer <b>&lt;div&gt;</b> zu einer ID oder einer Klasse ist, dass es sehr zu gunsten der Übersicht kommt. Man kann sich das dann so Vorstellen das man zum Beispiel ein Bereich in einem neuen Bereich aufmacht, wo man dann sich mit einem spezifischen Thema behandelt. Der nächste Bereich &#40;<b>&lt;div&gt;</b>&#41; behandelt dann wieder ein anderes Thema wo andere CSS-Definitionen gebraucht werden.</p> 
                
                <h2 id="Box_Modell">Box-Modell</h2>
                <img src="../assets/Box_Modell.png" style="width: 60vw;">
                <p>Das <b>Box-Modell</b> beschreibt um was es sich gerade bei <span style="text-decoration: underline;">Padding</span> und <span style="text-decoration: underline;">Margin</span> handelt.</p>
                <p><b>&#34;Content&#34;</b> und <b>&#34;Border&#34;</b> sind selbsterkl&auml;rend.<br> Padding beschreibt wie weit die Border vom Content entfernt ist. Margin beschreibt wie weit die komplette Border mit Content von den umgebenen Elementen und dem Seitenrand entfernt ist.</p>
            </div>
        </article>
</template>
        
<style>
    h4 {
        color:violet;
    }
    
    #HelloWorld{
        color:red;
        text-decoration: underline;
    }
    
    .Robot{
        color: green;
        text-decoration:overline;
    }
    
    p[title="yellow"]{
        background-color: yellow;
    }

</style>