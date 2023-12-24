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

const Main = () => {
    return (
        <main className='view-container space-y-6 mt-20'>
            <div className='flex gap-8 justify-between flex-col md:flex-row'>
                <div className='grow space-y-2'>
                    <Label htmlFor='convert-from'>Convert from</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder='Expression type' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='infix'>Infix</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='grow space-y-2'>
                    <Label htmlFor='convert-to'>Convert to</Label>
                    <Select>
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
                    />
                    <Button>Convert expression</Button>
                </div>
                <div className='grow space-y-2'>
                    <Label htmlFor='output-expression'>
                        Output expression:
                    </Label>
                    <Textarea
                        id='output-expression'
                        placeholder='Converted expression will be shown here.'
                    />
                </div>
            </div>
        </main>
    );
};

export default Main;
