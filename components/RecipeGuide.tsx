'use client'
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Pause, Volume2, VolumeX, Loader } from "lucide-react";
import { cn, configureAssistant } from "@/lib/utils";
import { vapi } from '@/lib/vapi.sdk';

interface VoiceGuideProps {
    ingredients: string,//@ts-ignore
    dietaryPreferences?: string[] | undefined;
    allergies?: string[] | undefined,
    cuisineType: string,
    difficultyLevel: string,
    cookingTime: string,
    servings: string,
    excludedIngredients: string[] | undefined,
    instructions: string[];
    className?: string;
}

enum CallStatus {
    INACTIVE = 'INACTIVE',
    ACTIVE = 'ACTIVE',
    CONNECTING = 'CONNECTING',
    FINISHED = 'FINISHED'
}

export default function RecipeGuide({
    ingredients, dietaryPreferences, allergies,
    excludedIngredients, cuisineType, servings,
    difficultyLevel, cookingTime,
    instructions = [],
    className,
    }: VoiceGuideProps) {
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
    const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
    const [currentStep, setCurrentStep] = useState(0);

    const [isMuted, setIsMuted] = useState(false)

    useEffect(() => {
        const onCallStart = () => {
            setCallStatus(CallStatus.ACTIVE);
        }

        const onCallEnd = () => {
            setCallStatus(CallStatus.FINISHED);
        }

        const onSpeechStart = () => {
            setIsSpeaking(true);

        }

        const onSpeechEnd = () => {
            setIsSpeaking(false);
        }
        const onError = (error: Error) => {
            console.error('Error in call:', error);

        }

        vapi.on('call-start', onCallStart);
        vapi.on('call-end', onCallEnd);
        vapi.on('error', onError);
        vapi.on('speech-start', onSpeechStart);
        vapi.on('speech-end', onSpeechEnd);


        return () => {
            vapi.off('call-start', onCallStart);
            vapi.off('call-end', onCallEnd);
            vapi.off('error', onError);
            vapi.off('speech-start', onSpeechStart);
            vapi.off('speech-end', onSpeechEnd)
        }
    }, [])


    const handleConnect = async () => {
        setCallStatus(CallStatus.CONNECTING);

        const assistantOverride = {
            variableValues: {
                ingredients, dietaryPreferences, allergies,
                excludedIngredients, cuisineType, servings,
                difficultyLevel, cookingTime,
            },
            clientMessages: ['transcript'],
            serverMessages: [],
        }

        //@ts-expect-error
        vapi.start(configureAssistant(), assistantOverride)
    }

    const onSpeechEnd = () => {
            setIsSpeaking(false);
        }

    const handlePause = async () => {
        vapi.off('speech-end', onSpeechEnd)
    }

    const handleDisconnect = async () => {
        setCallStatus(CallStatus.FINISHED);
        vapi.stop();

    }

    const toggleMicrophone = () => {
        const isMuted = vapi.isMuted();

        vapi.setMuted(!isMuted);
        setIsMuted(!isMuted);
    }

    


    return (
        <Card className={cn("bg-white", className)}>
            <CardHeader className="">
                <CardTitle className="flex items-center gap-2">
                    <Volume2 className="h-5 w-5 text-orange-500" />
                    Voice Guide
                </CardTitle>
                {/* <div className="flex justify-between">
                    <Button>
                        End Call
                    </Button>
                </div> */}
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                    <Button
                        onClick={callStatus === CallStatus.ACTIVE
                            ? handleDisconnect : handleConnect}
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                    >
                        {callStatus === CallStatus.ACTIVE ? (
                            <Pause className="h-4 w-4" /> 
                        ) : callStatus === CallStatus.CONNECTING ? (
                            <Loader className="h-4 w-4" />)
                            : (
                                <Play className="h-4 w-4" />
                            )}
                        {callStatus === CallStatus.ACTIVE ? (
                            "Pause"
                        ) : callStatus === CallStatus.CONNECTING ? (
                            "Connecting")
                            : (
                                "Play"
                            )}
                    </Button>
                    <Button
                        onClick={toggleMicrophone}
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-2"
                    >
                        {isMuted ? (
                            <VolumeX className="h-4 w-4" />
                        ) : (
                            <Volume2 className="h-4 w-4" />
                        )}
                    </Button>
                </div>

                <div className="space-y-2">
                    <p className="text-sm text-gray-600 mb-2">Cooking Instructions:</p>
                    {instructions.map((instruction, index) => (
                        <div
                            key={index}
                            className={cn(
                                "p-3 rounded-lg border cursor-pointer transition-colors",
                                currentStep === index
                                    ? "bg-orange-50 border-orange-200 text-orange-900"
                                    : "bg-gray-50 border-gray-200 hover:bg-gray-100",
                            )}
                        >
                            <div className="flex items-start gap-2">
                                <span
                                    className={cn(
                                        "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium",
                                        currentStep === index
                                            ? "bg-orange-500 text-white"
                                            : "bg-gray-300 text-gray-600",
                                    )}
                                >
                                    {index + 1}
                                </span>
                                <p className="text-sm leading-relaxed">{instruction}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {instructions.length === 0 && (
                    <p className="text-sm text-gray-500 text-center py-4">
                        No cooking instructions available
                    </p>
                )}
            </CardContent>
        </Card>
    );
}
