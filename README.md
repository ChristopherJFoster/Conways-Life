# Implementing Conway's Life (using React)

### The Project

At the time of this writing I'm in the second of two computer science units at Lambda School (and my final unit overall). Our project this week was to implement Conway's Life—including a few bells and whistles—as a front-end app in a language/framework of our choosing. I chose React (exclusively Hooks) along with Material-UI for the app's controls. I was excited because this project contained **no starting code** that we were required to use (only the project instructions).

### Brushing off the Cobwebs

Since I began learning React in February (2019), I've never gone more than a couple of weeks without building or heavily modifying a React project, and since March, all of my React work uses Hooks exclusively (though I'm still comfortable working in a codebase that contains React's Class components). Even when the prior CS unit focused on Python, I worked on side projects using React. As such, I was confident that I would have the basic framework of the app up and running in no time.

I quickly realized, however, that implementing Conway's life would be a bit more complex than the apps I'd most recently built. I'd need to render a grid of cells that not only matched the dimensions assigned by the app (such as 20x20 cells), but was also responsive to screen size. I solved the **grid** dimension problem using, funny enough, **CSS grid** along with fractional units (which are a bit like flexbox's flex-grow). For screen-size responsiveness, a width percentage would not be enough, since at certain widths, the Life grid would be large enough to be partially off-screen. With text content this might be okay, as the user can scroll down to continue reading. However, for Conway's Life we want the user to always be able to see the entire Life grid at once. To accomplish this, I used the CSS **vmin** unit. By responding the **smaller** of the screen width and height, my Life grid is sized to fit on the screen.

### Color Trails: Generating the Next Frame

Once I'd written the skeletal components of the project, I moved on to one of my favorite aspects of coding: logic and algorithms. I needed to write the code that applies the rules of Life and generates the next frame of the grid. I wanted the cells to change color based on age, so storing cell status as 0s and 1s wouldn't provide enough information. Instead, a newly-dead cell is stored as a 10, and a newly-alive cell is stored as an 11. If the cell's alive/dead status doesn't change between frames, then the code adds 10 to its status (up to 90/91), allowing the cell to 'age' over a number of frames. I assign a different cell color to each status code, so long-lived cells grow in brightness, while dead cells fade from blue to black. This makes comparing cell values a bit more complex than with 0s and 1s: An alive cell is one where **(status % 10 === 1)** and a dead cell is one where **(status % 10 === 0)**.

Next I needed to implement the actual Life rules (see the deployed project if you're unfamiliar with them). I'd need to calculate the alive/dead status of each cell's eight neighbors, and since I store the cell status data in a single-dimension array, I'd have to be a bit clever about it. To figure this out, I drew a small grid on paper and labeled each cell by what its array index would be. Then I (painstakingly) calculated the neighbors of each corner cell, then the edge cells, and finally, the middle cells, using the known grid size to find the correct indices. It is certainly not the most performant solution, but it works well enough, and I can proudly say I wrote it myself.

### Performance Woes: To \<canvas> or Not to \</canvas>

Speaking of performance, soon after writing (and debugging) my frame generation algorithm, I was disappointed to find that the app rendered quite slowly, especially at larger grid sizes. React must generate hundreds of cell divs each time the grid size is changed, and it must dynamically restyle those divs during frame generation. When I wrote the preset for Life's famous Gosper Gun, the rendering was too slow to be interesting to watch.

I set aside one work day to look into rendering the Life grid using HTML's \<canvas> element. If the frame generation code is updating pixel color instead of div classes, it should be quite a bit more performant. I found an example of Life implemented using \<canvas>, but was unwilling to borrow code that I did not fully understand. Instead, I began to read MDN's \<canvas> docs and follow the tutorial there. It was promising at first, but the project required functionality allowing the user to click on a cell to toggle its alive/dead status (in order to set up the initial state of the grid). I had given myself one work day to try \<canvas>, and I was unable to implement this feature in that amount of time.

### Focus on the Strengths of the App

In addition to being writers and creators, coders are problem-solvers. Ideally, we find the problems in our coding projects, and then we fix them. However, it is important to be able to assess whether one has the time to solve a particular problem, and whether the project will be okay if the problem goes unsolved. My implementation of Conway's Life did function, albeit slowly at larger grid sizes. I checked over the project guidelines, and there was no mention of specific performance targets to hit. I decided to let \<canvas> go, perhaps to return to it in the future. I focused instead on the strengths of my app, which were the bright colors and the presets. I implemented several of the well-known Life 'spaceships' and oscillators, making it easy to show off the app's strengths. I wrote the preset function to include a parameter for grid size, which allowed me to nudge the user into experiencing the app at smaller grid sizes, allowing for much better performance.

### What Did I Learn? (Deployment to the Rescue)

One of the project requirements was to deploy the app, so once I was reasonably happy with styling, I pointed Netlify at my repo. My app deployed without issue (always nice, but especially so after midnight). I had heard from another Lambda School student that he got a performance boost upon deployment, but I expected it to be relatively minor. I was excited to discover that I was wrong! Deployed, my app runs at respectable speeds, even at the larger grid sizes. None of the previous React apps I'd worked with were running any serious algorithms, much less numerous times per second. As such, I'd never noticed any performance difference between the development and production environments. My biggest takeaway from this project, technically speaking, is that there is a significant difference in performance between the 'quick-build' of **yarn start** and the full production build of **deployment**. Now I know that when necessary I can emulate a production build with **yarn build** instead.

## Tech Stack

- JavaScript
- React (Hooks)
- Material-UI
- CSS3
- JSS
- less
- SVG
