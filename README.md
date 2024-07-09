# Official TinyMCE Svelte component

## About

This package is a thin wrapper around [TinyMCE](https://github.com/tinymce/tinymce) to make it easier to use in a Svelte application.

* For the TinyMCE Svelte Quick Start, see: [TinyMCE Documentation - Svelte Integration](https://www.tiny.cloud/docs/tinymce/7/svelte-cloud/).
* For a self-hosted setup using TinyMCE package with TinyMCE Svelte, see: [TinyMCE Documentation - TinyMCE package with Svelte](https://www.tiny.cloud/docs/tinymce/7/svelte-pm/).
* For a self-hosted setup using TinyMCE .zip package with TinyMCE Svelte, see: [TinyMCE Documentation - TinyMCE .zip package with Svelte](https://www.tiny.cloud/docs/tinymce/7/svelte-zip/).
* For the TinyMCE Svelte Technical Reference, see: [TinyMCE Documentation - TinyMCE Svelte Technical Reference](https://www.tiny.cloud/docs/tinymce/7/svelte-ref/).
* For our quick demos, check out the TinyMCE Svelte [Storybook](https://tinymce.github.io/tinymce-svelte/).

## Quick start

### Create a Svelte App with Vite

```bash
npm create vite@5 tinymce-svelte-demo -- --template svelte-ts
cd tinymce-svelte-demo
npm install
```

### Add the Editor component

```bash
npm install @tinymce/tinymce-svelte
```

### Import the TinyMCE component

Replace the contents of `src/App.svelte` with the following code and replace `your-api-key` with your Tiny Cloud API key:

```html
<script lang="ts">
import Editor from '@tinymce/tinymce-svelte';
let conf = {
  menubar: false
}
</script>
<main>
  <h1>Hello Tiny</h1>
  <Editor
    apiKey="your-api-key"
    {conf}
  />
</main>
```

### Run the app

```bash
npm run dev
```

### Issues

Have you found an issue with tinymce-svelte or do you have a feature request? Open up an [issue](https://github.com/tinymce/tinymce-svelte/issues) and let us know or submit a [pull request](https://github.com/tinymce/tinymce-svelte/pulls). *Note: For issues concerning TinyMCE please visit the [TinyMCE repository](https://github.com/tinymce/tinymce).*
