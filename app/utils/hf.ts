import { HfInference } from "@huggingface/inference";


const HF_TOKEN: string = process.env.HUGGINGFACE as string;

export const inference: HfInference = new HfInference(HF_TOKEN);