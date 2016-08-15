# papoose

<h2>What is it?</h2>

A function that pipes the results of one function to the next

<h2>Usage (node)</h2>

<ol>

<li>Require the Papoose module</li>
<pre>
  <code>
  var papoose = require('papoose');
  </code>
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
  <code>
  var pipeFn = papoose.pipe(foo, bar, baz);
  </code>
</pre>

<li>Invoke the function returned from the step above by passing in the arguments you'd want to start off the pipe process with. Note: These arguments are used by the first function in the step above, and the result is piped to the subsequent function.

<pre><code>pipeFn(1,2,3);</code></pre>

</ol>

<h2>Usage (browser)</h2>
<ol>

<li>Instantiate a Papoose object</li>

<pre>
  <code>
  var papoose = new Papoose();
  </code>
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
    <code>
    var pipeFn = papoose.pipe(foo, bar, baz);
    </code>
  </pre>

  <li>Invoke the function returned from the step above by passing in the arguments you'd want to start off the pipe process with. Note: These arguments are used by the first function in the step above, and the result is piped to the subsequent function.

  <pre><code>pipeFn(1,2,3);</code></pre>
</ol>
