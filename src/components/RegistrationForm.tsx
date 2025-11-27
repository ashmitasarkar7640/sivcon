import React, { useState } from 'react';

type FormData = {
  fullName: string;
  email: string;
  institution: string;
  experience: string;
  committeePreference: string;
  portfolioPreference: string;
  accommodationNeeded: boolean;
  photo?: File;
};

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    institution: '',
    experience: 'beginner',
    committeePreference: '',
    portfolioPreference: '',
    accommodationNeeded: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, files } = target;

    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: target.checked });
    } else if (type === 'file' && files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value !== undefined) {
        data.append(key, value instanceof File ? value : String(value));
      }
    });

    try {
      const response = await fetch('http://localhost/mun-registration/submit.php', {
        method: 'POST',
        body: data,
      });

      const result = await response.text();
      alert(result);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission failed', error);
      alert('Failed to submit the form.');
    }
  };

  return (
    <section id="register">
      <h2>Delegate Registration</h2>
      {isSubmitted ? (
        <p>Thank you for registering!</p>
      ) : (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="Full Name" />
          <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Email" />
          <input type="text" name="institution" required value={formData.institution} onChange={handleChange} placeholder="School/University" />

          <select name="experience" required value={formData.experience} onChange={handleChange}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          <select name="committeePreference" required value={formData.committeePreference} onChange={handleChange}>
            <option value="">Select a committee</option>
            <option value="security-council">Security Council</option>
            <option value="general-assembly">General Assembly</option>
            <option value="ecosoc">ECOSOC</option>
          </select>

          <input
            type="text"
            name="portfolioPreference"
            placeholder="Portfolio Preferences"
            value={formData.portfolioPreference}
            onChange={handleChange}
          />

          <label>
            <input
              type="checkbox"
              name="accommodationNeeded"
              checked={formData.accommodationNeeded}
              onChange={handleChange}
            />{' '}
            Accommodation Needed
          </label>

          <input type="file" name="photo" accept="image/*" onChange={handleChange} />

          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
};

export default RegistrationForm;
