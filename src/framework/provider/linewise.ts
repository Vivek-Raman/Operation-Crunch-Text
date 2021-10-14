import * as vscode from 'vscode';
import { TextProvider } from '../../types/TextProvider';

export class LinewiseProvider implements TextProvider {

    currentFile? : vscode.TextDocument;
    currentLine = 0;

    constructor() {
        this.currentFile = vscode.window.visibleTextEditors[0].document;
        this.currentLine = 0;
    }

    get() : string {

        const currentFile = vscode.window.visibleTextEditors[0].document;
        const currentFileText = currentFile.getText().split(/\n/);
        currentFileText.forEach(line => {
            
        });
        return '';
    }

    processAll(processor : LinewiseProcessor) : void {
        const output = new Array<string>();

        const currentFileText = this.currentFile?.getText().split(/\n/);
        currentFileText?.forEach((line: string) => {
            const processedLine = processor?.process(line);
            if (processedLine !== null) {
                output.push(processedLine!);
            }
        });

        this.showOutput(output.join('\n'));
    }

    showOutput(text : string) {
        console.log('output : ' + text);
    }
}