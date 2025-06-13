import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {  voices } from "@/constants";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const configureAssistant = (voice: string, style: string) => {
  const voiceId = voices[voice as keyof typeof voices][
    style as keyof (typeof voices)[keyof typeof voices]
  ] || "sarah";

  const vapiAssistant: CreateAssistantDTO = {
    name: "Companion",
    firstMessage:
      "Hello, let's start the session. Today we'll be talking about {{topic}}.",
    transcriber: {
      provider: "deepgram",
      model: "nova-3",
      language: "en",
    },
    voice: {
      provider: "11labs",
      voiceId: voiceId,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 1,
      style: 0.5,
      useSpeakerBoost: true,
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a friendly and knowledgeable cooking assistant guiding the 
          user in real time using voice.
          Your goal is to help the user cook a recipe based on the ingredients they have.

            Cooking Assistant Guidelines:
            Use the provided ingredients to create a suitable recipe.
            Ask the user about any allergies or ingredients they want to avoid before starting.
            Break down the recipe into simple, clear, step-by-step instructions.
            Use a natural and encouraging tone to keep the user motivated.
            Periodically check if the user is ready to move to the next step.
            Offer tips and substitutions if the user is missing any ingredients or tools.
            Keep your style of conversation {{ style }}.
            Keep your responses short and conversational, as this is a voice interaction.
            Do not include any special characters in your responses - this is a voice conversation.

              `,
        },
      ],
    },
    //@ts-ignore
    clientMessages: [],
      //@ts-ignore
    serverMessages: [],
  };
  return vapiAssistant;
};