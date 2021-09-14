# shopping-cart

## State Design Pattern

> I wrote this as a script for a talk. For more accurate infomation, please read the references.

A behavioral design pattern that lets an object alter its *behavior* when its internal *state* changes.
This pattern is closely related to the concept of *Finite-State Machine*, which is a mathematical model of computation.

A program can behaves differently by *unique finite number of states*, and the program should switch from one state to another when is required.
These switching rules are also finite and predetermined.

### Problem

These kind of programs usually implements a lots of conditional operators in the entire code trying to select the appropriate behavior depending on the current state of the object.
The biggest weakness of these program is that, once we start adding more states and rules,
most methods will contain monstrous conditionals that pick the proper behavior of a method according to the current state.
Code like this is very difficult to maintain because any change to the transition logic may require changing state conditionals in every method. 
The problem tends to get bigger as a project evolves. It’s quite difficult to predict all possible states and transitions at the design stage

### Solution

This design pattern suggests the creating a class for each state of an object and extract the state-specific behaviors into these classes instead of
implementing all behaviors on its own.

An object, called *context*, stores a reference to one of the *state* objects, and the context delegates all the state-related work to that state object.
To transition the context into another state, replace the active state object with another object that represents that new state.
This is possible only if all state classes follow the same interface and the context itself works with these objects through that interface.

### References

https://refactoring.guru/design-patterns/state
https://en.wikipedia.org/wiki/Finite-state_machine
