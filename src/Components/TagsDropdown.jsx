import { useState, useEffect } from 'react';

const TagsDropdown = ({ contract, tag, setTag }) => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const getTags = async () => {
            const fetchedTags = contract ? await contract.getTags() : [];
            setTags(fetchedTags);
        };

        const fetchData = async () => {
            await getTags();
        };
        fetchData();
    }, [contract]);

    return (
        <div className='mt-8'>
            <div>Tags</div>
            <select id='tags' className='p-1 rounded-lg' value={tag} onChange={(e) => setTag(+e.target.value)}>
                {tags.map((tag, index) => (
                    <option key={index} value={index}>{tag}</option>
                ))}
            </select>
        </div>
    );
};

export default TagsDropdown;
