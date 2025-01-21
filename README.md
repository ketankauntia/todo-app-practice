//Why No Page Reload in Your Code?
In your code, the button is not wrapped inside a <form> element.
By default, a button inside a form behaves as a submit button, which triggers the form's default behavior of submitting data and reloading the page.

Since your <button> is not part of a form, it does not have this default submit behavior, so there's no need for e.preventDefault().
