import React from 'react';
import './index.css'; // Make sure to create this CSS file

const blogPosts = [
  {
    title: 'The Top 5 Job Interview Questions For IT Professional',
    date: '25 Jan, 2023',
    comments: 3,
    excerpt: 'nfoWorld, the leading voice in emerging enterprise technology, is the go-to resource for developers, architects, and business leaders launching next-generation initiatives on scalable cloud platforms, where such future-focused tech as AI or machine learning, big data analytics, and NoSQL databases evolve continuously. Go through their blog and learn more about their careers, events, analytics, and more.',
    image: 'https://tse4.mm.bing.net/th?id=OIP.BI7JTBI2cTFiGSen2aDjTAHaEK&pid=Api&P=0&h=180', // Update with actual image paths
  },
  {
    title: '7 Careers To Consider If You Love Traveling',
    date: '25 Jan, 2023',
    comments: 3,
    excerpt: 'nfoWorld, the leading voice in emerging enterprise technology, is the go-to resource for developers, architects, and business leaders launching next-generation initiatives on scalable cloud platforms, where such future-focused tech as AI or machine learning, big data analytics, and NoSQL databases evolve continuously. Go through their blog and learn more about their careers, events, analytics, and more.',
    image: 'https://3back.com/app/uploads/2017/07/Team-scaled.jpg',
  },
  {
    title: 'When the Perfect Candidate Turns Out To Be an Imperfect Fit',
    date: '25 Jan, 2023',
    comments: 3,
    excerpt: 'nfoWorld, the leading voice in emerging enterprise technology, is the go-to resource for developers, architects, and business leaders launching next-generation initiatives on scalable cloud platforms, where such future-focused tech as AI or machine learning, big data analytics, and NoSQL databases evolve continuously. Go through their blog and learn more about their careers, events, analytics, and more.',
    image: 'https://flatworldknowledge.lardbucket.org/books/sociological-inquiry-principles-qualitative-and-quantitative-methods/section_15/9fed1f8db157b8edf770dcd874bd6fac.jpg',
  },
];

const Blogs = () => {
  return (
    <div className="blogs-container">
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-post">
          <img src={post.image} alt={post.title} className="blog-image" />
          <h2>{post.title}</h2>
          <p className="blog-meta">Posted on {post.date} - {post.comments} Comments</p>
          <p>{post.excerpt}</p>
          <a href="#" className="read-more">Read More &gt;</a>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
