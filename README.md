An interactive React + TypeScript web application for exploring popular web development technologies and creating a personalized list of selected technology stacks.

(>> About The Project <<)

Tech Stack Explorer is a frontend project built with React and TypeScript. It displays different technologies with useful information such as their category, description, rating, difficulty level, and icon.

Users can explore available technologies and add their favorite stacks to their selected list. The project focuses on practicing React concepts such as components, props, state, hooks, conditional rendering, event handling, and data fetching.

(>> Technologies Used <<)
React
TypeScript
Vite
Tailwind CSS
React Icons
React Toastify
JSON for local data
Netlify for deployment
Features

The application provides a responsive interface with interactive buttons, status updates, notifications, and conditional messages depending on the user's actions.

(>> Question Answers <<)

(1.) What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript/TypeScript.
It makes React code easier to read and helps us describe what the UI should look like.

(2.) What is the difference between props and state?

Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.

For example:
<ProductCard name="React" />
Here, name is a prop

const [count, setCount] = useState(0);
Here, count is state.

(3.) What does the useState hook do, and where did you use it in this project?

useState is a React Hook used to create and manage changing data inside a component.
In this project, I used it to manage the selected technology stacks and update the UI when a user adds or removes a stack.

Example:
const [selectedStacks, setSelectedStacks] = useState<IStack[]>([]);

(4.) What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects in a React component, such as fetching data.
I used it to load the technology stack data from the JSON file when the component loads.

For example:
useEffect(() => {
  getStacks();
}, []);
The empty [] means the effect runs when the component is initially loaded.

(5.) Why does every item in a .map() list need a unique key prop?

React needs a unique key to identify each item in a list.
It helps React understand which item was added, removed, or changed and update the UI efficiently.

Example:
stacks.map((stack) => (
  <StackCard key={stack.id} stack={stack} />
))
Here, stack.id is used as the unique key.

(6.) What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI depending on a condition.
For example, when no technology stack has been selected, I can show an empty message:

{selectedStacks.length === 0 ? (
  <p>No stack selected yet.</p>
) : (
  <SelectedStacks />
)}
If the selected stack list is empty, the first message is displayed.

(7.) How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props.

<StackCard stack={stack} />

The child receives the stack through props.
To send something back to the parent, the parent can pass a function as a prop.

<StackCard onAdd={handleAddStack} />

The child can then call that function:
onAdd(stack);

So, data usually goes parent → child through props, while a child can communicate back by calling a function received through props.
