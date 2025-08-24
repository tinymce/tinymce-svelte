<script module>
  export const meta = {
    title: 'Editor',
    component: Editor
  }
</script>

<script>
  import { Story } from '@storybook/addon-svelte-csf';
  import Editor from '../main/component/Editor.svelte';

  const apiKey = 'prsghhxax677rv082a1zj9b7cgjuoaqysf7h8ayxi5ao43ha';
  const content = `
<h2 style="text-align: center;">
TinyMCE provides a <span style="text-decoration: underline;">full-featured</span> rich text editing experience, and a featherweight download.
</h2>
<p style="text-align: center;">
<strong><span style="font-size: 14pt;"><span style="color: #7e8c8d; font-weight: 600;">No matter what you're building, TinyMCE has got you covered.</span></span></strong>
</p>`.trim();

  let value = $state(content);
  let disabled = $state(true);
  let readonly = $state(true);
  let text = $state('');

  const toggleDisabled = () => {
    disabled = !disabled;
  }
  const toggleReadonly = () => {
    readonly = !readonly;
  }
  const controls = { channel: '8' }
</script>

<Story name="Iframe" args={{ ...controls, inline: false }} >
  {#snippet children({ args })}
    <Editor {apiKey} {value} {...args}/>
  {/snippet}
</Story>

<Story name="Inline" args={{ ...controls, inline: true }} >
  {#snippet children({ args })}
    <div style="padding-top:100px;">
      <Editor {apiKey} {value} {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Value binding" args={controls} >
  {#snippet children({ args })}
    <div>
      <Editor {apiKey} bind:value {...args}/>
      <div>
        {@html value}
      </div>
    </div>
  {/snippet}
</Story>

<Story name="Input binding" args={controls} >
  {#snippet children({ args })}
    <div>
      <Editor {apiKey} bind:value {...args}/>
      <textarea style="width:100%;height:200px" bind:value></textarea>
    </div>
  {/snippet}
</Story>

<Story name="Text binding" args={controls} >
  {#snippet children({ args })}
    <div>
      <Editor {apiKey} bind:value bind:text {...args}/>
      <div>{text}</div>
      <div>{@html value}</div>
      <textarea style="width:100%;height:200px" bind:value={text}></textarea>
    </div>
  {/snippet}
</Story>

<Story name="Disabling" args={controls} >
  {#snippet children({ args })}
    <div>
      <button onclick={toggleDisabled}>{#if disabled}Enable{:else}Disable{/if}</button>
      <Editor {apiKey} {disabled} {value} {...args}/>
    </div>
  {/snippet}
</Story>

<Story name="Readonly" args={controls} >
  {#snippet children({ args })}
    <div>
      <button onclick={toggleReadonly}>{#if readonly}Not Readonly{:else}Readonly{/if}</button>
      <Editor {apiKey} {readonly} {value} {...args}/>
    </div>
  {/snippet}
</Story>
