### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

JSON Web Token
  = a compact, URL-safe means of representing claims between two parties. The claims are typically statements about an entity and additional data. Commonly used for authentication and information exchange in web development. 

- What is the signature portion of the JWT?  What does it do?

  = the signature is the third part of the token
    - Used to ensure the integrity and authenticity of the info contained in the token. 
    -It is created by applying a cryptographic algorithm to the base64-encoded header and payload, using a secret (or private key). The signature allows the recipient to verify that the JWT has not been tampered with during transmission.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes, unless the payload is encrypted
    anyone who intercepts a JWT can base64-decode the payload and read its contents. 
  - The attacker cannot tamper with the payload without invalidating the signature. 
  - To enhance security, sensitive information in the payload should be encrypted if confidentiality is a concern. 

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  1 User Login: 
    when a user successfully logs in, the server creates a JWT containing user information (claims) and signs it with a secret key. 

  2 JWT Issuance: The server sends the JWT to the client.

  3 Client Requests: The client includes the JWT in the headers of subsequent requests to acess protected resources. 

  4 JWT Verification: The server, upon receiving a request, verifies the JWT's signature using the shared secret key.

  5 Access Granted: If the signature is valid, the server extracts user information from the JWT and grants access to the requested resource. 

- Compare and contrast unit, integration and end-to-end tests.

  Unit tests: 
    - test individual components or functions in isolation
    - focuses on a small piece of code

  Integration tests: 
    - tests the interactcion between multiple components or systems
    - ensures that different parts work together as expected

  End-to-End tests: 
    - tests the entire application flow from start to finish
    - emulates real user scenarios
    - checks the system's behavior in a production-like environment

  Comparison: 
    - unit tests are fine-grained and isolated
    - integration tests validate interactions between components
    - end-to-end tests cover the entire application flow

- What is a mock? What are some things you would mock?
  A mock is an object used for testing purposes instead of actual dependencies.
    - used to isolate and test specific parts of a system without involving the entire application.
  Examples: 
    - external APIs or services to avoid making actual network requests
    - database queries to test without modifying the database
    - functions or methods with complex dependencies

- What is continuous integration?
  CI = development practice where code changes are automatically built, tested, and integrated into a shared repository multiple times a day. 
    -The goal is to detect and address integration issues early in the dev process, promoting collaboration and making sure the software is always in a releasable state. 

- What is an environment variable and what are they used for?
  - variable outside the application code that stores configuration settings or system information. They are used to store sensitive information, configuration settings, or system-specific values, allowing for flexibility and security in software deployment. 

- What is TDD? What are some benefits and drawbacks?
  TDD = test-driven development
    - development approach where tests are written before the actual code is implemented

  Benefits:
    - early bug detection
    - improved code quality
    - better design decisions 
    - regression testing

  Drawbacks: 
    - initial time investment
    - learning curve
    - overemphasis on testing every small detail may lead to rigid code

- What is the value of using JSONSchema for validation?
  JSONSchema = standard for defining the structure of JSON data.

  some benefits: 
    - schema definition: clearly defines the expected structure of JSON data
    - validation: ensures that data adheres to a predefined schema
    - documentation: serves as documentation for the expected format
    - interoperability: facilitates communication between different systems by providing a common understanding of data structures.

- What are some ways to decide which code to test?
  - critical paths: test code paths that are critical to the application's functionality
  - edge cases: test boundary conditions and edge cases
  - complex logic: test functions with complex business logic
  - integration points: test interactions with external services or databases
  - error handling: test error-handling scenarios
  - changes: test code that has recently changed or been added. 

- What does `RETURNING` do in SQL? When would you use it?
  - `RETURNING` = clause in SQL that is used with the `INSERT`, `UPDATE`, or `DELETE` statements.
  returns the values of columns after a row has been inserted, updated, or deleted, providing a way to retrieve information about the affected rows. 
  - used when you need to obtain the values of specific columns after performing one of the operations. 

- What are some differences between Web Sockets and HTTP?
  - HTTP:
    - request-response protocol
    - stateless: each request is independent
    - communication initiated by client
    - polling or long polling for real-time updates. 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  - I feel that Flask was simpler to learn
  - Express is straightforward as well, but has more of a learning curve. 
    I do enjoy JavaScript, so I enjoy working in Express as well. 

  - I don't have a huge preference of one over the other. 