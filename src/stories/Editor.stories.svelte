<script context="module">
  export const meta = {
    title: 'Editor',
    component: Editor
  }
</script>

<script>
  import { Story } from '@storybook/addon-svelte-csf';
  import Editor from '../main/component/Editor.svelte';
  import { generateConfig } from './configs/config';

  const apiKey = 'prsghhxax677rv082a1zj9b7cgjuoaqysf7h8ayxi5ao43ha';
  const content = `
<h1 id="mcetoc_1ipdv0ulf969"></h1>
<div class="mce-toc">
  <h1>Table of Contents</h1>
  <ul>
    <li><a href="#mcetoc_1ipdv0ulf96a">Checklist</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96b">Enhanced Media Embed</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96c">Enhanced Tables</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96d">Math</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96e">Mentions</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96f">Merge Tags</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96g">Page Embed</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96h">Accordion</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96i">Anchor</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96j">Character Map</a></li>
    <li><a href="#mcetoc_1ipdvq0109q7">Code Sample</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96l">Emoticons</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96m">Image</a></li>
    <li><a href="#mcetoc_1ipdvq0109q8">Lists &amp; List Styles</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96p">Link</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96p">Media</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96q">Nonbreaking Space</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96r">Page Break</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96s">Table</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96s">GoToAnchor</a></li>
    <li><a href="#mcetoc_1it7atcveh6">Uploadcare Image</a></li>
    <li><a href="#mcetoc_1ipdvq0109q9">Content </a></li>
    <li><a href="#mcetoc_1it7aic1fgt">Extra Content</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96t">Footnotes</a></li>
  </ul>
</div>
<h1 id="mcetoc_1ipdv0ulf96a">Checklist</h1>
<ul class="tox-checklist">
  <li>One</li>
  <li>Two <ul class="tox-checklist">
      <li>Two.1</li>
      <li>Two.2</li>
    </ul>
  </li>
  <li>Three <ul class="tox-checklist">
      <li>Three.2 <ul class="tox-checklist">
          <li>Three.2.1</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
<h1 id="mcetoc_1ipdv0ulf96b">Enhanced Media Embed</h1>
<div style="max-width: 800px;" data-ephox-embed-iri="https://youtu.be/Ff6nar7Hr78?feature=shared">
  <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" src="https://www.youtube.com/embed/Ff6nar7Hr78?rel=0" scrolling="no" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowfullscreen="allowfullscreen"></iframe></div>
</div>
<p>&nbsp;</p>
<h1 id="mcetoc_1ipdv0ulf96c">Enhanced Tables</h1>
<table style="width: 50%; height: 217.031px;" border="1" data-snooker-col-series="numeric" data-snooker-locked-cols="0">
  <colgroup>
    <col style="width: 7.69936%;" />
    <col style="width: 25.6645%;" />
    <col style="width: 33.3639%;" />
    <col style="width: 33.3639%;" />
  </colgroup>
  <tbody>
    <tr style="height: 36.1719px;">
      <td contenteditable="false">1</td>
      <td>A</td>
      <td>B</td>
      <td>C</td>
    </tr>
    <tr style="height: 36.1719px;">
      <td contenteditable="false">2</td>
      <td>
        <p>Checklist Enhanced Media Embed Enhanced Tables Footnotes Math Mentions Merge Tags Page Embed Table of Contents Accordion Anchor Character Map Code Sample Emoticons Image Lists List Styles Media Nonbreaking Space Page Break Table</p>
      </td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style="height: 36.1719px;">
      <td contenteditable="false">3</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style="height: 36.1719px;">
      <td contenteditable="false">4</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>
        <p>Checklist Enhanced Media Embed Enhanced Tables Footnotes Math Mentions Merge Tags Page Embed Table of Contents Accordion Anchor Character Map Code Sample Emoticons Image Lists List Styles Media Nonbreaking Space Page Break Table</p>
      </td>
    </tr>
    <tr style="height: 36.1719px;">
      <td contenteditable="false">5</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style="height: 36.1719px;">
      <td contenteditable="false">6</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
  </tbody>
</table>
<h1 id="mcetoc_1ipdv0ulf96d">Math</h1>
<p>&nbsp;<tiny-math-inline formula="S_\delta"></tiny-math-inline>'s</p>
<p><tiny-math-inline formula="{x_{k-1}}{x_k}"></tiny-math-inline></p>
<p>&nbsp;<tiny-math-inline formula="S_{\delta_1}"></tiny-math-inline>,&nbsp;<tiny-math-inline formula="S_{\delta_2}"></tiny-math-inline>&nbsp;<tiny-math-inline formula="\displaystyle\mathop{L}_{n\doteq\infty}\delta_n=0"></tiny-math-inline></p>
<tiny-math-block formula="\mathop{L}_{n\doteq\infty} S_{\delta_n} = \int_a^b f(x)dx."></tiny-math-block>
<p><sup id="footnote_75157979611745299752311" class="mce-footnote"><a href="#footnotes_entry_75157979611745299752311">1</a></sup></p>
<tiny-math-block formula="\displaystyle \int_a^b f(x)dx =  \mathop{L}_{n\doteq\infty} \sum_{k=1}^n f(a+k\Delta x)\Delta x,  \text{ where }  \Delta x=\frac{b-a}{n}."></tiny-math-block>
<p>&nbsp;</p>
<h1 id="mcetoc_1ipdv0ulf96e">Mentions</h1>
<p><span class="mentionsmentionsmentions" style="color: green;" data-mce-mentions-id="virginiaturner">@virginiaturner</span> <span class="mentionsmentionsmentions" style="color: green;" data-mce-mentions-id="terrygreen333">@terrygreen333</span></p>
<h1 id="mcetoc_1ipdv0ulf96f">Merge Tags</h1>
<p>\${Campaign.Toc}</p>
<p>\${Current.Date}</p>
<h1 id="mcetoc_1ipdv0ulf96g">Page Embed</h1>
<div class="tiny-pageembed" style="display: inline-block; position: relative;"><iframe title="Test Title" src="https://sirca.org.au" name="Test Name" width="400" height="300" longdesc="Long Desc" scrolling="yes" sandbox=""></iframe></div>
<p>&nbsp;</p>
<h1 id="mcetoc_1ipdv0ulf96h">Accordion</h1>
<details class="mce-accordion">
  <summary>Accordion summary...new summary</summary>
  <p>Accordion body...new body</p>
  <p>matter 1</p>
  <p>matter 2</p>
  <p>matter 3</p>
  <ol>
    <li>list 1</li>
    <li>list 2</li>
    <li>list 3</li>
  </ol>
</details>
<h1 id="mcetoc_1ipdv0ulf96i"><a id="ThisisAnchor"></a>Anchor</h1>
<p>&nbsp;</p>
<h1 id="mcetoc_1ipdv0ulf96j">Character Map</h1>
<p>&piv;</p>
<h1 id="mcetoc_1ipdvq0109q7">Code Sample</h1>
<pre class="language-javascript"><code>// Sample checklist data
const checklistItems = [
  "Enhanced Media Embed",
  "Enhanced Tables",
  "Footnotes",
  "Math",
  "Mentions",
  "Merge Tags",
  "Page Embed",
  "Table of Contents",
  "Accordion",
  "Anchor",
  "Character Map",
  "Code Sample",
  "Emoticons",
  "Image",
  "Lists",
  "List Styles",
  "Media",
  "Nonbreaking Space",
  "Page Break",
  "Table"
];

// Function to display checklist items in a UL with id="checklist"
function showChecklist() {
  const ul = document.getElementById("checklist");
  ul.innerHTML = ""; // Clear existing list
  checklistItems.forEach(item =&gt; {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}</code></pre>
<h1 id="mcetoc_1ipdv0ulf96l">Emoticons</h1>
<p><img style="width: 1em; height: 1em; margin: 0 .05em 0 .1em; vertical-align: -.1em;" draggable="false" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/15.1.0/72x72/1f951.png" alt="🥑" data-emoticon="true" /> <img style="width: 1em; height: 1em; margin: 0 .05em 0 .1em; vertical-align: -.1em;" draggable="false" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/15.1.0/72x72/1f60a.png" alt="😊" data-emoticon="true" /></p>
<h1 id="mcetoc_1ipdv0ulf96m">Image</h1>
<figure class="image"><img style="border-width: 5px; border-style: solid; margin: 10px;" title="image titile 123" src="https://google.com/logos/google.jpg" alt="this is image " width="354" height="116" />
  <figcaption>Hello</figcaption>
</figure>
<p>&nbsp;</p>
<h1 id="mcetoc_1ipdvq0109q8">Lists &amp; List Styles</h1>
<h1 id="mcetoc_1ipdv0ulf96n"></h1>
<ol>
  <li>aaa<sup id="footnote_6481832211749372007241" class="mce-footnote"><a href="#footnotes_entry_6481832211749372007241">2</a></sup></li>
  <li>bbb <ol>
      <li>ccc <ol>
          <li>ddd <ol>
              <li>eee</li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
<ul>
  <li>111</li>
  <li>222 <ul>
      <li>333 <ul>
          <li style="list-style-type: none;">
            <ul>
              <li>444</li>
              <li>555 <ul>
                  <li>666</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
<ol style="list-style-type: lower-greek;">
  <li>0000 <ol style="list-style-type: lower-greek;">
      <li>1111 <ol style="list-style-type: lower-greek;">
          <li>2222 <ol style="list-style-type: lower-greek;">
              <li>333</li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
<h1 id="mcetoc_1ipdv0ulf96o"></h1>
<h1 id="mcetoc_1ipdv0ulf96p">Link</h1>
<p><a title="abc net au" href="https://abc.net.au">https://abc.net.au</a></p>
<h1 id="mcetoc_1ipdv0ulf96p">Media</h1>
<p><iframe src="https://www.youtube.com/embed/Ff6nar7Hr78?feature=shared" width="560" height="314" allowfullscreen="allowfullscreen"></iframe></p>
<h1 id="mcetoc_1ipdv0ulf96q">Nonbreaking Space</h1>
<p><span class="mce-nbsp-wrap" contenteditable="false">&nbsp;</span><span class="mce-nbsp-wrap" contenteditable="false">&nbsp;</span><span class="mce-nbsp-wrap" contenteditable="false">&nbsp;</span></p>
<h1 id="mcetoc_1ipdv0ulf96r">Page Break</h1>
<p><!-- pagebreak --></p>
<h1 id="mcetoc_1ipdv0ulf96s">Table</h1>
<table style="width: 50%; height: 75%; background-color: #f8cac6; border-color: #e03e2d; border-style: double;" border="10" cellspacing="10" cellpadding="10">
  <caption>Caption</caption>
  <colgroup>
    <col style="width: 25%;" />
    <col style="width: 25%;" />
    <col style="width: 25%;" />
    <col style="width: 25%;" />
  </colgroup>
  <tbody>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>
        <table style="width: 50%; background-color: #bfedd2; border-color: #169179;" border="20" cellspacing="20" cellpadding="20">
          <caption>Caption</caption>
          <colgroup>
            <col style="width: 33.3333%;" />
            <col style="width: 33.3333%;" />
            <col style="width: 33.3333%;" />
          </colgroup>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
  </tbody>
</table>
<h1 id="mcetoc_1ipdv0ulf96s"><a href="#ThisisAnchor">GoToAnchor</a></h1>
<h1 id="mcetoc_1it7atcveh6">Uploadcare Image</h1>
<p><span style="color: #4e5c73;">Mallorca, the jewel of the Mediterranean, is not just a place of beauty&mdash;it&rsquo;s a smart investment. With property values consistently on the rise, now is the perfect time to secure your piece of this sun-soaked paradise.&nbsp;</span></p>
<figure class="image"><img style="width: min(2048px, 100%); aspect-ratio: 2048 / 718;" src="https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/preview/" sizes="(min-width: 2048px) 2048px, 100vw" srcset="https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/resize/100x/ 100w,https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/resize/200x/ 200w,https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/resize/300x/ 300w,https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/resize/500x/ 500w,https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/resize/750x/ 750w,https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/resize/1000x/ 1000w,https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/resize/1250x/ 1250w,https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/resize/1500x/ 1500w,https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/resize/2000x/ 2000w,https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/preview/ 2048w" alt="Mallorca" />
  <figcaption>Michael Heuser on <a href="https://unsplash.com/@gum_meee">Unsplash</a></figcaption>
</figure>
<h1 id="mcetoc_1ipdvq0109q9">Content<br /><br /></h1>
<p style="font-family: Arial, sans-serif; font-size: 16px; color: #2c3e50; background-color: #f0f8ff; line-height: 1.6; text-align: justify; text-indent: 30px; letter-spacing: 0.5px; word-spacing: 1px; padding: 10px; margin: 10px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 6px rgba(0,0,0,0.1);"><strong><u><em>HTML</em></u></strong> was originally developed by <span style="color: #e74c3c; font-weight: bold; font-style: italic; text-decoration: underline dotted;">Tim Berners-Lee</span> in <span style="font-size: 18px; color: #2980b9; background-color: #eaf2f8; padding: 2px 4px; border: 1px dashed #3498db;">1990</span>. He is also known as the <span style="font-weight: bold; font-variant: small-caps; color: #8e44ad; text-shadow: 1px 1px #ccc;">father of the web</span>.</p>
<p style="font-family: 'Courier New', monospace; font-size: 15px; background-color: #fcf3cf; padding: 8px; border-left: 4px solid #f39c12; margin-left: 20px;">In <span style="color: #16a085; font-style: italic;">1996</span>, the <span style="text-transform: uppercase; color: #d35400;">World Wide Web Consortium (W3C)</span> became the authority to maintain the HTML specifications.</p>
<p style="font-style: oblique; background: linear-gradient(to right, #f9f9f9, #e0f7fa); padding: 10px;"><mark style="background-color: #ffff00; color: #000;">HTML also became an international standard (ISO) in 2000.</mark></p>
<p style="font-weight: bold; font-size: 17px; background-color: #d1f2eb; border: 1px solid #1abc9c; padding: 8px;"><span style="color: #27ae60;">HTML5</span> is the <span style="text-decoration: line-through; color: #c0392b;">latest</span> <span style="text-decoration: underline overline; background-color: #fce4ec;">version</span> of HTML. <span style="font-family: monospace; color: #34495e; background-color: #ecf0f1;">HTML5 provides a faster and more robust approach to web development.</span></p>
<p>This is a <strong>bold</strong> word.</p>
<p>This is an <em>italic</em> word.</p>
<p>This is an <u>underlined</u> word.</p>
<p>This is a <s>strikethrough</s> word.</p>
<p>This is a superscript example: E = mc<sup>2</sup></p>
<p>This is a subscript example: H<sub>2</sub>O</p>
<hr />
<hr />
<p>This is a&nbsp;<strong>bold</strong> word.</p>
<p>This is an <em>italic</em> word.</p>
<p>This is an <span style="text-decoration: underline;">underlined</span> word.</p>
<p>This is a&nbsp;<s>strikethrough</s> word.</p>
<p>This is a superscript example: E=mc<sup>2 </sup></p>
<p>This is a subscript example: H<sub>2</sub>O</p>
<h1 id="mcetoc_1it7aic1fgt">Extra Content</h1>
<p>Small Paragraph: Rich text editing has become essential in modern web applications, especially for platforms requiring user-generated content string2. Whether it's for blogs, comments, or documentation, a capable editor ensures formatting flexibility and intuitive controls string4. As demands increase for accessibility and cross-platform consistency, developers look for plugins and integrations that go beyond the basics string5 while ensuring performance remains optimized string1, especially during frequent input string3.</p>
<p>Medium Paragraph: Today's rich text editors must support more than bold and italics&mdash;features like collaborative editing, markdown conversion, and custom toolbar configurations are now expected string3. Frameworks such as TinyMCE and CKEditor provide extensible APIs string2, enabling teams to add custom buttons, event listeners, or even embed third-party tools like AI text suggestions string1. At the same time, accessibility cannot be overlooked; ARIA roles, keyboard navigation, and screen reader support must be baked into every component string5. Additionally, styling flexibility via themes or skins string4 plays a critical role in aligning with brand identity while preserving usability across devices.</p>
<p>Large Paragraph: In enterprise environments, rich text editing requirements can be highly specialized, often tied to workflows involving structured content, semantic tagging, or real-time synchronization across users string2. Editors must integrate with CMS platforms, export formats like JSON or XML string1, and enforce content constraints using schemas or validation layers. Advanced use cases might involve embedding dynamic widgets, managing multi-language input, or enabling inline commenting for collaborative review processes string5. The demand for clean, semantic output drives the need for highly configurable toolbars and plugin architectures string3 that adapt to context&mdash;whether it's editing code blocks, writing documentation, or drafting email templates. Equally important is performance: large documents should load instantly, autosave smoothly, and never lock up under load. Security concerns are also paramount, with XSS protection, sanitization, and trusted HTML output all critical for production-grade deployment. User experience is the final pillar&mdash;drag-and-drop uploads, custom placeholders, and responsive design string4 all contribute to a seamless editing experience that feels native, not bolted on.</p>
<br>
<pre>
Images:
https://tiny-playground.s3.us-east-1.amazonaws.com/imagestestdata/jpeg_small.jpeg
https://tiny-playground.s3.us-east-1.amazonaws.com/imagestestdata/jpeg_med.jpeg
https://google.com/logos/google.jpeg

Media Urls:

https://youtu.be/jqFMWNk8HR4
http://www.imdb.com/title/tt0116705/?ref_=fn_al_tt_1
https://www.instagram.com/p/BNXdWkBgDNG/
http://9gag.com/gag/avr1pRd
http://giphy.com/gifs/monkey-7C06IEsrGj4SQ
https://itunes.apple.com/au/album/sunshine-on-leith/id693789043
http://jsfiddle.net/timwienk/LgJsN/
https://twitter.com/TheAnimalVines/status/804530277607346176
https://www.youtube.com/watch?v=FPFSGfSUef4
https://youtu.be/FPFSGfSUef4
https://en.wikipedia.org/wiki/History_of_animation
https://vimeo.com/193866434
https://play.spotify.com/album/4cBfyeNYbJAmOq0sl3Hijd
</pre>
<hr />
<h1 id="mcetoc_1ipdv0ulf96t">Footnotes</h1>
<p>&nbsp;</p>
<div class="mce-footnotes">
  <hr />
  <ol>
    <li id="footnotes_entry_75157979611745299752311"><a class="mce-footnotes-backlink" href="#footnote_75157979611745299752311">^&nbsp;</a><span class="mce-footnotes-note">this is a math equation</span></li>
    <li id="footnotes_entry_6481832211749372007241"><a class="mce-footnotes-backlink" href="#footnote_6481832211749372007241">^&nbsp;</a><span class="mce-footnotes-note">This is a footnote for List</span></li>
  </ol>
</div>`.trim();

  let value = content;
  let disabled = true;
  let readonly = true;
  let text = '';

  const toggleDisabled = () => {
    disabled = !disabled;
  }
  const toggleReadonly = () => {
    readonly = !readonly;
  }
  const controls = { channel: '8', scriptSrc: 'https://cdn.staging.tiny.cloud/1/451hc4rk1hb0l77jr4loyiutfx7k9fs0decaxvfma65mwulu/tinymce/8-testing/tinymce.min.js' }
  const fullConfig = generateConfig({
    excludePlugins: ['tinydrive', 'uploadcare']
  });
