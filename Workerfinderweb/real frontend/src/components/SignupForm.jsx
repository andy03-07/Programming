import React from 'react';

const SignupForm = ({ form, handleChange, handleSubmit, errors }) => (
  <form onSubmit={handleSubmit}>
    <label>Full Name</label>
    <input type="text" name="fullName" value={form.fullName} onChange={handleChange} />
    {errors.fullName && <p>{errors.fullName}</p>}

    <label>Email</label>
    <input type="email" name="email" value={form.email} onChange={handleChange} />
    {errors.email && <p>{errors.email}</p>}

    {/* Add other form fields */}

    <button type="submit">Create Account</button>
  </form>
);

export default SignupForm;
