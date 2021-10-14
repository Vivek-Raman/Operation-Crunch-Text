interface LinewiseProcessor {
    name() : string;
    process(line : string) : string | null;
}