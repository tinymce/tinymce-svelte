# Official TinyMCE Svelte component

## About

Official Svelte component for TinyMCE, the rich text editor. It wraps TinyMCE as a Svelte `<Editor />` component. By default, it pulls TinyMCE from the Tiny Cloud CDN unless configured to use a different setup, such as self-hosting the [tinymce NPM package](https://www.npmjs.com/package/tinymce).

## Quickstart

### Cloud CDN

1. [Sign up for a Tiny Cloud account](https://www.tiny.cloud/pricing/) to receive a Tiny Cloud API key.
1. Then in your Svelte project:
    1. Run `npm install @tinymce/tinymce-svelte`
    1. Include the following code:

        ```svelte
        <script>
          import Editor from '@tinymce/tinymce-svelte';

          let value = $state('<p>Initial content</p>');
        </script>

        <h1>Official Svelte Component for TinyMCE</h1>
        <Editor
          apiKey="your-api-key"
          bind:value
          conf={{ plugins: 'lists link image table code help wordcount' }}
        />
        ```
    1. Update the `apiKey` prop on the `Editor` component to include your Tiny Cloud API key.

For more information: [Using TinyMCE with Svelte - Cloud CDN](https://www.tiny.cloud/docs/tinymce/latest/svelte-cloud/)

### Self hosted via NPM package

Using TinyMCE from NPM in a Svelte project requires a couple of extra steps. See the documentation for more information: [Using TinyMCE with Svelte - Self hosted via NPM](https://www.tiny.cloud/docs/tinymce/latest/svelte-pm/)


## Demos

For our quick demos, check out the TinyMCE Svelte [Storybook](https://tinymce.github.io/tinymce-svelte/).

## Detailed documentation

* [TinyMCE Svelte Technical Reference](https://www.tiny.cloud/docs/tinymce/latest/svelte-ref/).
* [TinyMCE Documentation](https://www.tiny.cloud/docs/tinymce/latest/).

## Version Compatibility

|`tinymce-svelte`         |Svelte         |
|---                      |---            |
|4.x                      |>= 5.x         |
|<= 3.x                   |<= 5.x  (*)    |

- (*): Svelte 5 projects can use `tinymce-svelte` 3.x because Svelte 5 still supports the old Svelte 4 syntax.


## Issues

Have you found an issue with `tinymce-svelte` or do you have a feature request? Open up an [issue](https://github.com/tinymce/tinymce-svelte/issues) and let us know or submit a [pull request](https://github.com/tinymce/tinymce-svelte/pulls). *Note: For issues concerning TinyMCE please visit the [TinyMCE repository](https://github.com/tinymce/tinymce).*

## License

`tinymce-svelte` is licensed under the MIT License. See the LICENSE.txt file for details.

Depending on use case, the TinyMCE core editor can be used under either GPL-2.0-or-later or a commercial license. See the [tinymce package](https://www.npmjs.com/package/tinymce) for details.