</script>

<Story name="Iframe" args={{ ...controls, inline: false }} let:args>
  <Editor {apiKey} {value} { ...args } conf={ fullConfig }/>
</Story>

<Story name="Inline" args={{ ...controls, inline: true }} let:args>
  <div style="padding-top:100px;">
    <Editor {apiKey} {value} conf={ fullConfig } {...args} />
  </div>
</Story>

<!-- <Story name="Value binding" args={controls} let:args>
  <div>
    <Editor {apiKey} bind:value {...args}/>
    <div>
      {@html value}
    </div>
  </div>
</Story>

<Story name="Input binding" args={controls} let:args>
  <div>
    <Editor {apiKey} bind:value {...args}/>
    <textarea style="width:100%;height:200px" bind:value></textarea>
  </div>
</Story>

<Story name="Text binding" args={controls} let:args>
  <div>
    <Editor {apiKey} bind:value bind:text {...args}/>
    <div>{text}</div>
    <div>{@html value}</div>
    <textarea style="width:100%;height:200px" bind:value={text}></textarea>
  </div>
</Story>

<Story name="Disabling" args={controls} let:args>
  <div>
    <button on:click={toggleDisabled}>{#if disabled}Enable{:else}Disable{/if}</button>
    <Editor {apiKey} {disabled} {value} {...args}/>
  </div>
</Story>

<Story name="Readonly" args={controls} let:args>
  <div>
    <button on:click={toggleReadonly}>{#if readonly}Not Readonly{:else}Readonly{/if}</button>
    <Editor {apiKey} {readonly} {value} {...args}/>
  </div>
</Story> -->
