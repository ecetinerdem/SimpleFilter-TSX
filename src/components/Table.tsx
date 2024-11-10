import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { BiSort } from 'react-icons/bi';
import { MdSort } from 'react-icons/md';
import { AiOutlineDown } from 'react-icons/ai';
import { data } from '../utils/data';

const ProjectTable = () => {
  const [projects, setProjects] = useState(data);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [filtersVisibşe, setFiltersVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    name: "";
    country: "";
    email: "";
    project: "";
    status: "";
  });

  const [statusDropdownVisible, setStatusDropdownVisible] = useState<number | null>(null);

  const sortProjects = (key: string) => {
    let sortedProjects = [...projects]
    if (
      sortConfig && sortConfig.key === key && sortConfig.direction === "ascending"
    ) {
      sortedProjects.sort((a, b) =>(a[key] > b[key] ? -1 : 1));
      setSortConfig({key, direction: "descending"});
    } else {
      sortedProjects.sort ((a, b) => (a[key] > b[key] ? 1: -1));
      setSortConfig({key, direction: "ascending"});
    }
    setProjects(sortedProjects);
  }

  const handleSortOptionClick = (key: string) => {
    sortProjects(key);
    setDropdownVisible(false);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters, [e.target.name]: e.target.value
    });
  };


  

};
