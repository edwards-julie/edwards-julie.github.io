// summary length ~ 36 words
const posts = [
    {
        title: "OUUC 2024 Summer UU Reading Fun Event - Newsy Bits & Shopping Tips #1",
        date: "April 11th 2024",
        summary: "Greetings fellow book lovers! We now have dates for both of OUUC's community book sales - so please mark your calendars, bring on the book donations, and help spread the word! 2024 SUURF: OUUC's Summer UU Reading Fun",
        href: "newsy-bits-1",
    },
    {
        title: "OUUC 2024 Summer UU Reading Fun Event - Newsy Bits & Shopping Tips #2",
        date: "April ?th 2024",
        summary: "Greetings fellow book lovers! Next post will be here",
        href: "newsy-bits-2",
    },
]

const postsEle = document.querySelector('#posts');

let postsList = ''

posts.forEach(x => {
    const href = `https://books-ouuc.com/blog/posts/${x.href}.html`
    postsList += `
        <div class="post-item">
            <h3><a href=${href}>${x.title}</a></h3>
            <p class="byline">Posted by Susan, OUUC book sale volunteer on ${x.date}</p>
            <p class="summary">${x.summary} ... <a href="${href}">read more</a></p>
        </div>
    
    `
});

postsEle.innerHTML = postsList