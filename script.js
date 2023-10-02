// JSON data for the blog post
const blogPost = {
    title: "The Importance of Time Management",
    coverImageSrc: "cover-image.jpg", // Add the cover image source here
    introduction: "Effective time management is a skill that can greatly improve your productivity and quality of life. In a world where we're constantly bombarded with tasks and distractions, learning to manage your time efficiently is essential. Let's explore the key benefits of mastering this valuable skill.",
    content: [
        {
            paragraph: "1. Increased Productivity",
            text: "Time management allows you to prioritize tasks and focus on what's most important. By allocating your time wisely, you can accomplish more in less time, leading to increased productivity and a greater sense of accomplishment.",
            imageSrc: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_10_Ways_to_Increase_Productivity_at_Work.jpg" // Add the image source here
        },
        {
            paragraph: "2. Reduced Stress",
            text: "When you manage your time effectively, you reduce the stress that comes with last-minute rushes and missed deadlines. A well-organized schedule allows you to approach tasks calmly and with confidence.",
            imageSrc: "https://media.istockphoto.com/id/1349826315/vector/stress-level-reduced-concept.jpg?s=612x612&w=0&k=20&c=Oyq8lR7ff1VlUqs2BXg1722Do_O6lq72WeOMt1wpGRQ=" // Add the image source here
        },
        {
            paragraph: "3. Better Work-Life Balance",
            text: "Proper time management not only benefits your work life but also your personal life. It enables you to allocate time for family, friends, hobbies, and relaxation, leading to a healthier work-life balance.",
            imageSrc: "https://coamplifi.com/wp-content/uploads/2022/03/coamplifi_10ways-750x550.jpg" // Add the image source here
        },
        {
            paragraph: "4. Improved Decision Making",
            text: "Time management helps you make better decisions by giving you the time to consider your options and weigh the pros and cons. Rushed decisions are often less thoughtful and can lead to regrets.",
            imageSrc: "https://www.mtdtraining.com/wp-content/uploads/2018/05/bigstock-Decision-Making-143973917.jpg" // Add the image source here
        },
        {
            paragraph: "5. Goal Achievement",
            text: "Setting and achieving goals becomes more attainable with effective time management. You can break down larger tasks into smaller, manageable steps and track your progress more easily.",
            imageSrc: "https://img.freepik.com/premium-vector/take-step-towards-your-goal-achievement-concept-goal-achievement_530733-2925.jpg?w=2000" // Add the image source here
        },
        {
            paragraph: "Conclusion",
            text: "Time management is not just about squeezing more tasks into your day; it's about making the most of your time and living a more fulfilling life. By mastering this skill, you can enhance your productivity, reduce stress, and achieve your goals with greater ease.",
            imageSrc: "https://clockify.me/blog/wp-content/uploads/2023/05/The-importance-of-time-management-cover.jpg" // Add the image source here for the conclusion
        }
    ]
};


// Function to create the HTML content
const createHTMLContent = (data) => {
    const { title, introduction, content } = data;
    const contentHTML = content.map(item => `
        <h2>${item.paragraph}</h2>
        <p>${item.text}</p>
        <div class="image-container">
        <img src="${item.imageSrc}" class="image" alt="${item.paragraph}"> </div><!-- Add the image here -->
    `).join('');

    return `
        <h1>${title}</h1>
        <p>${introduction}</p>
        ${contentHTML}
    `;
};

// Function to display HTML content
const displayHTMLContent = (html) => {
    document.querySelector('body').insertAdjacentHTML('beforeend', html);
};

// Function to display JSON content
const displayJSONContent = (json) => {
    console.log(JSON.stringify(json, null, 4));
};

// Create and display HTML content
const htmlContent = createHTMLContent(blogPost);
displayHTMLContent(htmlContent);

// Display JSON content
displayJSONContent(blogPost);
