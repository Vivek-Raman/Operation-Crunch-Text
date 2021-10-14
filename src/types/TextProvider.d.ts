import { LinewiseProvider } from "../framework/provider/linewise";

interface TextProvider {
    processAll(processor : LinewiseProcessor) : void;
    // showOutput(text : string) : void;
}