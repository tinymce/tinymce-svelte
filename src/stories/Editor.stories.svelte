<script lang="ts" module>
  import Editor from '../main/component/Editor.svelte';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { validEvents } from '../main/component/Utils';
  import { fn } from 'storybook/test';

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
  const { Story } = defineMeta({
    title: 'Editor',
    component: Editor,
    args: {
      ...controls,
      apiKey,
      inline: false
    }
  });
  const eventHandlers = validEvents.reduce((acc, eventName) => {
    acc[eventName.toLowerCase()] = () => {
      console.log('Handle event: ' + eventName.toLowerCase());
    };
    return acc;
  }, {})
</script>

<Story name="Iframe">
  {#snippet template(args)}
    <Editor {...args} {value} />
  {/snippet}
</Story>

<Story name="Inline" args={{ inline: true }}>
    {#snippet template(args)}
      <div style="padding-top:100px; height:400px; border:1px solid #ccciq">
        <Editor {...args} {value} />
      </div>
    {/snippet}
</Story>

<Story name="Value binding">
  {#snippet template(args)}
    <div>
      <Editor bind:value={value} {...args}/>
      <div>
         {@html value}
      </div>
    </div>
  {/snippet}
</Story>

<Story name="Input binding">
  {#snippet template(args)}
    <div>
      <Editor bind:value {...args}/>
      <textarea style="width:100%;height:200px" bind:value></textarea>
    </div>
  {/snippet}
</Story>

<Story name="Text binding" >
  {#snippet template(args)}
    <div>
      <Editor {apiKey} bind:value bind:text {...args}/>
      <div>{text}</div>
      <div>{@html value}</div>
      <textarea style="width:100%;height:200px" bind:value={text}></textarea>
    </div>
  {/snippet}
</Story>

<Story name="Disabling" args={disabled}>
    {#snippet template(args)}
    <div>
        <button onclick={toggleDisabled}>{#if disabled}Enable{:else}Disable{/if}</button>
        <Editor {...args} {disabled} {value}/>
      </div>
  {/snippet}
</Story>

<Story name="Readonly">
  {#snippet template(args)}
    <div>
      <button onclick={toggleReadonly}>{#if readonly}Not Readonly{:else}Readonly{/if}</button>
      <Editor {readonly} {value} {...args}/>
    </div>
  {/snippet}
</Story>


<Story name="Event Bindings">
  {#snippet template(args)}
    <Editor {readonly} {value} {...args} {...eventHandlers}/>
  {/snippet}
</Story>
