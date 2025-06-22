import { HfInference } from "@huggingface/inference";

const HF_TOKEN: string = "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";


export const inference: HfInference = new HfInference(HF_TOKEN);
