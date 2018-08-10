<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

Middleware can modify the requests and response objects during the requeste/response cycle. They can be used for data cleaning, error handling, body parsing, stop requests from reaching the server if it is an invalid request, and etc.  Sessions persists information on the client and can be used throughout multiple routes which is like a global variable almost. Bcrypt is a security package that creates hashes which is a one way function. This means once the hash has been created, it cannot be reverted back to its original form. JWT is usually stored on local storage and its another means of authentication.

2.  What does bcrypt do in order to prevent attacks?

Bcrypt protects against rainbow tables and brute-force attacks. Since packets might get intercepted, it would be bad for the interceptor to get a hold of those packets if it contains sensitive information like a password, definitely if its just plain text or break into the server. This is where Bcrypt comes in, it is able to salt the password then hash it so the passwords are hard to crack. The attacker has to use a brute force attack to try every combination which they get converted to hash form and compared to the password hash in order to find the right password or use a rainbow table.


1.  What are the three parts of the JSON Web Token?

The three parts of the JWT is the header, the payload, and the signature. The header has two parts, the hashing algorithm for the JWT for security purposes and the type of token it is. Next we have the payload which contains the important information of the JWT. We have registered claims such as the expiration time, subject, audience, and etc. Public claims are custom claim names that are required to be collision resistant. Private claims is an agreement between the client and server to share information depending on authorization. Last part of the JWT is the signature, this makes sure that the header and payload are not modified.