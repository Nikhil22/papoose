# papoose

<h2>What is it?</h2>

A function that pipes the results of one function to the next

<h2>Usage (node)</h2>

<ol>

<li>Require the Papoose module</li>
<pre>
  var papoose = require('papoose');
</pre>

<li>
  Set up the functions that you wish to use (example)
</li>

<br>

<pre>
  <code>
    function foo(a, b, c) {
      return a + b + c;
    }

    function bar(a) {
      return a * a;
    }

    function baz(a) {
      return a - 1;
    }
  </code>
</pre>

<li>
  Invoke <strong>pipe</strong> by passing in all your functions as arguments. Note: These functions execute in the order you pass them
</li>

<pre>
  var pipeFn = papoose.pipe(foo, bar, baz);
</pre>

<li>Invoke the function returned from the step above by passing in the arguments you'd want to start off the pipe process with. Note: These arguments are used by the first function in the step above, and the result is piped to the subsequent function.

<pre>pipeFn(1,2,3);</pre>

</ol>

<h2>Usage (browser)</h2>
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

  <li>Invoke the function returned from the step above by passing in the arguments you'd want to start off the pipe process with. Note: These arguments are used by the first function in the step above, and the result is piped to the subsequent function.

  <pre>pipeFn(1,2,3);</pre>
</ol>
