<script context="module">
  export const meta = {
    title: 'Editor',
    component: Editor
  }
</script>

<script>
  import { Story } from '@storybook/addon-svelte-csf';
  import Editor from '../main/component/Editor.svelte';

  const apiKey = 'b1g4d59rwwqxx1vj7mci23rjj8ubgb46i4xsio6ieig6fkps';
  const content = `
<h2 style="text-align: center;">
TinyMCE provides a <span style="text-decoration: underline;">full-featured</span> rich text editing experience, and a featherweight download.
</h2>
<p style="text-align: center;">
<strong><span style="font-size: 14pt;"><span style="color: #7e8c8d; font-weight: 600;">No matter what you're building, TinyMCE has got you covered.</span></span></strong>
</p>`.trim();

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
  const controls = { channel: '7', conf: { plugins: 'help' } }
</script>

<Story name="Iframe" args={{ ...controls, inline: false }} let:args>
  <Editor {apiKey} {value} {...args}/>
</Story>

<Story name="Inline" args={{ ...controls, inline: true }} let:args>
  <div style="padding-top:100px;">
    <Editor {apiKey} {value} {...args} />
  </div>
</Story>

<Story name="Value binding" args={controls} let:args>
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
    <button on:click={toggleReadonly}>{#if readonly}Not Readonly{:else}Readonly{/if}</button>
    <Editor {apiKey} {disabled} {readonly} {value} {...args}/>
  </div>
</Story>
