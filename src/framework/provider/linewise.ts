import * as vscode from 'vscode';
import { LinewiseProcessor } from '../../types/LinewiseProcessor';

export class LinewiseProvider implements vscode.TextDocumentContentProvider {

    processor? : LinewiseProcessor;
    currentFile? : vscode.TextDocument;
    currentLine = 0;

    constructor(processor? : LinewiseProcessor) {
        this.setProcessor(processor);
        this.currentFile = vscode.window.activeTextEditor?.document;
        this.currentLine = 0;
    }

    setProcessor(processor? : LinewiseProcessor) {
        this.processor = processor;
    }

    onDidChange?: vscode.Event<vscode.Uri> | undefined;

    provideTextDocumentContent(uri: vscode.Uri, token: vscode.CancellationToken): vscode.ProviderResult<string> {
        const output = new Array<string>();

        const currentFileText = this.currentFile?.getText().split(/\n/);
        currentFileText?.forEach((line: string) => {
            const processedLine = this.processor?.process(line);
            if (processedLine !== null) {
                output.push(processedLine!);
            }
        });

        console.log('output : ' + output);
        return output.join('\n');
    }
}