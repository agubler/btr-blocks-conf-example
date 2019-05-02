import * as fs from 'fs';
import { join } from 'path';
import { Converter } from 'showdown';

const mdConverter = new Converter();

export default function() {
	const content = fs.readFileSync(join(__dirname, 'content', 'blog.md'), 'utf8');
	const html = mdConverter.makeHtml(content);
	return html;
}
