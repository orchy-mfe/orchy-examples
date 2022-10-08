In this example we have the following scenario:

- a Micro Frontend made with `React`;
- an old monolithic application encapsulated in an `iframe` and emulated by the `Svelte` template.

Our goal is to enable a bidirectional communication between them, using the `eventBus` in the Micro Frontend and the `postMessage` and `onmessage` functions in the `iframe`.