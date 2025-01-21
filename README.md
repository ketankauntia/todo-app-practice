<img width="609" alt="image" src="https://github.com/user-attachments/assets/d16ec797-1d7e-4b91-bf03-1a97c2bfa8e9" />


// reference-issue
Why No Page Reload in my Code?
In your code, the button is not wrapped inside a <form> element.
By default, a button inside a form behaves as a submit button, which triggers the form's default behavior of submitting data and reloading the page.

Since your <button> is not part of a form, it does not have this default submit behavior, so there's no need for e.preventDefault().
