import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import App from './App';
import './index.css';

// const content = [
//   {
//     tab: 'Section 1',
//     content: '1111111111111111111',
//   },
//   {
//     tab: 'Section 2',
//     content: '22222222222222222222',
//   },
//   {
//     tab: 'Section 3',
//     content: '2222212312334512341221222222222222222',
//   },
// ];

// const useTabs = (initialTab, allTabs) => {
//   const [currentIndex, setCurrentIndex] = useState(initialTab);
//   if (!allTabs || !Array.isArray(allTabs)) {
//     return;
//   }
//   return {
//     currentItem: allTabs[currentIndex],
//     changeItem: setCurrentIndex,
//   };
// };

// const App = () => {
//   const { currentItem, changeItem } = useTabs(0, content);
//   return (
//     <div>
//       {content.map((section, index) => (
//         <button onClick={() => changeItem(index)}>{section.tab}</button>
//       ))}
//       <div>{currentItem.content}</div>
//     </div>
//   );
// };

// const rootElement = document.getElementById('root');

ReactDOM.render(<App />, document.getElementById('root'));
