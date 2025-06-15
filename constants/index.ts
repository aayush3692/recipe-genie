export const voices = {
  male: { casual: "2BJW5coyhAzSr8STdHbE", formal: "c6SfcYrb2t09NHXiT80T" },
  female: { casual: "ZIlrSGI4jZqobxRKprJz", formal: "sarah" },
};

export const getVoiceId = (voice: string, style: string): string => {
  return voices[voice as keyof typeof voices]?.[style as keyof (typeof voices)[keyof typeof voices]] || "sarah";
};