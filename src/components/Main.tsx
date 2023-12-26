"use client";
import { useState } from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { Check, Copy } from "lucide-react";

import { toast } from "sonner";

import { expressionType } from "@/types";

import InfixExperssion from "@/lib/InfixExpression";

const Main = () => {
    const [convertFrom, setConvertFrom] = useState<expressionType>("");
    const [convertTo, setConvertTo] = useState<expressionType>("");
    const [inputExpression, setInputExpression] = useState<string>("");
    const [outputExpression, setOutputExpression] = useState<string>("");
    const [outputCopied, setOutputCopied] = useState<boolean>(false);

    const handleConvertExpression = () => {
        if (convertFrom == "") {
            toast.error("No input expression type provided!", {
                description: "Please from select an input expression type.",
            });
            return;
        } else if (convertTo == "") {
            toast.error("No output expression type provided!", {
                description: "Please from select an input expression type.",
            });
            return;
        }

        switch (convertFrom) {
            case "infix":
                switch (convertTo) {
                    case "infix":
                        setOutputExpression(
                            InfixExperssion.toInfix(inputExpression)
                        );
                        break;

                    case "postfix":
                        setOutputExpression(
                            InfixExperssion.toPostfix(inputExpression)
                        );
                        break;

                    case "prefix":
                        setOutputExpression(
                            InfixExperssion.toPrefix(inputExpression)
                        );
                }
        }
    };

    const handleCopyChange = () => {
        setOutputCopied(true);
        navigator.clipboard.writeText(outputExpression);
        toast.info("Output copied to clipboard");
        setTimeout(() => {
            setOutputCopied(false);
        }, 1500);
    };

    return (
        <main className='view-container space-y-6 mt-20'>
            <div className='flex gap-8 justify-between flex-col md:flex-row'>
                <div className='grow space-y-2'>
                    <Label htmlFor='convert-from'>
                        Convert from (Input expression type)
                    </Label>
                    <Select
                        onValueChange={(value) =>
                            setConvertFrom(value as expressionType)
                        }
                    >
                        <SelectTrigger>
                            <SelectValue placeholder='Expression type' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='infix'>Infix</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='grow space-y-2'>
                    <Label htmlFor='convert-to'>
                        Convert to (Output expression type)
                    </Label>
                    <Select
                        onValueChange={(value) =>
                            setConvertTo(value as expressionType)
                        }
                    >
                        <SelectTrigger>
                            <SelectValue placeholder='Expression type' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='infix'>Infix</SelectItem>
                            <SelectItem value='prefix'>Prefix</SelectItem>
                            <SelectItem value='postfix'>Postfix</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className='flex gap-8 justify-between flex-col md:flex-row'>
                <div className='grow space-y-2'>
                    <Label htmlFor='input-expression'>Input expression:</Label>
                    <Textarea
                        id='input-expression'
                        placeholder='Enter your expression here.'
                        value={inputExpression}
                        onChange={(event) =>
                            setInputExpression(event.target.value)
                        }
                    />
                    <Button onClick={() => handleConvertExpression()}>
                        Convert expression
                    </Button>
                </div>
                <div className='grow space-y-2'>
                    <div className='flex justify-between items-center'>
                        <Label htmlFor='output-expression'>
                            Output expression:
                        </Label>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button
                                        aria-label='Copy output'
                                        onClick={() => handleCopyChange()}
                                        variant='outline'
                                        size='icon'
                                    >
                                        {outputCopied ? (
                                            <Check
                                                size={18}
                                                strokeWidth={1.5}
                                            />
                                        ) : (
                                            <Copy size={18} strokeWidth={1.5} />
                                        )}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Copy output</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <Textarea
                        id='output-expression'
                        placeholder='Converted expression will be shown here.'
                        value={outputExpression}
                    />
                </div>
            </div>
        </main>
    );
};

export default Main;
