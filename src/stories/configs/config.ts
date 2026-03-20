import TinymceaiConfig from './tinymceai';
import AdvtemplateConfig from './advtemplate';
import AccordionConfig from './accordion';
import MergetagsConfig from './mergetags';
import MentionsConfig from './mentions';
import TinyCommentsConfig from './tinycomments';
import AdvlistConfig from './advlist';
import SuggestedEditConfig from './suggestededits';
import CodeSampleConfig from './codesample';
import ExportWordConfig from './exportword';
import InsertDatetimeConfig from './insertdatetime';
import AnchorConfig from './anchor';
import AutolinkConfig from './autolink';
import AutosaveConfig from './autosave';
import CharmapConfig from './charmap';
import CodeConfig from './code';
import EditimageConfig from './editimage';
import DirectionalityConfig from './directionality';
import EmoticonsConfig from './emoticons';
import FullscreenConfig from './fullscreen';
import HelpConfig from './help';
import ImageConfig from './image';
import ImportcssConfig from './importcss';
import LinkConfig from './link';
import ListsConfig from './lists';
import MediaConfig from './media';
import NonbreakingConfig from './nonbreaking';
import PagebreakConfig from './pagebreak';
import PreviewConfig from './preview';
import QuickbarsConfig from './quickbars';
import SaveConfig from './save';
import SearchreplaceConfig from './searchreplace';
import TableConfig from './table';
import VisualblocksConfig from './visualblocks';
import VisualcharsConfig from './visualchars';
import WordcountConfig from './wordcount';
import A11ycheckerConfig from './a11ychecker';
import AdvcodeConfig from './advcode';
import AdvtableConfig from './advtable';
import AutocorrectConfig from './autocorrect';
import CasechangeConfig from './casechange';
import ChecklistConfig from './checklist';
import EditimageConfig2 from './editimage2';
import ExportpdfConfig from './exportpdf';
import FootnotesConfig from './footnotes';
import FormatpainterConfig from './formatpainter';
import ImportwordConfig from './importword';
import InlinecssConfig from './inlinecss';
import LinkcheckerConfig from './linkchecker';
import MarkdownConfig from './markdown';
import MathConfig from './math';
import MediaembedConfig from './mediaembed';
import PageembedConfig from './pageembed';
import PermanentpenConfig from './permanentpen';
import PowerpasteConfig from './powerpaste';
import RevisionhistoryConfig from './revisionhistory';
import TableofcontentsConfig from './tableofcontents';
import TinymcespellcheckerConfig from './tinymcespellchecker';
import TypographyConfig from './typography';
import UploadcareConfig from './uploadcare';

const pluginsConfig: PluginConfig[] = [
  AccordionConfig,
  CodeSampleConfig,
  AdvlistConfig,
  AnchorConfig,
  AutolinkConfig,
  AutosaveConfig,
  CharmapConfig,
  CodeConfig,
  EditimageConfig,
  DirectionalityConfig,
  EmoticonsConfig,
  FullscreenConfig,
  HelpConfig,
  ImageConfig,
  ImportcssConfig,
  InsertDatetimeConfig,
  LinkConfig,
  ListsConfig,
  MediaConfig,
  NonbreakingConfig,
  PagebreakConfig,
  PreviewConfig,
  QuickbarsConfig,
  SaveConfig,
  SearchreplaceConfig,
  TableConfig,
  VisualblocksConfig,
  VisualcharsConfig,
  WordcountConfig,
  A11ycheckerConfig,
  AdvcodeConfig,
  AdvtableConfig,
  AdvtemplateConfig,
  AutocorrectConfig,
  CasechangeConfig,
  ChecklistConfig,
  EditimageConfig2,
  ExportpdfConfig,
  ExportWordConfig,
  FootnotesConfig,
  FormatpainterConfig,
  ImportwordConfig,
  InlinecssConfig,
  LinkcheckerConfig,
  MarkdownConfig,
  MathConfig,
  MediaembedConfig,
  MentionsConfig,
  MergetagsConfig,
  PageembedConfig,
  PermanentpenConfig,
  PowerpasteConfig,
  RevisionhistoryConfig,
  SuggestedEditConfig,
  TableofcontentsConfig,
  TinyCommentsConfig,
  TinymcespellcheckerConfig,
  TypographyConfig,
  UploadcareConfig,
  TinymceaiConfig,
];

interface PluginConfig <C = {}> {
  name: string;
  toolbar?: string;
  config: C;
}

interface Options {
  excludePlugins?: string[];
  overrideConfig?: {};
}

const API_URL = 'https://demouserdirectory.tiny.cloud/v1/users';

const user_id = 'james-wilson';
const basicConfig = {
  height: 600,
  mobile: {
    theme: "silver",
    contextmenu: "link image table preview",
  },
  pad_empty_with_br: true,
  help_accessibility: true,
  // TODO: Target for tinymce 8
  user_id,
  fetch_users: (userIds: string[]) =>
    Promise.all(userIds.map((userId) => fetch(`${API_URL}/${userId}`)
      .then((response) => response.json())
      .catch(() => ({ id: userId })))),
  
};

const toolbarConfig = pluginsConfig.map((plugin: PluginConfig) => plugin?.toolbar).filter(Boolean).join(' | ');
const generateConfig = ({excludePlugins, overrideConfig}: Options): any => {
  const plugins = pluginsConfig.map((p: PluginConfig) => p.name).filter((name) => !excludePlugins?.includes(name as never));
  const extractedPluginsConfig = pluginsConfig.reduce((acc, cur) => ({ ...acc, ...cur.config }), {});
  const finalConfig = {
    ...basicConfig,
    ...extractedPluginsConfig,
    ...overrideConfig
  };

  return {
    ...finalConfig,
    plugins: plugins,
    toolbar: toolbarConfig,
    height: 500
  };
}


export  {
  generateConfig
};

  
