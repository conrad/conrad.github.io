blog post on functional/imperative

Sources
  - http://latentflip.com/imperative-vs-declarative/
  - http://stackoverflow.com/questions/602444/what-is-functional-declarative-and-imperative-programming
  - http://programmers.stackexchange.com/questions/32781/declarative-programming-vs-imperative-programming
  - http://programmers.stackexchange.com/questions/209517/why-is-imperative-programming-preferred-over-functional-programming
  - http://programmers.stackexchange.com/questions/158715/are-small-amounts-of-functional-programming-understandable-by-non-fp-people/158721#158721
  - https://msdn.microsoft.com/en-us/library/bb669144.aspx


Programming Paradigms

Declarative 
  Definitions:
    - any style of programming that is not imperative
    - a non-imperative style of programming in which programs describe their desired results without explicitly listing commands or steps that must be performed
    - A program that describes what computation should be performed and not how to compute it
    - Any programming language that lacks side effects (or more specifically, is referentially transparent)
    - A language with a clear correspondence to mathematical logic
  Types:
    - Logical
      - programs consist of logical statements, and the program executes by searching for proofs of the statements
      - languages: Prolog & database query languages, like SQL
      - The specifics of how these queries are answered is up to the implementation.
    - Functional
      - all functions are without side effects, and state changes are only represented as functions that transform the state, which is explicitly represented as a first class object in the program.
      - languages:  Scheme, Clojure, Erlang, Haskell, OCaml, Standard ML and Unlambda ...Lisp
      - While functional languages typically do appear to specify "how", a compiler for a purely functional programming language is free to extensively rewrite the operational behavior of a function, so long as the same result is returned for the same inputs. 

Imperative
  Definition:
    - describes computation in terms of statements that change a program state
    - imperative programs define sequences of commands for the computer to perform. 
    - Imperative programming (necessary programming) is focused on describing how a program operates.
  Types:
    - Procedural
      - imperative programming in which the program is built from one or more procedures (also known as subroutines or functions).
      - procedural & imperative are often used as synonyms
      - but the use of procedures has a dramatic effect on how imperative programs appear and how they are constructed. 
      - Heavily-procedural programming, in which state changes are localized to procedures or restricted to explicit arguments and returns from procedures, is known as structured programming. 
        From the 1960s onwards, structured programming and modular programming in general have been promoted as techniques to improve the maintainability and overall quality of imperative programs. 
        OBJECT-ORIENTED PROGRAMMING extends this approach.

