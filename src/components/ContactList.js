import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));

      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);
  return (
    <div className="search">
      <h6>저장된 연락처 수 : {filteredList.length}</h6>
      <SearchBox />
      <h6>
        
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </h6>
    </div>
  );
};

export default ContactList;
