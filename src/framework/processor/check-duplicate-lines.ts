export class CheckDuplicates implements LinewiseProcessor {

    set : Set<string>;

    constructor() {
        this.set = new Set();
    }

    name() : string {
        return 'Remove Duplicate Lines in a File';
    }

    process(line : string) : string | null {
        if (this.set.has(line)) {
            return null;
        }

        this.set.add(line);
        return line;
    }
}
