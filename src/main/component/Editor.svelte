<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import { bindHandlers, injectTiny } from './Utils';
  
  const uuid = (prefix: string): string => {
    return prefix + '_' + Math.floor(Math.random() * 1000000000) + String(Date.now());
  };
  export let id: string = uuid('tinymce-svelte'); // default values
  export let inline: boolean = false;
  export let disabled: boolean = false;
  export let apiKey: string = 'no-api-key';
  export let channel: string = '5';
  export let scriptSrc: string = undefined;
  export let conf: any = {};
  export let modelEvents: string = 'change input undo redo';
  export let value: string = '';
  export let text: string = '';
  
  let container: HTMLElement;
  let element: HTMLElement;
  let editorRef: any;
  
  let lastVal = '';
  let disablindCache = disabled;
  
  const dispatch = createEventDispatcher();
  
  $: {
    if (editorRef && lastVal !== value) {
      editorRef.setContent(value);
      text = editorRef.getContent({format: 'text'});
    }
    if (editorRef && disabled !== disablindCache) {
      disablindCache = disabled;
      editorRef.setMode(disabled ? 'readonly' : 'design');
    }
  }
  
  const getTinymce = () => {
    const getSink = () => {
      return typeof window !== 'undefined' ? window : global;
    };
    const sink = getSink();
    return sink && sink.tinymce ? sink.tinymce : null;
  };
  
  const init = () => {
    //
    const finalInit = {
      ...conf,
      target: element,
      inline: inline,
      readonly: disabled,
      setup: (editor: any) => {
        editorRef = editor;
        editor.on('init', (e: Event) => {
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
        // TBD: bind handlers by running dispatcher
        bindHandlers(editor, dispatch);
        if (typeof conf.setup === 'function') {
          conf.setup(editor);
        }
      },
    };
    element.style.visibility = '';
    getTinymce().init(finalInit);
  };
  
  onMount(() => {
    if (getTinymce() !== null) {
      init();
    } else {
      const script = scriptSrc ? scriptSrc : `https://cdn.tiny.cloud/1/${apiKey}/tinymce/${channel}/tinymce.min.js`;
      injectTiny(container.ownerDocument, script, () => {
        init();
      });
    }
  });
  
  </script>
  <div bind:this={container}>
  {#if inline}
    <div id={id} bind:this={element}></div>
  {:else}
    <textarea id={id} bind:this={element} style="visibility:hidden"></textarea>
  {/if}
  </div>