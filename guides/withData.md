# How `withData` Works

`withData` (src/http/withData.tsx) is a higher order component responsible for promise handling.
Basically, whenever a component needs to fetch data from the API, we wrap it in `withData`,
optionally with some special logic like watching for changes to trigger a reload or setting
default values. A good example of the syntax is this slightly adapted version of
src/markup/ui/markup.tsx:

```ts
export default withData<
  { text: string }, // A
  { markupService: MarkupService }, // B
  readonly MarkupPart[]  // C
>(
  ({ data }): JSX.Element => MarkupText(data), // D
  ({ markupService, text }) => markupService.fromString(text)  // E
)

// example function call
<Markup 
  markupService={markupService} // a
  text="Refer to @bib{foobar2024} (@i{sic!})." // b
/>
```

Line **A** defines the props passed to both the display component **D** and the getter **E**.
**B** defines additional props for the getter **E**. All properties must be passed to `Markup`
when calling it, so **A** corresponds to **a**, and **B** to **b** in the function call.

**C** is the type of `data` passed to **D**. Also, the return type of the getter **E** must
`promise` data of this type. Compare the call signatures of `MarkupText`...

```ts
export function MarkupText(parts: readonly MarkupPart[]): JSX.Element {
    ...
}
```

...and of `markupService.fromString`:

```ts
fromString(text: string): Bluebird<readonly MarkupPart[]> {
    ...
}
```

**D** is the component that eventually receives the data fetched by the getter **E**. Although it
is not used here, the `text` prop defined in **A** is also accessible here (but `markupService`
is *not* since was only defined in **B**).

Finally, **E** is the getter function that sends a request to the API. It is usually a method of
some -Service or -Repository class.

When a `Markup` component is called, `withData`

- shows a spinner,
- calls the getter method **E**,
- resolves the promise returned by it,
- passes the resulting data to **D**, and
- removes the spinner.
