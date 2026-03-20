// import { fetchEventSource } from '@sentool/fetch-event-source';
import { fetchEventSource } from '@microsoft/fetch-event-source';

// const ai_request_backup = (request: any, respondWith: any) => {
//   respondWith.stream((signal, streamMessage) => {
//     // Adds each previous query and response as individual messages
//     const conversation = request.thread.flatMap((event) => {
//       if (event.response) {
//         return [
//           { role: 'user', content: event.request.query },
//           { role: 'assistant', content: event.response.data }
//         ];
//       } else {
//         return [];
//       }
//     });

//     // System messages provided by the plugin to format the output as HTML content.
//     const systemMessages = request.system.map((content) => ({
//       role: 'system',
//       content
//     }));

//     // Forms the new query sent to the API
//     const content = request.context.length === 0 || conversation.length > 0
//       ? request.query
//       : `Question: ${request.query} Context: """${request.context}"""`;

//     const messages = [
//       ...conversation,
//       ...systemMessages,
//       { role: 'user', content }
//     ];

//     let hasHead = false;
//     let markdownHead = "";

//     const hasMarkdown = (message) => {
//       if (message.includes("`") && markdownHead !== "```") {
//         const numBackticks = message.split("`").length - 1;
//         markdownHead += "`".repeat(numBackticks);
//         if (hasHead && markdownHead === "```") {
//           markdownHead = "";
//           hasHead = false;
//         }
//         return true;
//       } else if (message.includes("html") && markdownHead === "```") {
//         markdownHead = "";
//         hasHead = true;
//         return true;
//       }
//       return false;
//     };

//     const requestBody = {
//       model: 'gpt-4o',
//       temperature: 0.7,
//       max_tokens: 4000,
//       messages,
//       stream: true
//     };

//     const openAiOptions = {
//       signal,
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(requestBody)
//     };

//     const onopen = async (response) => {
//       if (response) {
//         const contentType = response.headers.get('content-type');
//         if (response.ok && contentType?.includes('text/event-stream')) {
//           return;
//         } else if (contentType?.includes('application/json')) {
//           const data = await response.json();
//           if (data.error) {
//             throw new Error(`${data.error.type}: ${data.error.message}`);
//           }
//         }
//       } else {
//         throw new Error('Failed to communicate with the ChatGPT API');
//       }
//     };

//     // This function passes each new message into the plugin via the `streamMessage` callback.
//     const onmessage = (ev) => {
//       const data = ev.data;
//       if (data !== '[DONE]') {
//         const parsedData = JSON.parse(data);
//         const firstChoice = parsedData?.choices[0];
//         const message = firstChoice?.delta?.content;
//         if (message && message !== "") {
//           if (!hasMarkdown(message)) {
//             streamMessage(message);
//           }
//         }
//       }
//     };

//     const onerror = (error) => {
//       // Stop operation and do not retry by the fetch-event-source
//       console.log('an error', { error })
//       console.trace();
//       throw error;
//     };

//     return fetchEventSource('https://openai-dev-proxy.tiny.work/v1/chat/completions', {
//       ...openAiOptions,
//       openWhenHidden: true,
//       parseJson: false,
//       onopen,
//       onmessage,
//       onerror,
//     }
//     ).catch(onerror);
//   });
// };


const ai_request = (request: any, respondWith: any) => {
  respondWith.stream((signal: any, streamMessage: any) => {
    // Adds each previous query and response as individual messages
    const conversation = request.thread.flatMap((event: any) => {
      if (event.response) {
        return [
          { role: 'user', content: event.request.query },
          { role: 'assistant', content: event.response.data }
        ];
      } else {
        return [];
      }
    });

    // System messages provided by the plugin to format the output as HTML content.
    const systemMessages = request.system.map((content: string) => ({
      role: 'system',
      content
    }));

    // Forms the new query sent to the API
    const content = request.context.length === 0 || conversation.length > 0
      ? request.query
      : `Question: ${request.query} Context: """${request.context}"""`;

    const messages = [
      ...conversation,
      ...systemMessages,
      { role: 'user', content }
    ];

    let hasHead = false;
    let markdownHead = "";

    const hasMarkdown = (message: string) => {
      if (message.includes("`") && markdownHead !== "```") {
      const numBackticks = message.split("`").length - 1;
      markdownHead += "`".repeat(numBackticks);
      if (hasHead && markdownHead === "```") {
        markdownHead = "";
        hasHead = false;
      }
      return true;
      } else if (message.includes("html") && markdownHead === "```") {
      markdownHead = "";
      hasHead = true;
      return true;
      }
      return false;
    };

    const requestBody = {
      model: 'gpt-4o',
      temperature: 0.7,
      max_tokens: 4000,
      messages,
      stream: true
    };

    const openAiOptions = {
      signal,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    };

    const onopen = async (response: any) => {
      if (response) {
        const contentType = response.headers.get('content-type');
        if (response.ok && contentType?.includes('text/event-stream')) {
          return;
        } else if (contentType?.includes('application/json')) {
          const data = await response.json();
          if (data.error) {
            throw new Error(`${data.error.type}: ${data.error.message}`);
          }
        }
      } else {
        throw new Error('Failed to communicate with the ChatGPT API');
      }
    };

    // This function passes each new message into the plugin via the `streamMessage` callback.
    const onmessage = (ev: any) => {
      const data = ev.data;
      if (data !== '[DONE]') {
        const parsedData = JSON.parse(data);
        const firstChoice = parsedData?.choices[0];
        const message = firstChoice?.delta?.content;
        if (message && message !== "") {
          if (!hasMarkdown(message)) {
            streamMessage(message);
          }
        }
      }
    };

    const onerror = (error: any) => {
      // Stop operation and do not retry by the fetch-event-source
      console.log('an error', { error })
      console.trace();
      throw error;
    };

    return fetchEventSource('https://openai-dev-proxy.tiny.work/v1/chat/completions', {
          ...openAiOptions,
          openWhenHidden: true,
          onopen,
          onmessage,
          onerror,
        }
    ).catch(onerror);
  });
};


export default {
  name: 'ai',
  config: {
    ai_request
  }
};
