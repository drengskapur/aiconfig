import { PromptSchema } from "../../utils/promptUtils";

export const HuggingFaceTextTranslationParserPromptSchema: PromptSchema = {
  // See https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/inference/_client.py#L1704
  // for supported params.
  // The settings below are supported settings specified in the HuggingFaceTextTranslationParser
  // refine_completion_params implementation.
  input: {
    type: "string",
  },
  model_settings: {
    type: "object",
    properties: {
      model: {
        type: "string",
        description: `Hugging Face model to use`,
      },
      src_lang: {
        type: "string",
        description: `The source language of the text to translate, if the model supports multiple languages. 
        Must be in locale format supported by the model (e.g. en_XX, fr_XX, etc.)`,
      },
      tgt_lang: {
        type: "string",
        description: `The target language of the translation, if the model supports multiple languages. 
        Must be in locale format supported by the model (e.g. en_XX, fr_XX, etc.)`,
      },
    },
  },
};
