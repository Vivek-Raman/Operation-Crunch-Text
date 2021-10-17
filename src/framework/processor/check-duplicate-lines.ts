import { LinewiseProcessor } from "../../types/LinewiseProcessor";

export class CheckDuplicates implements LinewiseProcessor {

    set : Set<string>;

    constructor() {
        this.set = new Set();
        
    }
    
    label : string = 'Remove Duplicate Lines in a File';
    description?: string | undefined = this.id();
    detail?: string | undefined = 'Reads a file and provides a copy without any duplicate lines.';
    picked?: boolean | undefined = false;
    alwaysShow?: boolean | undefined = true;

    id() : string {
        return 'remove-dupes';
    }

    process(line : string) : string | null {
        if (this.set.has(line)) {
            return null;
        }

        this.set.add(line);
        return line;
    }
}
