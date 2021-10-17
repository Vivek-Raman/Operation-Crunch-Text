import { QuickPickItem } from "vscode";

interface LinewiseProcessor extends QuickPickItem {
    id() : string;
    process(line : string) : string | null;
}