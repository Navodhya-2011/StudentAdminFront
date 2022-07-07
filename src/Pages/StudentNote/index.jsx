import "./index.css"
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";

function StudentNote() {
    const [query, setQuery] = useState("");
    const [notes , setNotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const res = await axios.get(`http://localhost:4000/note/note`);
        setNotes(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
        }, [query]);
    
    return (
        <div className="app">
            <input
                className="search"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            {<Table data={notes} />}
        </div>
    );
}

export default StudentNote;