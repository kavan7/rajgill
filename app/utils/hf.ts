import { HfInference } from "@huggingface/inference";

// Properly access environment variable using process.env.VARIABLE_NAME
const HF_TOKEN: string = process.env.HUGGINGFACE as string;

export const inference: HfInference = new HfInference(HF_TOKEN);
