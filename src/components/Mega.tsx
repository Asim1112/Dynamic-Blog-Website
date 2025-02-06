import React from 'react';
import BlogCard from './BlogCard';

const Mega = () => {

const posts = [
  {
    id: "1",
    title: "Morning Routines of Highly Successful People",
    description: "Many successful people swear by structured morning routines. A great morning routine helps set the tone for a productive, focused, and balanced day. Whether you're an entrepreneur, student, or working professional, small morning habits can significantly impact your life.",

    date: "2024-11-28",
    imageUrl: "/images/2.webp",

  },
  {
    id: "2",
    title: "Top 10 VS Code Extensions for Web Developers",
    description: "Visual Studio Code (VS Code) has become the go-to code editor for many web developers due to its flexibility and extensive range of extensions. To enhance your development workflow",

    date: "2024-11-28",
    imageUrl: "/images/5.avif",

  },
  {
    id: "3",
    title: "The Future of AI: How Artificial Intelligence is Transforming Industries",
    description: "Artificial Intelligence (AI) has rapidly evolved from a futuristic concept to an integral part of various industries. Its applications are vast, and its impact is profound.",

    date: "2024-11-28",
    imageUrl: "/images/6.avif",

  },
  {
    id: "4",
    title: "Top 5 Laptops for Developers in 2025",
    description: "Choosing the right laptop is crucial for developers seeking performance, portability, and reliability. As of 2025, Selecting the right laptop depends on individual requirements, including performance needs, portability, and budget. The above options represent some of the best laptops for developers in 2025, each offering unique features to enhance the development experience.",

    date: "2024-11-28",
    imageUrl: "/images/7.avif",

  },
  {
    id: "5",
    title: "Exploring Hidden Gems: Underrated Travel Destinations for 2025",
    description: "While popular tourist spots often steal the limelight, the world is brimming with lesser-known destinations that offer unique experiences and breathtaking beauty. Embarking on a journey to these destinations not only provides authentic experiences but also supports sustainable tourism. By choosing less-traveled paths, you contribute to the preservation of these locales and their cultures.",

    date: "2024-11-28",
    imageUrl: "/images/8.avif",

  },
  {
    id: "6",
    title: "Exploring Plant-Based Cuisine: Delicious Recipes to Try",
    description: "As people continue to explore healthier and more sustainable ways of eating, plant-based cuisine has gained significant attention. Whether you're looking to reduce your carbon footprint, improve your health, or simply try something new, plant-based meals offer an exciting world of flavor and nutrition.",

    date: "2024-11-28",
    imageUrl: "/images/9.jpg",

  },
  {
    id: "7",
    title: "Mindfulness in Everyday Life",
    description: "In today's fast-paced world, it's easy to feel overwhelmed and disconnected from the present moment. With constant distractions, work pressures, and daily responsibilities, it can seem like there’s never enough time to slow down and enjoy life. However, incorporating mindfulness into your daily routine can help you find balance, improve your mental well-being, and foster a greater sense of inner peace.",

    date: "2024-11-28",
    imageUrl: "/images/10.avif",

  },
  {
    id: "8",
    title: "Sustainable Fashion: How to Dress Stylishly Without Harming the Planet",
    description: "In recent years, the fashion industry has undergone a transformation, with sustainability at the forefront of the conversation. As consumers become more aware of the environmental and ethical impacts of fast fashion, there's a growing desire for sustainable alternatives. The good news is that it's possible to build a stylish wardrobe while making choices that are kind to the planet.",

    date: "2024-11-28",
    imageUrl: "/images/11.avif",

  },
  {
    id: "9",
    title: "Personal Finance 101: Smart Strategies for Managing Your Money",
    description: "Managing money wisely is an essential life skill, yet many people struggle with it. Whether you're just starting your career, looking to save for a big purchase, or planning for retirement, understanding the basics of personal finance is crucial. In this blog",

    date: "2024-11-28",
    imageUrl: "/images/12.avif",

  },
  {
    id: "10",
    title: "Positive Parenting: Tips for Raising Confident and Resilient Children",
    description: "Parenting is one of the most rewarding yet challenging jobs a person can have. Every parent wants their child to grow up confident, kind, and resilient, but achieving this can feel overwhelming at times. The key to raising well-rounded children lies in adopting positive parenting techniques that foster emotional growth, build self-esteem, and promote healthy relationships.",

    date: "2024-11-28",
    imageUrl: "/images/13.avif",

  },
  {
    id: "11",
    title: "The Evolution of Streaming Services: How They've Changed the Entertainment Industry",
    description: "The entertainment industry has seen a monumental shift in the past decade, with streaming services leading the charge. Gone are the days of waiting for your favorite TV shows to air or renting movies from a local video store. Today, streaming platforms like Netflix, Disney+, Amazon Prime Video, and Hulu have transformed the way we consume content, offering on-demand access to thousands of films, TV shows, and exclusive content.",

    date: "2024-11-28",
    imageUrl: "/images/14.avif",

  },
  {
    id: "12",
    title: "Habits to Cultivate for Personal Growth and Success",
    description: "Personal development is a lifelong journey that involves improving self-awareness, building strengths, and honing skills to become the best version of yourself. In today's fast-paced world, where distractions and challenges are abundant, it can be easy to lose focus. However, by developing and nurturing powerful habits, you can achieve personal growth and set yourself on the path to success.",

    date: "2024-11-28",
    imageUrl: "/images/15.avif",

  },
  {
    id: "13",
    title: "The Rise of Women in Sports: Breaking Barriers and Setting New Records",
    description: "In recent years, the sports world has seen an exciting transformation, with women athletes breaking barriers and setting new records in a variety of disciplines. From tennis courts to soccer fields and beyond, women in sports are proving that passion, dedication, and skill know no gender.",

    date: "2024-11-28",
    imageUrl: "/images/16.avif",

  },
  {
    id: "14",
    title: "The Fall of the Roman Empire: Lessons from One of History's Greatest Civilizations",
    description: "The Roman Empire, one of the most powerful civilizations in world history, once dominated vast territories across Europe, Africa, and Asia. It was a beacon of technological advancement, military might, and political innovation. However, after centuries of prosperity, the Roman Empire eventually fell in the 5th century AD. But what caused the collapse of such a seemingly invincible empire?",

    date: "2024-11-28",
    imageUrl: "/images/17.jpg",

  },
  {
    id: "15",
    title: "The Power of Personal Branding: Why It's Essential in Today's Digital World",
    description: "In today's hyper-connected world, where social media and digital platforms shape the way we interact and do business, personal branding has become more important than ever. A strong personal brand can help you stand out, build credibility, and connect with your audience on a deeper level. Whether you're an entrepreneur, a professional, or someone looking to make a name for yourself, understanding the significance of personal branding can unlock new opportunities.",

    date: "2024-11-28",
    imageUrl: "/images/18.jpg",

  },
  
]


  return (
    <div className='my-8'>
      <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>Morning Routines of Highly Successful People</h1>
    
      <div className='grid grid-col-1 sm:grid-col-2 lg:grid-cols-3 gap-8'>
        {posts.map((post, index) => (
          <div className='fade-in' key={post.id}>

          <div className='blog-card'>
            <BlogCard post={post} isDarkBackground={index % 2 === 0}/>

          </div>
          </div>
         
        ))}
      </div>
    
    
    
    </div>
  )
}

export default Mega
