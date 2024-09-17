import { useState } from 'react';
import styles from './form.module.css'; 
import { useNavigate } from 'react-router';
const companies = ['Greenhouse', 'Lever.co', 'Y-combinator', 'Well Found', 'AngelList'];
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
  const navigate = useNavigate();

  const [location, setLocation] = useState('');
  const handleSiteChange = (e) => {
    const { value, checked } = e.target;
    setSelectedSites((prev) =>
      checked ? [...prev, value] : prev.filter((site) => site !== value)
    );
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateRestrict = `${dateFilterUnit.charAt(0)}${dateFilterValue}`;
    const formData = {
      sites: selectedWebsites,
      include: selectedJobTitles,
      exclude: jobTitles.filter(title => !selectedJobTitles.includes(title)),
      location,
      dateRestrict,
    
    };
    navigate('/jobs')
    console.log('Form Data:', formData);
  };

  return (
    <Card>
      <h1 className={styles.cardTitle}>Jobsmith</h1>
      <form onSubmit={handleSubmit}>
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
