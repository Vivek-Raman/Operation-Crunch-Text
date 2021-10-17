import * as vscode from 'vscode';
import { CheckDuplicates } from './framework/processor/check-duplicate-lines';
import { LinewiseProvider } from './framework/provider/linewise';
import { LinewiseProcessor } from './types/LinewiseProcessor';

export function activate({ subscriptions }: vscode.ExtensionContext) {
	const baseURI = 'hellotest';
	const processorList = [new CheckDuplicates()] as LinewiseProcessor[];

	// TODO: add tree view for Command List

	processorList.forEach((processor) => {
		subscriptions.push(
			vscode.workspace.registerTextDocumentContentProvider(
				baseURI, new LinewiseProvider(processor)));
	});

	vscode.commands.registerCommand('operation-crunch-text.runCommand', async () => {
		const processor = await vscode.window.showQuickPick(processorList);
		const doc = await vscode.workspace.openTextDocument(vscode.Uri.parse(baseURI + ':' + processor?.id()));
		vscode.window.showTextDocument(doc, { preview: true });
	});
}

export function deactivate() {}
