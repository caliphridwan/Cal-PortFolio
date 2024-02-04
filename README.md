https://www.npmjs.com/package/react-type-animation

npm install react-type-animation

import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
return (
<TypeAnimation
sequence={[
// Same substring at the start will only be typed out once, initially
'We produce food for Mice',
1000, // wait 1s before replacing "Mice" with "Hamsters"
'We produce food for Hamsters',
1000,
'We produce food for Guinea Pigs',
1000,
'We produce food for Chinchillas',
1000
]}
wrapper="span"
speed={50}
style={{ fontSize: '2em', display: 'inline-block' }}
repeat={Infinity}
/>
);
};

REACT ICONS
https://www.npmjs.com/package/react-icons

npm install react-icons --save

import { FaBeer } from "react-icons/fa";

function Question() {
return (
<h3>
Lets go for a <FaBeer />?
</h3>
);
}
