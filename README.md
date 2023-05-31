Home work task =>

Create a new react app (vite link above)
Create a component
Include that component in App.jsx
Pass a prop into the component at #2
Add some state to the App component
Optional, update the state created at #5

I have created two components Button and IsHappy.
I have imported them into App.jsx
I have passed props
I have created one set of state (isHappy)

The button (Toggle) appears in the Dom - but it does not toggle Happy or Sad. Not sure why.

After a 1-2-1 with Russell.
The problem was that I was not rendering the IsHappy component on line 16 because there was a semi colon, on the previous line. So it was never returned.

I also encorporated the returned statements into fragments to help seperate the statements.
