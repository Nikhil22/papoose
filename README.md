# papoose

<h2>What is it?</h2>

A function that pipes the results of one function to the next

<h2>Usage</h2>
<ol>

  <li>
    Set up the functions that you wish to use (example)
  </li>

  <br>

  <pre>
    function foo(a, b, c) {
      return a + b + c;
    }

    function bar(a) {
      return a * a;
    }

    function baz(a) {
      return a - 1;
    }
  </pre>

  <li>Instantiate a Papoose object</li>

  <pre>
    var papoose = new Papoose();
  </pre>

  <li>
    Invoke <strong>pipe</strong> by passing in all your functions as arguments. Note: These functions execute in the order you pass them
  </li>

  <pre>
    var pipeFn = papoose.pipe(foo, bar, baz);
  </pre>

  <li>Invoke the function returned from the step above by passing in the arguments you'd want to start off the pipe process with. Note: These arguments are used by the first function in step 2 above

  <pre>pipeFn(1,2,3);</pre>
</ol>
