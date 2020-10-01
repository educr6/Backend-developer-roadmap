## OS and General Knowledge
Main takeaways and sources of step 3 of the roadmap (the most important/relevant for me in this journey)
&nbsp;  
&nbsp;

# Memory Management
General concepts
- https://www.memorymanagement.org/mmref/index.html#mmref-intro
- https://www.memorymanagement.org/mmref/index.html#mmref-intro


Main takeaways (MM meaning memory management)
- Memory management is a field of computer science which pursuits the good use of memory resources to furfil an applications intent, without affecting its reliability, performance, scalaibitty, etc.
- Memory magament is divided into Hardware MM, Operating sytem MM and Application MM. The area of interest in this case is Application MM.
- The two main tasks of MM is allocation of memory and recycling
- And the most common problems are : premature frees, memory leaks, fragmentation
- Modern languages use automattic memory managers (Javascript, python and Go incluided)
- The main cause for leaks in garbage collectetd languages are unwanted references.


MM in languages
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management
- https://realpython.com/python-memory-management/
- https://towardsdatascience.com/memory-management-in-python-6bea0c8aecc9
- https://www.geeksforgeeks.org/memory-management-in-python/
- https://medium.com/a-journey-with-go/go-memory-management-and-allocation-a7396d430f44
- https://go101.org/article/memory-block.html
- https://blog.calsoftinc.com/2020/03/golang-memory-management.html  



# Interprocess Comunication

General Concepts
- https://www.geeksforgeeks.org/inter-process-communication-ipc/
- https://opensource.com/article/19/4/interprocess-communication-linux-storage  


Main takeways
- Interprocess Communication is the mechanism that allows programs (processes) to communicate with each other in a coordinated way
- The communication can happen through shared memory or messaging


# Threads and concurrency

General Concepts
- https://web.mit.edu/6.005/www/fa14/classes/17-concurrency/#:~:text=Concurrency%20means%20multiple%20computations%20are,cores%20on%20a%20single%20chip)
- https://en.wikipedia.org/wiki/Thread_(computing)
- Threads in python: https://en.wikibooks.org/wiki/Python_Programming/Threading#:~:text=Threading%20in%20python%20is%20used,are%20executed%20on%20different%20CPUs.&text=Python%20threads%20are%20used%20in,a%20task%20involves%20some%20waiting
- Concurrency in go: http://www.golang-book.com/books/intro/10

Main takeaways:
- A thread is small sequence of an instruction that is managed independently
- You can manipulate threads for making them start of finish in an specific order
- Threads are managed by a scheduler
- Race condition is the scenario where two processes try to reach for the shared resource at the same time, and tthe correctness of the program depends on their timing
- Concurrency means more than one computation happening at the same time
- Multithreading vs concurrency : Multithreading is a way of acheiving Concurrency


# POSIX Basics
- https://medium.com/@bhatta.naveen/untouched-posix-58cac9f26765

Main Takeaways
- POSIX is a standard
- It is a standard that defines a way to communicate with an OS
- It is a standard for shells (like bash, or zsh)
