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

import { toast } from "sonner";

import { expressionType } from "@/types";

import InfixExperssion from "@/lib/InfixExpression";

const Main = () => {
    const [convertFrom, setConvertFrom] = useState<expressionType>("");
    const [convertTo, setConvertTo] = useState<expressionType>("");
    const [inputExpression, setInputExpression] = useState<string>("");
    const [outputExpression, setOutputExpression] = useState<string>("");

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
                    <Label htmlFor='output-expression'>
                        Output expression:
                    </Label>
                    <Textarea
                        id='output-expression'
                        placeholder='Converted expression will be shown here.'
                        value={outputExpression}
                        onChange={(event) =>
                            setOutputExpression(event.target.value)
                        }
                    />
                </div>
            </div>
        </main>
    );
};

export default Main;
