// will handle all aspects in regards to the dashboard appearance and data that is retrieved and placed into it. 
const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#blog-name').value.trim();
    const description = document.querySelector('#blog-desc').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create blog');
      }
    }
  };
  
  // used to determine how delete button will function 
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete blog');
      }
    }
  };
  
  // used to determine how update button will function 
  const updButtonHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#blog-name').value.trim();
    const description = document.querySelector('#blog-desc').value.trim();
    const blogId = event.target.getAttribute('data-id');
  
    if (name && description && blogId) {
      const response = await fetch(`/api/blogs/${blogId}`, {
        method: 'PUT',
        body: JSON.stringify({name, description}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update blog');
      }
    }
  };
  
  document.querySelectorAll('.blog-update').forEach(button => {
    button.addEventListener('click', updButtonHandler);
  });
  
  
  document.querySelector('.new-blog-form').addEventListener('submit', newFormHandler);
  
  document.querySelectorAll('.blog-delete').forEach(button => {
    button.addEventListener('click', delButtonHandler);
  });