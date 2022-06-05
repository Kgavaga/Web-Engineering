<template>        
    <aside>
        <div class="overview">
            <a href="#ul">Ungeordnete Liste</a><br>
            <a href="#ol">Geordnete Liste</a><br>
            <a href="#dl">Definitionsliste</a>
        </div>
    </aside>
    
    <article>
        <div class="container">
            <!--Auf alle Tags genauer eingehen-->
            <h1>Listen</h1>
            <h2 id="ul">&lt;ul&gt;</h2>
            <p>Ungeordnete Listen sind ganz normale Listen die ihren Inhalt nicht formatieren.</p>
            <p><strong>Bsp:</strong></p>
            <h3>Hobbies:</h3>
            <ul>
                <li>Joggen</li>
                <li>Tischtennis</li>
                <li>Schach</li>
            </ul>
            <p class="code">Html Code</p>
            <code>
            &lt;h3&gt;Hobbies:&lt;/h3&gt;
            &lt;ul&gt;
                &lt;li&gt;Joggen&lt;/li&gt;
                &lt;li&gt;Tischtennis&lt;/li&gt;
                &lt;li&gt;Schach&lt;/li&gt;
            &lt;/ul&gt;
            </code>
            <h2 id="ol">&lt;ol&gt;</h2> 
            <p>Geordnete Listen sind ganz normale Listen die ihren Inhalt formatieren, das hei&szlig;t zu jedem neuen Punkt den man Aufz&auml;hlt wird zum Beispiel eine Nummerierung vorne angeh&auml;ngt.</p>
            <p><strong>Bsp:</strong></p>
            <h3>Lieblingsf&auml;cher:</h3>
            <ol>
                <li>IT-SW</li>
                <li>Mathe</li>
                <li>AIT</li>
            </ol>
            <p class="code">Html Code</p>
            <code>
            &lt;h3&gt;Lieblingsf&amp;auml;cher:&lt;/h3&gt;
            &lt;ol&gt;
                &lt;li&gt;IT-SW&lt;/li&gt;
                &lt;li&gt;Mathe&lt;/li&gt;
                &lt;li&gt;AIT&lt;/li&gt;
            &lt;/ol&gt;
            </code>

            <p>Bei beiden Listen wird <strong>&lt;li&gt;</strong> verwendet um sogenannte Items zu erstellen.<br> <b>&lt;ul&gt;</b> und <b>&lt;ol&gt;</b> sind dann die verschiedenen Listen. <br> Kleine Merkhilfe: ul = ungeordnete Liste ; ol = &#40;ge&#41;ordnete Liste</p>


            <h2 id="dl">&lt;dl&gt;</h2>  
            <p>Definitions Listen sind Listen in dennen man zu &Uuml;berpunkten, Unterpunkte hinzuf&uuml;gen kann.</p>
            <p><strong>Bsp:</strong></p>
            <h3>Sonderzeichen und Tags:</h3>	
            <dl>
                <dt>&lt;</dt>
                <dd>M&ouml;chte man ein <b>"&lt;"</b>in html schreiben so schreibt man <b>"&amp;lt;"</b></dd>
                <dt>&amp;</dt>  
                <dd>M&ouml;chte man ein <b>"&amp;"</b>in html schreiben so schreibt man <b>"&amp;amp;"</b></dd>
                <dt>&euro;</dt>   
                <dd>M&ouml;chte man ein <b>"&euro;"</b>in html schreiben so schreibt man <b>"&amp;euro;"</b></dd>
                
                <dt>&lt;h1&gt;</dt>
                <dd>Dieser <em>Tag</em> erstellt eine &Uuml;berschrift.</dd>
                <dt>&lt;b&gt;</dt>  
                <dd>In diesem <em>Tag</em> wird alles fettgedruckt geschrieben.</dd>
                <dt>&lt;i&gt;</dt>  
                <dd>Bei dem letzten <em>Tag</em> handelt es sich draum, das dieser einem erlaubt kursiv zu schreiben.</dd>
            </dl>
            <p><strong>&lt;dt&gt;</strong> Kreiert einen &Uuml;berpunkt. <br> <strong>&lt;dd&gt;</strong> Kreiert einen Unterpunkt. <br><strong>&lt;dl&gt;</strong> Ist der <em>Tag</em> f&uuml;r die Definitionsliste. Merkhilfe: dl = Definitions Liste</p>
        </div>
    </article>
</template>

<style scoped>

</style>