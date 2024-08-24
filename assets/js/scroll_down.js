// "use strict";

// const heading= document.querySelectorAll('.heading');
// // console.log(heading.length);

// for(let i=0; i<heading.length;i++){
// heading[i].addEventListener('click', ()=>{
//     console.log("hhh");
//     const content= document.querySelectorAll('.sub_txt');
//     const header = document.querySelector('.header_position');

//     // Height of the fixed header
//     var headerHeight = header.offsetHeight;

//     // Customize the scroll offset here (e.g., 20px from the bottom of the header)
//     var customOffset = 280;

//     // Calculate the position to scroll to
//     var scrollToPosition = content.offsetTop - headerHeight - customOffset;
    
//     // Ensure the scroll position is not negative
//     scrollToPosition = Math.max(scrollToPosition, 0);

//     for(let i=0; i<content.length;i++){
//     content[i].scrollIntoView({ top: content.scrollToPosition, behavior: 'smooth' })}
// })}

"use strict";

// Select all heading elements
const headings = document.querySelectorAll('.heading');

// Add a click event listener to each heading
headings.forEach((heading) => {
    heading.addEventListener('click', () => {
        console.log("clihj");

        // Get the content associated with the clicked heading
        const targetId = heading.getAttribute('data-target'); // Assuming you use data-target for mapping
        // console.log(targetId);
        const content = document.querySelector(`#${targetId}`);
        
        if (content) {
            // const header = document.querySelector('.header_position');

            // // Height of the fixed header
            // var headerHeight = header.offsetHeight;

            // // Customize the scroll offset here
            // var customOffset = 280;

            // Scroll to the content with an offset
            content.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.error('Content not found for target ID:', targetId);
        }
    });
});
