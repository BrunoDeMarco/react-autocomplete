### What is the difference between Component and PureComponent? give an example where it might break my app.

Basically, Component re-renders when their parent component re-renders, even if their state os props have not changed. PureComponent will only re-render when their props or state have changed.

### Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

I know what Context and ShouldComponentUpdate are but couldn't think of a problem between those.

### Describe 3 ways to pass information from a component to its PARENT.

First, it's possible to pass a function down to a child, and from the child, use the function to update the parent's prop. Like having a [prop, setProp] = useState() in the parent, passing the setProp function as a prop to a child component, and then, from the child, using the function to change prop.

Second, it's possible to use React Context that acts as a "global state", from there, it's possible to access it from pretty much every component down the tree.

Third, we can use a State Management tool, like Redux. With that, it's possible to do way more things regarding state.

### Give 2 ways to prevent components from re-rendering.

It's possible to prevent a re-render by using the ShouldComponentUpdate() lifecycle method, if it's implemented, before every render, it'll run it and if it returns false, the component won't re-render.
Using a PureComponent is also another way to prevent re-rendering, the developer won't directly control the cases where it'll be prevented as in ShouldComponentUpdate(), but the PureComponent won't re-render unless its props or state have changed.

### What is a fragment and why do we need it? Give an example where it might break my app.

A Fragment is a way of returning more than one element in a component. As a matter of fact, react components should return only one "DOM" component and not a list of components, the fragment comes to make components able to return a list of components.
For an example, we have a component that wants to return two table rows, but it's not possible to return the two elements, and we'd need to create a wrapper component for it that could break the app. Then, instead of returning:

<td>element 1</td>
<td>element 2</td>

Which wouldn't be possible, we could return those using a React Fragment:

<React.Fragment>
    <td>element 1</td>
    <td>element 2</td>
</React.Fragment>

### Give 3 examples of the HOC pattern.

I'm familiar with that name, I've probably already used it but I can't come up with a specific explanation.

### What's the difference in handling exceptions in promises, callbacks and async...await.

Async/Await is just a sugar syntax for returning promises:

async fn(num) {
    if(typeof num !== 'number'){
        throw new Error("Not a number");
    }

    return num+1;
}

is exactly the same thing as:

fn(num){
    return new Promise((resolve, reject) => {
        if(typeof num !== 'number'){
            reject(Error("Not a number"));
        }

        resolve(num+1);
    })
}

A callback is a function that's passed by argument and ran after a determined async function has finished.

### How many arguments does setState take and why is it async.

setState receives two arguments, the new state and a callback function that'll be called after the state is updated. The function is async because changing state means re-rendering the app, and if it was synchronous, complex routines could make the browser unresponsible. 

### List the steps needed to migrate a Class to Function Component.

1. Instead of exporting a class, change it to be a function.
2. Remove calls to setState(), bind(), remove class functions and transform them into variables.
3. Remove lifecycle functions and set the necessary hooks instead.
3. Add useState() hooks where setState() was being used.

### List a few ways styles can be used with components.

It's possible to stylize components using the usual css setting classnames, using SASS, or having styled components.

### How to render an HTML string coming from the server.

It's possible to do so using ReactDOMServer.