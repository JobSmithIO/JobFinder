import { useState } from 'react';
import styles from './form.module.css'; 
import { useNavigate } from 'react-router';
import axios from 'axios';

const companies = ['Greenhouse', 'Lever.co', 'Y-combinator', 'Well Found', 'AngelList', 'Workable', 'Smart-Recruiters'];
const jobTitles = [
  'Software Engineer',
  'Front-end Engineer',
  'Back-end Engineer',
  'Entry-level',
  'Junior Software Engineer',
  'Mid-level Software Engineer',
  'Staff Software Engineer'
];

const Card = ({ children }) => (
  <div className={styles.card}>
    {children}
  </div>
);

const Dropdown = ({ label, options, onSelect }) => (
  <div className={styles.dropdownContainer}>
    <label className={styles.dropdownLabel}>{label}</label>
    <select
      className={styles.dropdownSelect}
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">Select an option</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

const SelectedItems = ({ items, onRemove }) => (
  <div className={styles.selectedItemsContainer}>
    {items.map(item => (
      <button
        key={item}
        onClick={() => onRemove(item)}
        className={styles.removeButton}
      >
        {item} ✕
      </button>
    ))}
  </div>
);

export default function JobSearchForm() {
  const [selectedJobTitles, setSelectedJobTitles] = useState([]);
  const [selectedWebsites, setSelectedWebsites] = useState([]);
  const [dateFilterUnit, setDateFilterUnit] = useState('days');
  const [dateFilterValue, setDateFilterValue] = useState('7');
  const [location, setLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleJobTitleSelect = (title) => {
    if (title && !selectedJobTitles.includes(title)) {
      setSelectedJobTitles([...selectedJobTitles, title]);
    }
  };

  const handleJobTitleRemove = (title) => {
    setSelectedJobTitles(selectedJobTitles.filter(t => t !== title));
  };

  const handleWebsiteSelect = (website) => {
    if (website && !selectedWebsites.includes(website)) {
      setSelectedWebsites([...selectedWebsites, website]);
    }
  };

  const handleWebsiteRemove = (website) => {
    setSelectedWebsites(selectedWebsites.filter(w => w !== website));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dateRestrict = `${dateFilterUnit.charAt(0)}${dateFilterValue}`;
    const formData = {
      sites: selectedWebsites,
      include: selectedJobTitles,
      exclude: jobTitles.filter(title => !selectedJobTitles.includes(title)),
      location,
      dateRestrict,
    };

    try {
      const response = await axios.post('/api/search-jobs', formData);
      navigate('/jobs', { state: { jobResults: response.data } });
    } catch (error) {
      setErrorMessage('Couldn\'t fetch data based on the current query.');
    }
  };

  return (
    <Card>
      <h1 className={styles.cardTitle}>Jobsmith</h1>
      <form onSubmit={handleSubmit}>
        {errorMessage && ( 
         <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 text-center">
            {errorMessage}
          </div>
        )}
        <Dropdown
          label="Job Titles"
          options={jobTitles}
          onSelect={handleJobTitleSelect}
        />
        <SelectedItems items={selectedJobTitles} onRemove={handleJobTitleRemove} />
        
        <div className={styles.inputFieldContainer}>
          <label className={styles.inputFieldLabel}>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter city, state, or country"
            className={styles.inputFieldInput}
          />
        </div>

        <Dropdown
          label="Websites"
          options={companies}
          onSelect={handleWebsiteSelect}
        />
        <SelectedItems items={selectedWebsites} onRemove={handleWebsiteRemove} />

        <div className={styles.dateFilterContainer}>
          <label className={styles.dateFilterLabel}>Date Filter</label>
          <div className={styles.dateFilterInputs}>
            <input
              type="number"
              value={dateFilterValue}
              onChange={(e) => setDateFilterValue(e.target.value)}
              min="1"
              className={styles.dateFilterInput}
            />
            <select
              value={dateFilterUnit}
              onChange={(e) => setDateFilterUnit(e.target.value)}
              className={styles.dateFilterSelect}
            >
              <option value="days">Days</option>
              <option value="weeks">Weeks</option>
              <option value="months">Months</option>
            </select>
          </div>
        </div>

        <button 
          type="submit"
          className={styles.formSubmitButton}
        >
          Submit
        </button>
      </form>
    </Card>
  );
}
