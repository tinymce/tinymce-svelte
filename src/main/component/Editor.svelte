<script lang="ts" context="module">
  declare let global: { tinymce: TinyMCE }
  declare let window: Window & { tinymce: TinyMCE }

  const uuid = (prefix: string): string => {
    return prefix + '_' + Math.floor(Math.random() * 1000000000) + String(Date.now());
  };

  const createScriptLoader = () => {
    let state: {
      listeners: Array<() => void>,
      scriptId: string,
      scriptLoaded: boolean,
      injected: boolean
    } = {
      listeners: [],
      scriptId: uuid('tiny-script'),
      scriptLoaded: false,
      injected: false
    };

    const injectScript = (scriptId: string, doc: Document, url: string, cb: () => void) => {
      state.injected = true;
      const script = doc.createElement('script');
      script.referrerPolicy = 'origin';
      script.type = 'application/javascript';
      script.src = url;
      script.onload = () => { cb();}
      if (doc.head) doc.head.appendChild(script);
    };

    const load = (doc: Document, url: string, callback: () => void) => {
      if (state.scriptLoaded) {
        callback();
      } else {
        state.listeners.push(callback);
        // check we can access doc
        if (!state.injected) {
          injectScript(state.scriptId, doc, url, () => {
            state.listeners.forEach((fn) => fn());
            state.scriptLoaded = true;
          });
        }
      }
    };

    return {
      load
    }
  };
  let scriptLoader = createScriptLoader();
</script>

<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from 'svelte';
  import type { RawEditorOptions, TinyMCE, Editor as TinyMCEEditor } from 'tinymce';
  import { bindHandlers } from './Utils';
  export let id: string = uuid('tinymce-svelte'); // default values
  export let inline: boolean | undefined = undefined;
  export let disabled: boolean = false;
  export let apiKey: string = 'no-api-key';
  export let channel: string = '6';
  export let scriptSrc: string = undefined;
  export let conf: RawEditorOptions = {};
  export let modelEvents: string = 'change input undo redo';
  export let value: string = '';
  export let text: string = '';
  export let cssClass: string = 'tinymce-wrapper';
  
  let container: HTMLElement;
  let element: HTMLElement;
  let editorRef: TinyMCEEditor | null;
  let lastVal = value;
  let disablindCache = disabled;
  
  const dispatch = createEventDispatcher();
  
  $: {
    if (editorRef && lastVal !== value) {
      editorRef.setContent(value);
      text = editorRef.getContent({format: 'text'});
    }
    if (editorRef && disabled !== disablindCache) {
      disablindCache = disabled;
      if (typeof editorRef.mode?.set === 'function') {
        editorRef.mode.set(disabled ? 'readonly' : 'design');
      } else {
        interface TinyMCEEditor4 extends TinyMCEEditor {
          setMode: (input: string) => void
        }
        (editorRef as TinyMCEEditor4).setMode(disabled ? 'readonly' : 'design');
      }
    }
  }
  
  const getTinymce = (): TinyMCE | null => {
    const getSink = (): { tinymce: TinyMCE } => {
      return typeof window !== 'undefined' ? window : global;
    };
    const sink = getSink();
    return sink && sink.tinymce ? sink.tinymce : null;
  };
  
  const init = () => {
    //
    const finalInit: RawEditorOptions = {
      ...conf,
      target: element,
      inline: inline !== undefined ? inline : conf.inline !== undefined ? conf.inline : false,
      readonly: disabled,
      setup: (editor: TinyMCEEditor) => {
        editorRef = editor;
        editor.on('init', () => {
          editor.setContent(value);
          // bind model events
          editor.on(modelEvents, () => {
            lastVal = editor.getContent();
            if (lastVal !== value) {
              value = lastVal;
              text = editor.getContent({format: 'text'});
            }
          });
        });
        bindHandlers(editor, dispatch);
        if (typeof conf.setup === 'function') {
          conf.setup(editor);
        }
      },
    };
    element.style.visibility = '';
    void getTinymce().init(finalInit);
  };
  
  onMount(() => {
    if (getTinymce() !== null) {
      init();
    } else {
      const script = scriptSrc ? scriptSrc : `https://cdn.tiny.cloud/1/${apiKey}/tinymce/${channel}/tinymce.min.js`;
      scriptLoader.load(container.ownerDocument, script, () => {
        init();
      });
    }
  });

  onDestroy(() => {
    if (editorRef) {
      getTinymce()?.remove(editorRef);
    }
  });
  
</script>
<div bind:this={container} class={cssClass}>
{#if inline}
  <div id={id} bind:this={element}></div>
{:else}
  <textarea id={id} bind:this={element} style="visibility:hidden"></textarea>
{/if}
</div>