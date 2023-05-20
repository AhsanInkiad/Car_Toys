import React from 'react';

const Blogs = () => {
    return (
        <div className='flex ml-20 justify-center text-white'>
          
                <div className=' grid w-4/5  grid-cols-1  lg:grid-cols-2 my-20 py-10'>
                    <div className=' blogs w-3/4 border text-center mb-5'>
                        <p className='text-lg font-semibold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?  </p>
                        <p> <br /> Access tokens are short-lived credentials for accessing protected resources. Refresh tokens are long-lived tokens used to obtain new access tokens. They should be stored securely on the client-side, such as in http-only cookies. Avoid storing them in local storage or session storage. Use token storage libraries for secure management. Protecting tokens is essential for data security.</p>
                    </div>
                    <div className='blogs w-3/4 border text-center mb-5'>
                        <p className='text-lg font-semibold'>Compare SQL and NoSQL databases?</p>
                        <p> <br /> SQL databases provide strong consistency, predefined schemas, and powerful transaction support, making them suitable for structured and complex data. NoSQL databases offer flexible schemas, horizontal scalability, and better performance for handling large amounts of unstructured or semi-structured data. The choice depends on the specific requirements of the project, data model, scalability needs, and trade-offs between consistency and performance. </p>
                    </div>
                    <div className='blogs w-3/4 border text-center mb-5'>
                        <p className='text-lg font-semibold'>What is express js? What is Nest JS ?</p>
                        <p><br />Express.js is a minimalist web application framework for Node.js that simplifies the process of building web applications and APIs. It offers routing, middleware, and HTTP utility methods, and is highly flexible and widely used in the Node.js ecosystem. <br />
                            <br /> Nest.js, on the other hand, is a scalable Node.js framework that utilizes TypeScript and follows a modular architecture. It is built on top of Express.js and provides a structured approach for developing server-side applications. </p>
                    </div>
                    <div className='blogs border w-3/4 text-center mb-5'>
                        <p className='text-lg font-semibold'>What is MongoDB aggregate and how does that work ?</p>
                        <p> <br /> MongoDB's aggregate is a data processing feature that performs complex operations on collections of documents. It uses a pipeline approach with stages like matching, grouping, sorting, and aggregating data. Developers can shape the output using various stages and operators. It enables efficient data manipulation, reduces the need for multiple queries, and improves performance. </p>
                    </div>


                </div>
           

        </div>
    );
};

export default Blogs;