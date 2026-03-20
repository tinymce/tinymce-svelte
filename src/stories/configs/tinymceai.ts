const JWT_SERVER_URL = 'https://tinymce-ai-jwt.onrender.com';

export default {
  config: {
    // tinymceai_api_url: 'https://tinymceai.api.staging.tiny.cloud/',

    // REQUIRED: tinymceai_service_url — Base URL of the AI backend service
    // tinymceai_service_url: 'https://tinymceai.api.staging.tiny.cloud/',
    // tinymceai_service_url: 'https://tinymceai.api.dev.tiny.cloud/',
     tinymceai_token_provider: () => {
      return fetch(`${JWT_SERVER_URL}/jwt`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }).then(r => r.json());
    },


    // content_id — Groups conversations by document
    content_id: 'render_doc_1',

    // tinymceai_sidebar_type — 'static' | 'floating' (default: 'static')
    tinymceai_sidebar_type: 'static',

    // Model configuration
    // Available Models: auto (agent-1), gpt-5.2, gpt-5.1, gpt-5, gpt-5-mini,
    //   claude-4-5-haiku, claude-4-5-sonnet, gemini-3-pro, gemini-3-flash,
    //   gemini-2-5-flash, gpt-4.1, gpt-4.1-mini

    // tinymceai_default_model — Model ID to select by default
    tinymceai_default_model: 'auto',

    // tinymceai_allow_model_selection — Show model selection dropdown (default: true)
    tinymceai_allow_model_selection: true,

    // tinymceai_quickactions_menu — Items in the Quick Actions menu
    // Correct control IDs: ai-quickactions-chat-prompts, ai-quickactions-improve-writing,
    //   ai-quickactions-continue-writing, ai-quickactions-check-grammar,
    //   ai-quickactions-change-length, ai-quickactions-change-tone,
    //   ai-quickactions-translate, ai-quickactions-custom
    tinymceai_quickactions_menu: [
      'ai-quickactions-chat-prompts',
      'ai-quickactions-improve-writing',
      'ai-quickactions-continue-writing',
      'ai-quickactions-check-grammar',
      'ai-quickactions-change-length',
      'ai-quickactions-change-tone',
      'ai-quickactions-translate',
      'ai-quickactions-custom'
    ],

    // tinymceai_quickactions_chat_prompts — Items in the "Chat commands" sub-menu
    // Correct control IDs: ai-chat-explain, ai-chat-summarize, ai-chat-highlight-key-points
    tinymceai_quickactions_chat_prompts: [
      'ai-chat-explain',
      'ai-chat-summarize',
      'ai-chat-highlight-key-points'
    ],

    // tinymceai_quickactions_change_tone_menu — Items in the "Change tone" sub-menu
    // Correct control IDs: ai-quickactions-tone-casual, ai-quickactions-tone-direct,
    //   ai-quickactions-tone-friendly, ai-quickactions-tone-confident, ai-quickactions-tone-professional
    tinymceai_quickactions_change_tone_menu: [
      'ai-quickactions-tone-casual',
      'ai-quickactions-tone-direct',
      'ai-quickactions-tone-friendly',
      'ai-quickactions-tone-confident',
      'ai-quickactions-tone-professional'
    ],

    // tinymceai_languages — Languages in the "Translate" sub-menu
    // Each item: { title: string, language: string }
    tinymceai_languages: [
      { title: 'English', language: 'english' },
      { title: 'Chinese (Simplified)', language: 'chinese' },
      { title: 'Spanish', language: 'spanish' },
      { title: 'German', language: 'german' },
      { title: 'Japanese', language: 'japanese' },
      { title: 'Portuguese', language: 'portuguese' },
      { title: 'Korean', language: 'korean' },
      { title: 'Italian', language: 'italian' },
      { title: 'Russian', language: 'russian' },
      { title: 'French', language: 'french' }
    ],

    // tinymceai_quickactions_custom — Custom commands in the "Other" sub-menu
    // Chat type: { type: 'chat', title: string, prompt: string }
    // Action type: { type: 'action', title: string, prompt: string, model: string }
    tinymceai_quickactions_custom: [
      {
        type: 'chat',
        title: 'Generate Outline',
        prompt: 'Create a detailed outline for the selected content'
      },
      {
        type: 'action',
        title: 'Convert to Table',
        prompt: 'Convert this data into an HTML table',
        model: 'gpt-4.1'
      },
      {
        type: 'chat',
        title: 'Explain Like I\'m 5',
        prompt: 'Explain the selected content as if I am a 5 year old child'
      }
    ],

    // tinymceai_chat_welcome_message — Custom HTML welcome message in chat sidebar
    tinymceai_chat_welcome_message: '<p><strong>Welcome to AI Chat!</strong></p><p>I can help you write, edit, review, and brainstorm. Ask me anything or use the quick actions above.</p>',

    // tinymceai_chat_fetch_sources — Provides a list of external sources users can attach
    // Returns Promise<ExternalSourcesList[]>
    tinymceai_chat_fetch_sources: () => {
      console.log('[tinymceai] tinymceai_chat_fetch_sources called');
      return Promise.resolve([
        {
          label: 'Sample Documents',
          icon: 'document-properties',
          sources: [
            { label: 'Company Guidelines', id: 'doc-guidelines', type: 'web-resource' },
            { label: 'Product Roadmap', id: 'doc-roadmap', type: 'file' },
            { label: 'FAQ Document', id: 'doc-faq', type: 'web-resource' }
          ]
        }
      ]);
    },

    // tinymceai_chat_fetch_source — Fetches a specific external source by ID
    // Returns Promise<ExternalContextSource> — { type: 'file', file: File } or { type: 'web-resource', url: string }
    tinymceai_chat_fetch_source: (id: string) => {
      console.log('[tinymceai] tinymceai_chat_fetch_source called with id:', id);
      if (id === 'doc-guidelines') {
        return Promise.resolve({ type: 'web-resource', url: 'https://www.tiny.cloud' });
      } else if (id === 'doc-roadmap') {
        const blob = new Blob(['Sample roadmap content for testing'], { type: 'text/plain' });
        const file = new File([blob], 'roadmap.txt', { type: 'text/plain' });
        return Promise.resolve({ type: 'file', file: file });
      } else {
        return Promise.resolve({ type: 'web-resource', url: 'https://www.tiny.cloud/docs' });
      }
    },
  },
  toolbar: 'tinymceai-chat tinymceai-review tinymceai-quickactions',
  name: 'tinymceai',
}
