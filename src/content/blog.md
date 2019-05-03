# BTR and Blocks Conference Talk

[Dojo.io](https://dojo.io)

 * Cool
 * Awesome

#### Dojo Block for processing markdown:

---

```ts
import * as fs from 'fs';
import { join } from 'path';
import { Converter } from 'showdown';
const highlight = require('showdown-highlight');

const mdConverter = new Converter({ extensions: [highlight] });

export default function() {
	const content = fs.readFileSync(join(__dirname, 'content', 'blog.md'), 'utf8');
	const html = mdConverter.makeHtml(content);
	return html;
}
```

#### Using the block in a widget:

---

```js
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { tsx } from '@dojo/framework/widget-core/tsx';
import Block from '@dojo/framework/widget-core/meta/Block';

import markdown from './markdown.block';

class App extends WidgetBase {
	protected render() {
		const content = this.meta(Block).run(markdown)();

		return (
			<div>
				<div innerHTML={content} />
			</div>
		);
	}
}
```
