import { getAttribute, setAttribute } from "../fs-xattr";

main();

async function main() {
	try {
		await setAttribute("index.js", "user.linusu.test", "Hello, World!");

		const gottenAttrBuf = await getAttribute("index.js", "user.linusu.test");
		console.log(gottenAttrBuf?.toString());
		// => Hello, World!
	} catch (e) {
		console.error("f'ed something up", e);
		throw e;
	}
}
