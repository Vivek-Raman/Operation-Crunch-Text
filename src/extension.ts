import * as vscode from 'vscode';
import { CheckDuplicates } from './framework/processor/check-duplicate-lines';
import { LinewiseProvider } from './framework/provider/linewise';
import { TextProvider } from './types/TextProvider';

export function activate(context: vscode.ExtensionContext) {
	const commandList = ["asd", "qwe"];

	// TODO: add tree view for Command List

	let disposable = vscode.commands.registerCommand('operation-crunch-text.helloWorld', async () => {
		const command = await vscode.window.showQuickPick(commandList);
		switch(command) {
			case "asd": {
				const processor = new CheckDuplicates();
				const provider = new LinewiseProvider() as TextProvider;
				provider.processAll(processor);
			}
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
