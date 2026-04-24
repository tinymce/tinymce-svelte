import type { Editor, TinyMCE } from "tinymce";

export const validEvents = [
  'Activate',
  'AddUndo',
  'BeforeAddUndo',
  'BeforeExecCommand',
  'BeforeGetContent',
  'BeforeRenderUI',
  'BeforeSetContent',
  'BeforePaste',
  'Blur',
  'Change',
  'ClearUndos',
  'Click',
  'CommentChange',
  'CompositionEnd',
  'CompositionStart',
  'CompositionUpdate',
  'ContextMenu',
  'Copy',
  'Cut',
  'Dblclick',
  'Deactivate',
  'Dirty',
  'Drag',
  'DragDrop',
  'DragEnd',
  'DragGesture',
  'DragOver',
  'Drop',
  'ExecCommand',
  'Focus',
  'FocusIn',
  'FocusOut',
  'GetContent',
  'Hide',
  'Init',
  'Input',
  'KeyDown',
  'KeyPress',
  'KeyUp',
  'LoadContent',
  'MouseDown',
  'MouseEnter',
  'MouseLeave',
  'MouseMove',
  'MouseOut',
  'MouseOver',
  'MouseUp',
  'NodeChange',
  'ObjectResizeStart',
  'ObjectResized',
  'ObjectSelected',
  'Paste',
  'PostProcess',
  'PostRender',
  'PreProcess',
  'ProgressState',
  'Redo',
  'Remove',
  'Reset',
  'ResizeEditor',
  'SaveContent',
  'SelectionChange',
  'SetAttrib',
  'SetContent',
  'Show',
  'Submit',
  'Undo',
  'VisualAid' ] as const;

export type ValidEventTypes = Lowercase<typeof validEvents[number]>;
export type EventHandlers = {
  [K in ValidEventTypes]: (event: any, editor: TinyMCE) => void;
}

export const bindHandlers = (editor: Editor, eventHandlers: Partial<EventHandlers>) => {
  validEvents.forEach( (eventName) => {
    editor.on(eventName, (e) => {
      eventHandlers[eventName.toLowerCase()]?.(e, editor);
    });
})};


export const injectTiny = (doc, url, cb) => {
  const script = doc.createElement('script');
  script.referrerPolicy = 'origin';
  script.type = 'application/javascript';
  script.src = url;
  script.onload = cb;
  if (doc.head) {
    doc.head.appendChild(script);
  }
};