In this example we have the following scenario:

- a Micro Frontend made with `React` and loaded in a parent instance of `orchy`;
- a Micro Frontend made with `Svelte` and loaded in a children instance of `orchy`;

Our goal is to enable a bidirectional communication between them, using the `eventBus` in the Micro Frontends to share the counter value.