*Notes
- With Hooks, now, both Function and Class Components can:
# produce JSX to show content to the user
# (CC) use the lifecycle method system and (FC) use Hooks to run code at specific points in time.
# (CC) use state system and (FC) use Hooks to access state system to update content on screen.  
*QA
Q: Why we don't need to use extensions (like .js) when we are importing files (ex. import ComponentDetail from './ComponentDetail/ComponentDetail')?
A:WebPack, the library that is doing this kind of importing stuff and tying all these different files together is foing to automatically attempt to find files ending in js for us!

Q: Why don't we use/call the components with <> instead of {}
A: jsc uses {} to refer to JS variables, Components are the one exception to this rule! we should treat them as though it were jsx tags